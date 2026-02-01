from datetime import datetime
from typing import Any, Dict, List, Optional, Tuple, Set

from flask import Blueprint, request

from postgrest.exceptions import APIError

from app.core.db import SupabaseAdapter, db
from app.core.exceptions import CustomException
from app.core.security import get_current_user, require_auth, verify_token

schools_bp = Blueprint("schools", __name__, url_prefix="/schools")


def _safe_float(value: Any) -> Optional[float]:
    if value is None:
        return None
    try:
        return float(value)
    except (TypeError, ValueError):
        return None


def _safe_int(value: Any) -> Optional[int]:
    if value is None:
        return None
    try:
        return int(value)
    except (TypeError, ValueError):
        return None


def _default_unified_score(school_type: Optional[str]) -> float:
    if school_type == "市重点":
        return 690.0
    if school_type == "区重点":
        return 660.0
    return 630.0


def _default_district_quota(school_type: Optional[str]) -> int:
    if school_type == "市重点":
        return 35
    if school_type == "区重点":
        return 25
    return 15


def _default_school_quota(school_type: Optional[str]) -> int:
    if school_type == "市重点":
        return 10
    if school_type == "区重点":
        return 7
    return 3


def _default_autonomous_quota(school_type: Optional[str]) -> int:
    if school_type == "市重点":
        return 75
    if school_type == "区重点":
        return 40
    return 15


def _calculate_probability(
    benchmark_score: Optional[float],
    mock_best_score: Optional[float],
) -> int:
    if benchmark_score is None or mock_best_score is None:
        return 50

    diff = mock_best_score - benchmark_score
    #print(diff, mock_best_score, benchmark_score)
    if diff >= 5:
        base_probability = 90
    elif diff >= 0:
        base_probability = 85
    elif diff >= -10:
        base_probability = 70
    elif diff >= -15:
        base_probability = 60
    elif diff >= -20:
        base_probability = 50
    else:
        base_probability = 30

    return max(5, min(95, round(base_probability)))


def _build_stats(
    school_type: Optional[str],
    *,
    unified_score: Optional[float],
    district_score: Optional[float],
    district_quota: Optional[int],
    district_requested: bool,
    school_score: Optional[float],
    school_quota: Optional[int],
    autonomous_quota: Optional[int],
    mock_best_score: Optional[float],
) -> Dict[str, Any]:
    stats: Dict[str, Any] = {}
    stats["scoreUnified"] = unified_score
    stats["scoreToDistrict"] = district_score
    stats["scoreToSchool"] = school_score
    stats["quotaToDistrict"] = district_quota
    stats["quotaToSchool"] = school_quota
    stats["quotaAutonomous"] = autonomous_quota
    benchmark_scores = [
        score for score in [unified_score, district_score, school_score] if score is not None
    ]
    benchmark = min(benchmark_scores) if benchmark_scores else None
    stats["probability"] = _calculate_probability(benchmark, mock_best_score)
    return stats


def _extract_latest_value(
    records: Optional[List[Dict[str, Any]]],
    key: str,
    match_key: Optional[str] = None,
    match_value: Optional[Any] = None,
) -> Optional[Any]:
    if not records:
        return None
    candidates = []
    for record in records:
        if match_key and match_value is not None and record.get(match_key) != match_value:
            continue
        if key in record and record[key] is not None:
            candidates.append(record)
    if not candidates:
        return None
    candidates.sort(key=lambda record: record.get("year") or 0, reverse=True)
    return candidates[0].get(key)


def _extract_latest_year_value(
    records: Optional[List[Dict[str, Any]]],
    key: str,
) -> Optional[Any]:
    if not records:
        return None
    candidates = [record for record in records if record.get(key) is not None]
    if not candidates:
        return None
    candidates.sort(key=lambda record: record.get("year") or 0, reverse=True)
    return candidates[0].get(key)


def _get_supabase_client():
    if isinstance(db, SupabaseAdapter):
        return db.supabase
    return None


def _fetch_schools_with_supabase(
    q: str,
    type_filter: Optional[str],
    target_district: Optional[str],
    middle_school_id: Optional[str],
    page: int,
    per_page: Optional[int],
    school_codes: Optional[List[str]],
    target_school_codes: Optional[Set[str]],
    mock_best_score: Optional[float],
    stable_score: Optional[float],
    high_score: Optional[float],
    low_score: Optional[float],
) -> Tuple[List[Dict[str, Any]], int]:
    client = _get_supabase_client()
    if client is None:
        raise CustomException(
            status_code=500,
            code="DATABASE_ERROR",
            message="Supabase client is unavailable.",
        )

    select_parts = [
        "code",
        "name",
        "district",
        "type",
        "full_type",
        "parallel_admission_scores!parallel_admission_scores_high_school_code_fkey(total_admission_score,district,year)",
        "self_enrollment_quota!self_enrollment_quota_school_code_fkey(total_quota,year)",
    ]
    if target_district:
        select_parts.append(
            "district_seats!district_seats_high_school_code_fkey(seats,district,total_admission_score,year)"
        )
    school_seat_map: Dict[str, Dict[str, Any]] = {}
    if middle_school_id:
        print('middle_school_id:', middle_school_id)
        try:
            seats_result = (
                client.table("school_seats")
                .select("high_school_code,seats,total_admission_score,year")
                .eq("middle_school_code", middle_school_id)
                .execute()
            )
        except APIError as exc:
            raise CustomException(
                status_code=400,
                code="DATABASE_ERROR",
                message="到校名额查询失败。",
                details=exc.args[0] if exc.args else {},
            )
        if getattr(seats_result, "error", None):
            raise CustomException(
                status_code=400,
                code="DATABASE_ERROR",
                message="到校名额查询失败。",
                details=seats_result.error,
            )
        for record in seats_result.data or []:
            code = record.get("high_school_code")
            if not code:
                continue
            prev = school_seat_map.get(code)
            prev_year = prev.get("year") if prev else None
            next_year = record.get("year")
            if prev is None or (next_year or 0) > (prev_year or 0):
                school_seat_map[code] = record

    if school_codes is not None and len(school_codes) == 0:
        return [], 0

    query = client.table("schools").select(",".join(select_parts), count="exact")
    if q:
        query = query.ilike("name", f"%{q}%")
    if type_filter and type_filter != "全部":
        query = query.eq("type", type_filter)
    if school_codes is not None:
        query = query.in_("code", school_codes)

    try:
        result = query.execute()
    except APIError as exc:
        raise CustomException(
            status_code=400,
            code="DATABASE_ERROR",
            message="学校列表查询失败。",
            details=exc.args[0] if exc.args else {},
        )

    if getattr(result, "error", None):
        raise CustomException(
            status_code=400,
            code="DATABASE_ERROR",
            message="学校列表查询失败。",
            details=result.error,
        )

    schools = result.data or []
    total = getattr(result, "count", None)
    if total is None:
        total = len(schools)

    enriched = []
    for school in schools:
        school_id = school["code"]
        parallel_records = school.get("parallel_admission_scores") or []
        unified_score = _safe_float(
            _extract_latest_value(
                parallel_records, "total_admission_score", "district", target_district
            )
            or _extract_latest_value(parallel_records, "total_admission_score")
        )
        district_score = _safe_float(
            _extract_latest_value(
                school.get("district_seats"),
                "total_admission_score",
                "district",
                target_district,
            )
        )
        district_quota = _safe_int(
            _extract_latest_value(school.get("district_seats"), "seats", "district", target_district)
        )
        seat_record = school_seat_map.get(school_id)
        school_score = _safe_float(seat_record.get("total_admission_score")) if seat_record else None
        school_quota = _safe_int(seat_record.get("seats")) if seat_record else None
        autonomous_quota = _safe_int(
            _extract_latest_year_value(school.get("self_enrollment_quota"), "total_quota")
        )

        stats = _build_stats(
            school.get("type"),
            unified_score=unified_score,
            district_score=district_score,
            district_quota=district_quota,
            district_requested=target_district is not None,
            school_score=school_score,
            school_quota=school_quota,
            autonomous_quota=autonomous_quota,
            mock_best_score=mock_best_score,
        )

        enriched.append(
            {
                "id": school_id,
                "name": school["name"],
                "district": school["district"],
                "type": school["type"],
                "fullType": school.get("full_type"),
                "isTarget": school_id in target_school_codes if target_school_codes is not None else False,
                "stats": stats,
            }
        )

    enriched.sort(
        key=lambda school: school["stats"].get("scoreUnified")
        if school["stats"].get("scoreUnified") is not None
        else float("-inf"),
        reverse=True,
    )
    total = len(enriched)
    if per_page is None:
        return enriched, total
    start = (page - 1) * per_page
    end = start + per_page
    return enriched[start:end], total


def _fetch_schools_without_supabase(
    q: str,
    type_filter: Optional[str],
    target_district: Optional[str],
    middle_school_id: Optional[str],
    page: int,
    per_page: Optional[int],
    school_codes: Optional[List[str]],
    target_school_codes: Optional[Set[str]],
    mock_best_score: Optional[float],
    stable_score: Optional[float],
    high_score: Optional[float],
    low_score: Optional[float],
) -> Tuple[List[Dict[str, Any]], int]:
    raw_schools = db.select("schools", ["code", "name", "district", "type", "full_type"])
    filtered = []
    q_lower = q.lower()
    for school in raw_schools:
        if school_codes is not None and school["code"] not in school_codes:
            continue
        if q and q_lower not in school["name"].lower():
            continue
        if type_filter and type_filter != "全部" and school["type"] != type_filter:
            continue
        filtered.append(school)

    enriched = []
    school_seat_map: Dict[str, Dict[str, Any]] = {}
    if middle_school_id:
        seat_records = db.select(
            "school_seats",
            ["high_school_code", "seats", "total_admission_score", "year"],
            {"middle_school_code": middle_school_id},
        )
        for record in seat_records:
            code = record.get("high_school_code")
            if not code:
                continue
            prev = school_seat_map.get(code)
            prev_year = prev.get("year") if prev else None
            next_year = record.get("year")
            if prev is None or (next_year or 0) > (prev_year or 0):
                school_seat_map[code] = record
    for school in filtered:
        school_id = school["code"]
        district_score = None
        district_quota = None
        if target_district:
            district_seats = db.select(
                "district_seats",
                ["seats", "total_admission_score", "year"],
                {"high_school_code": school_id, "district": target_district},
            )
            if district_seats:
                district_seats.sort(key=lambda record: record.get("year") or 0, reverse=True)
                district_quota = _safe_int(district_seats[0].get("seats"))
                district_score = _safe_float(district_seats[0].get("total_admission_score"))

        school_score = None
        school_quota = None
        if middle_school_id:
            seat_record = school_seat_map.get(school_id)
            if seat_record:
                school_score = _safe_float(seat_record.get("total_admission_score"))
                school_quota = _safe_int(seat_record.get("seats"))

        autonomous_quota = None
        autonomous_records = db.select(
            "self_enrollment_quota",
            ["total_quota", "year"],
            {"school_code": school_id},
        )
        if autonomous_records:
            autonomous_quota = _safe_int(
                _extract_latest_year_value(autonomous_records, "total_quota")
            )

        parallel_records = db.select(
            "parallel_admission_scores",
            ["total_admission_score", "district", "year"],
            {"high_school_code": school_id},
        )
        unified_score = None
        if parallel_records:
            candidates = [
                record
                for record in parallel_records
                if record.get("district") == target_district and record.get("total_admission_score") is not None
            ]
            if not candidates:
                candidates = [
                    record
                    for record in parallel_records
                    if record.get("total_admission_score") is not None
                ]
            if candidates:
                candidates.sort(key=lambda record: record.get("year") or 0, reverse=True)
                unified_score = _safe_float(candidates[0].get("total_admission_score"))

        stats = _build_stats(
            school.get("type"),
            unified_score=unified_score,
            district_score=district_score,
            district_quota=district_quota,
            district_requested=target_district is not None,
            school_score=school_score,
            school_quota=school_quota,
            autonomous_quota=autonomous_quota,
            mock_best_score=mock_best_score,
        )

        enriched.append(
            {
                "id": school_id,
                "name": school["name"],
                "district": school["district"],
                "type": school["type"],
                "fullType": school.get("full_type"),
                "isTarget": school_id in target_school_codes if target_school_codes is not None else False,
                "stats": stats,
            }
        )

    enriched.sort(
        key=lambda school: school["stats"].get("scoreUnified")
        if school["stats"].get("scoreUnified") is not None
        else float("-inf"),
        reverse=True,
    )
    total = len(enriched)
    if per_page is None:
        return enriched, total
    offset = (page - 1) * per_page
    return enriched[offset : offset + per_page], total


@schools_bp.route("/", methods=["GET"])
def list_schools():
    q = request.args.get("q", "").strip()
    district = request.args.get("district")
    type_ = request.args.get("type")
    middle_school_id = request.args.get("middleSchoolId")

    stable_score = request.args.get("stableScore", type=float)
    high_score = request.args.get("highScore", type=float)
    low_score = request.args.get("lowScore", type=float)

    page_arg = request.args.get("page", type=int)
    per_page_arg = request.args.get("perPage", type=int)
    per_page = None
    page = 1
    if per_page_arg is not None:
        page = max(1, page_arg or 1)
        per_page = max(1, min(200, per_page_arg))

    target_district = None if district == "全部" else district

    target_school_codes: Optional[Set[str]] = None
    mock_best_score: Optional[float] = None
    auth_header = request.headers.get("Authorization", "")
    if auth_header.startswith("Bearer "):
        payload = verify_token(auth_header.split(" ", 1)[1])
        user_id = payload.get("sub") if payload else None
        if user_id:
            targets = db.select("target_schools", ["school_code"], {"user_id": user_id})
            target_school_codes = {
                record["school_code"]
                for record in targets
                if record.get("school_code")
            }
            mock_exams = db.select("mock_exams", ["total_score"], {"user_id": user_id})
            if mock_exams:
                mock_best_score = max(
                    (
                        _safe_float(record.get("total_score"))
                        for record in mock_exams
                        if record.get("total_score") is not None
                    ),
                    default=None,
                )

    if isinstance(db, SupabaseAdapter):
        enriched_schools, total = _fetch_schools_with_supabase(
            q,
            type_,
            target_district,
            middle_school_id,
            page,
            per_page,
            None,
            target_school_codes,
            mock_best_score,
            stable_score,
            high_score,
            low_score,
        )
    else:
        enriched_schools, total = _fetch_schools_without_supabase(
            q,
            type_,
            target_district,
            middle_school_id,
            page,
            per_page,
            None,
            target_school_codes,
            mock_best_score,
            stable_score,
            high_score,
            low_score,
        )

    return {
        "data": enriched_schools,
        "meta": {"total": total, "page": page, "perPage": per_page or total},
    }


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

    schools = db.select("schools", ["code", "name"], {"code": school_code})
    if not schools:
        raise CustomException(
            status_code=404,
            code="SCHOOL_NOT_FOUND",
            message="School not found.",
        )
    school = schools[0]

    existing = db.select(
        "target_schools",
        ["id", "school_code"],
        {"user_id": current_user["id"], "school_code": school_code},
    )
    if existing:
        return {"data": {"id": existing[0]["id"], "school_code": school_code, "isTarget": True}}

    data_payload = {
        "user_id": current_user["id"],
        "school_code": school_code,
        "school_name": school["name"],
        "created_at": datetime.utcnow().isoformat(),
        "updated_at": datetime.utcnow().isoformat(),
    }
    created = db.insert("target_schools", data_payload)
    if not created:
        raise CustomException(
            status_code=500,
            code="TARGET_CREATE_FAILED",
            message="Failed to create target school.",
        )
    return {"data": {"id": created.get("id"), "school_code": school_code, "isTarget": True}}


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

    targets = db.select("target_schools", ["school_code"], {"user_id": current_user["id"]})
    school_codes = [record["school_code"] for record in targets if record.get("school_code")]
    if not school_codes:
        return {"data": [], "meta": {"total": 0}}

    profiles = db.select(
        "student_profiles",
        ["district", "middle_school_code"],
        {"user_id": current_user["id"]},
    )
    profile = profiles[0] if profiles else {}
    target_district = profile.get("district")
    middle_school_id = profile.get("middle_school_code")
    mock_exams = db.select("mock_exams", ["total_score"], {"user_id": current_user["id"]})
    mock_best_score = None
    if mock_exams:
        mock_best_score = max(
            (
                _safe_float(record.get("total_score"))
                for record in mock_exams
                if record.get("total_score") is not None
            ),
            default=None,
        )

    target_school_codes = set(school_codes)
    if isinstance(db, SupabaseAdapter):
        enriched_schools, total = _fetch_schools_with_supabase(
            "",
            None,
            target_district,
            middle_school_id,
            1,
            None,
            school_codes,
            target_school_codes,
            mock_best_score,
            None,
            None,
            None,
        )
    else:
        enriched_schools, total = _fetch_schools_without_supabase(
            "",
            None,
            target_district,
            middle_school_id,
            1,
            None,
            school_codes,
            target_school_codes,
            mock_best_score,
            None,
            None,
            None,
        )

    return {"data": enriched_schools, "meta": {"total": total}}


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

    existing = db.select(
        "target_schools",
        ["id", "school_code"],
        {"user_id": current_user["id"], "school_code": school_code},
    )
    if not existing:
        raise CustomException(
            status_code=404,
            code="TARGET_NOT_FOUND",
            message="Target school not found.",
        )

    deleted = db.delete("target_schools", {"user_id": current_user["id"], "school_code": school_code})
    if not deleted:
        raise CustomException(
            status_code=500,
            code="TARGET_DELETE_FAILED",
            message="Failed to remove target school.",
        )
    return {"data": {"school_code": school_code, "isTarget": False}}


@schools_bp.route("/simple", methods=["GET"])
def list_schools_simple():
    """获取所有高中的名称和ID，用于选择列表"""
    # 从数据库查询所有高中的基本信息
    schools = db.select("high_schools", ["id", "name"])
    
    # 格式化返回数据
    simple_schools = [
        {
            "id": school["id"],
            "name": school["name"]
        }
        for school in schools
    ]
    
    return {
        "data": simple_schools,
        "meta": {"total": len(simple_schools)}
    }


@schools_bp.route("/<int:school_id>", methods=["GET"])
def get_school(school_id: int):
    return {"data": {"id": school_id, "name": "Placeholder School"}}


@schools_bp.route("/test", methods=["GET"])
def test():
    """测试API，无需认证"""
    return {"message": "Test API works!"}
