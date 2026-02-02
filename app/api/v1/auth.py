from typing import Type
from flask import Blueprint, request
from pydantic import BaseModel, ValidationError

from app.core.db import db
from app.core.exceptions import CustomException
from app.core.response import api_response
from app.core.security import get_current_user, require_auth
from app.services.auth_service import login_user, logout_user, register_user

auth_bp = Blueprint("auth", __name__, url_prefix="/auth")


class UserCreate(BaseModel):
    username: str
    email: str
    password: str


class UserLogin(BaseModel):
    username: str
    password: str


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

@auth_bp.route("/register", methods=["POST"])
def register():
    payload = request.get_json(silent=True)
    if payload is None:
        raise CustomException(
            status_code=400,
            code="INVALID_PAYLOAD",
            message="Request body is required.",
        )

    user_data = _parse_body(UserCreate, payload)

    payload = register_user(db, user_data.username, user_data.email, user_data.password)
    return api_response(payload)


@auth_bp.route("/login", methods=["POST"])
def login():
    payload = request.get_json(silent=True)
    if payload is None:
        raise CustomException(
            status_code=400,
            code="INVALID_PAYLOAD",
            message="Request body is required.",
        )

    credentials = _parse_body(UserLogin, payload)
    payload = login_user(db, credentials.username, credentials.password)
    return api_response(payload)


@auth_bp.route("/me", methods=["GET"])
@require_auth
def get_me():
    current_user = get_current_user()
    return api_response(current_user or {})


@auth_bp.route("/logout", methods=["POST"])
@require_auth
def logout():
    current_user = get_current_user()
    logout_user(db, current_user)
    return api_response({"message": "Logged out"})
