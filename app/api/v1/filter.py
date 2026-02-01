from datetime import datetime
from typing import Dict, List, Optional, Type

from flask import Blueprint, request
from pydantic import BaseModel, ValidationError

from app.core.db import db
from app.core.exceptions import CustomException
from app.core.security import get_current_user, require_auth

filter_bp = Blueprint("filter", __name__, url_prefix="/filter")


class MiddleSchool(BaseModel):
    id: str
    name: str
    district: str
    type: str


class FilterOptions(BaseModel):
    districts: List[str]
    junior_types: List[str]
    middle_schools: List[MiddleSchool]


class FilterOptionsResponse(BaseModel):
    data: FilterOptions


class StudentProfile(BaseModel):
    district: str
    junior_type: str
    middle_school_id: Optional[str] = None
    stable_score: float
    high_score: float
    low_score: float


def _parse_body(model: Type[BaseModel], payload: dict) -> BaseModel:
    try:
        return model(**payload)
    except ValidationError as exc:
        raise CustomException(
            status_code=400,
            code="VALIDATION_ERROR",
            message="Request payload validation failed.",
            details={"errors": exc.errors()},
        )


@filter_bp.route("/middle-schools", methods=["GET"])
@require_auth
def get_middle_schools():
    params = {}
    district = request.args.get("district")
    school_type = request.args.get("type")
    if district:
        params["district"] = district
    if school_type:
        params["type"] = school_type

    schools = db.select("middle_schools", ["code", "name", "district", "type"], params or None)

    result = []
    for school in schools:
        result.append({
            "id": school["code"],
            "name": school["name"],
            "district": school["district"],
            "type": school["type"],
        })

    return result


@filter_bp.route("/options", methods=["GET"])
@require_auth
def get_filter_options():
    schools = db.select("middle_schools", ["code", "name", "district", "type"])

    districts = sorted({school["district"] for school in schools})
    junior_types = sorted({school["type"] for school in schools})
    middle_schools = [
        {
            "id": school["code"],
            "name": school["name"],
            "district": school["district"],
            "type": school["type"],
        }
        for school in schools
    ]

    response = FilterOptionsResponse(
        data=FilterOptions(
            districts=districts,
            junior_types=junior_types,
            middle_schools=middle_schools,
        )
    )
    return response.dict()


@filter_bp.route("/student-profile", methods=["GET"])
@require_auth
def get_student_profile():
    current_user = get_current_user()
    if not current_user:
        raise CustomException(
            status_code=401,
            code="UNAUTHORIZED",
            message="User context missing.",
        )

    profiles = db.select("student_profiles", ["district", "junior_type", "middle_school_code", "stable_score", "high_score", "low_score"], {"user_id": current_user["id"]})
    if not profiles:
        return {"data": None}

    profile = profiles[0]
    return {
        "data": {
            "district": profile["district"],
            "junior_type": profile["junior_type"],
            "middle_school_id": profile.get("middle_school_code"),
            "stable_score": profile.get("stable_score"),
            "high_score": profile.get("high_score"),
            "low_score": profile.get("low_score"),
        }
    }


@filter_bp.route("/student-profile", methods=["POST"])
@require_auth
def save_student_profile():
    print(request)
    payload = request.get_json(silent=True)
    
    if payload is None:
        raise CustomException(
            status_code=400,
            code="INVALID_PAYLOAD",
            message="Request body is required.",
        )

    profile_data = _parse_body(StudentProfile, payload)
    current_user = get_current_user()
    if not current_user:
        raise CustomException(
            status_code=401,
            code="UNAUTHORIZED",
            message="User context missing.",
        )

    existing_profiles = db.select("student_profiles", ["id"], {"user_id": current_user["id"]})

    data_payload = {
        "district": profile_data.district,
        "junior_type": profile_data.junior_type,
        "middle_school_code": profile_data.middle_school_id,
        "stable_score": profile_data.stable_score,
        "high_score": profile_data.high_score,
        "low_score": profile_data.low_score,
    }

    if existing_profiles:
        updated = db.update(
            "student_profiles",
            {
                **data_payload,
                "updated_at": datetime.utcnow().isoformat(),
            },
            {"user_id": current_user["id"]},
        )
        if not updated:
            raise CustomException(
                status_code=500,
                code="PROFILE_UPDATE_FAILED",
                message="Failed to update student profile.",
            )
    else:
        created = db.insert(
            "student_profiles",
            {
                **data_payload,
                "user_id": current_user["id"],
                "created_at": datetime.utcnow().isoformat(),
                "updated_at": datetime.utcnow().isoformat(),
            },
        )
        if not created:
            raise CustomException(
                status_code=500,
                code="PROFILE_CREATE_FAILED",
                message="Failed to create student profile.",
            )

    return {"data": profile_data.dict()}
