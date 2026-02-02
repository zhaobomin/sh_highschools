from typing import Dict, List, Optional, Type

from flask import Blueprint, request
from pydantic import BaseModel, ValidationError

from app.core.db import db
from app.core.exceptions import CustomException
from app.core.response import api_response
from app.core.security import get_current_user, require_auth
from app.services.filter_service import (
    build_filter_options,
    get_student_profile as get_student_profile_service,
    list_middle_schools,
    save_student_profile as save_student_profile_service,
)

filter_bp = Blueprint("filter", __name__, url_prefix="/filter")


class MiddleSchool(BaseModel):
    id: str
    name: str
    district: str
    type: str


class FilterOptions(BaseModel):
    districts: List[str]
    middle_schools: List[MiddleSchool]


class FilterOptionsResponse(BaseModel):
    data: FilterOptions


class StudentProfile(BaseModel):
    district: str
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
    district = request.args.get("district")
    school_type = request.args.get("type")
    result = list_middle_schools(db, district, school_type)
    return api_response(result)


@filter_bp.route("/options", methods=["GET"])
@require_auth
def get_filter_options():
    data = build_filter_options(db)
    response = FilterOptionsResponse(data=FilterOptions(**data))
    return api_response(response.dict()["data"])


@filter_bp.route("/student-profile", methods=["GET"])
@require_auth
def get_student_profile():
    current_user = get_current_user()
    profile = get_student_profile_service(db, current_user)
    return api_response(profile)


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
    result = save_student_profile_service(db, current_user, profile_data.dict())
    return api_response(result)
