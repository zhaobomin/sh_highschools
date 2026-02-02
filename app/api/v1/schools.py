from typing import Optional, Set

from flask import Blueprint, request

from app.core.db import SupabaseAdapter, db
from app.core.exceptions import CustomException
from app.core.response import api_response
from app.core.security import get_current_user, require_auth, verify_token
from app.services.schools_service import (
    build_target_evaluations,
    derive_model,
    fetch_enriched_schools,
    get_evaluation_profile_payload,
    get_user_school_context,
    list_target_schools_payload,
    parse_list_schools_params,
)
from app.services.targets_service import (
    add_target_school as add_target_school_service,
    remove_target_school as remove_target_school_service,
    list_simple_schools,
    get_placeholder_school,
    get_test_message,
)

schools_bp = Blueprint("schools", __name__, url_prefix="/schools")




@schools_bp.route("/", methods=["GET"])
def list_schools():
    params = parse_list_schools_params(request.args)
    q = params["q"]
    district = params["district"]
    type_ = params["type_"]
    middle_school_id = params["middle_school_id"]
    stable_score = params["stable_score"]
    high_score = params["high_score"]
    low_score = params["low_score"]
    page = params["page"]
    per_page = params["per_page"]
    target_district = params["target_district"]

    target_school_codes: Optional[Set[str]] = None
    mock_best_score: Optional[float] = None
    auth_header = request.headers.get("Authorization", "")
    if auth_header.startswith("Bearer "):
        payload = verify_token(auth_header.split(" ", 1)[1])
        user_id = payload.get("sub") if payload else None
        if user_id:
            target_school_codes, mock_best_score = get_user_school_context(db, user_id)

    enriched_schools, total = fetch_enriched_schools(
        db,
        SupabaseAdapter,
        q=q,
        type_=type_,
        target_district=target_district,
        middle_school_id=middle_school_id,
        page=page,
        per_page=per_page,
        school_codes=None,
        target_school_codes=target_school_codes,
        mock_best_score=mock_best_score,
        stable_score=stable_score,
        high_score=high_score,
        low_score=low_score,
    )

    return api_response(enriched_schools, {"total": total, "page": page, "perPage": per_page or total})


@schools_bp.route("/targets", methods=["POST"])
@require_auth
def add_target_school():
    payload = request.get_json(silent=True) or {}
    school_code = payload.get("school_code") or payload.get("schoolId")
    if not school_code:
        raise CustomException(
            status_code=400,
            code="INVALID_PAYLOAD",
            message="school_code is required.",
        )

    current_user = get_current_user()
    if not current_user:
        raise CustomException(
            status_code=401,
            code="UNAUTHORIZED",
            message="User context missing.",
        )

    payload = add_target_school_service(db, current_user["id"], school_code)
    return api_response(payload)


@schools_bp.route("/targets", methods=["GET"])
@require_auth
def list_target_schools():
    current_user = get_current_user()
    if not current_user:
        raise CustomException(
            status_code=401,
            code="UNAUTHORIZED",
            message="User context missing.",
        )

    school_codes, target_district, middle_school_id, mock_best_score = list_target_schools_payload(
        db, current_user["id"]
    )
    if not school_codes:
        return api_response([], {"total": 0})

    # Get student profile scores
    profiles = db.select(
        "student_profiles",
        ["stable_score", "high_score", "low_score"],
        {"user_id": current_user["id"]},
    )
    profile = profiles[0] if profiles else {}
    stable_score = profile.get("stable_score")
    high_score = profile.get("high_score")
    low_score = profile.get("low_score")

    target_school_codes = set(school_codes)
    enriched_schools, total = fetch_enriched_schools(
        db,
        SupabaseAdapter,
        q="",
        type_=None,
        target_district=target_district,
        middle_school_id=middle_school_id,
        page=1,
        per_page=None,
        school_codes=school_codes,
        target_school_codes=target_school_codes,
        mock_best_score=mock_best_score,
        stable_score=stable_score,
        high_score=high_score,
        low_score=low_score,
    )

    return api_response(enriched_schools, {"total": total})


@schools_bp.route("/targets/evaluation", methods=["GET"])
@require_auth
def evaluate_target_schools():
    current_user = get_current_user()
    if not current_user:
        raise CustomException(
            status_code=401,
            code="UNAUTHORIZED",
            message="User context missing.",
        )

    targets = db.select("target_schools", ["school_code"], {"user_id": current_user["id"]})
    school_codes = [record["school_code"] for record in targets if record.get("school_code")]

    (
        profile_payload,
        target_district,
        middle_school_id,
        score_context,
    ) = get_evaluation_profile_payload(db, current_user["id"])
    stable_score = score_context["stable_score"]
    high_score = score_context["high_score"]
    low_score = score_context["low_score"]
    model = derive_model(
        stable_score,
        high_score,
        low_score,
        score_context["mock_scores"],
    )

    if not school_codes:
        return api_response(
            {
                "profile": profile_payload,
                "model": model,
                "targets": [],
            }
        )

    target_school_codes = set(school_codes)
    enriched_schools, _ = fetch_enriched_schools(
        db,
        SupabaseAdapter,
        q="",
        type_=None,
        target_district=target_district,
        middle_school_id=middle_school_id,
        page=1,
        per_page=None,
        school_codes=school_codes,
        target_school_codes=target_school_codes,
        mock_best_score=None,
        stable_score=stable_score,
        high_score=high_score,
        low_score=low_score,
    )

    evaluations = build_target_evaluations(enriched_schools, model)

    return api_response(
        {
            "profile": profile_payload,
            "model": model,
            "targets": evaluations,
        }
    )


@schools_bp.route("/targets/<school_code>", methods=["DELETE"])
@require_auth
def remove_target_school(school_code: str):
    current_user = get_current_user()
    if not current_user:
        raise CustomException(
            status_code=401,
            code="UNAUTHORIZED",
            message="User context missing.",
        )

    payload = remove_target_school_service(db, current_user["id"], school_code)
    return api_response(payload)


@schools_bp.route("/simple", methods=["GET"])
def list_schools_simple():
    """获取所有高中的名称和ID，用于选择列表"""
    # 从数据库查询所有高中的基本信息
    simple_schools = list_simple_schools(db)
    return api_response(simple_schools, {"total": len(simple_schools)})


@schools_bp.route("/<int:school_id>", methods=["GET"])
def get_school(school_id: int):
    return api_response(get_placeholder_school(school_id))


@schools_bp.route("/test", methods=["GET"])
def test():
    """测试API，无需认证"""
    return api_response(get_test_message())
