from datetime import datetime
from typing import Type

import bcrypt
from flask import Blueprint, request
from pydantic import BaseModel, ValidationError

from app.core.db import db
from app.core.exceptions import CustomException
from app.core.security import create_access_token, get_current_user, require_auth

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

    if db.select("users", ["*"], {"email": user_data.email}):
        raise CustomException(
            status_code=400,
            code="EMAIL_TAKEN",
            message="Email already registered.",
        )
    if db.select("users", ["*"], {"username": user_data.username}):
        raise CustomException(
            status_code=400,
            code="USERNAME_TAKEN",
            message="Username already taken.",
        )

    hashed_password = bcrypt.hashpw(user_data.password.encode("utf-8"), bcrypt.gensalt()).decode("utf-8")
    created_user = db.insert(
        "users",
        {
            "username": user_data.username,
            "email": user_data.email,
            "password_hash": hashed_password,
            "email_verified": False,
        },
        ["id", "username"],
    )

    if not created_user:
        raise CustomException(
            status_code=500,
            code="USER_CREATION_FAILED",
            message="Failed to create user.",
        )

    access_token = create_access_token({"sub": created_user["id"]})

    return {
        "access_token": access_token,
        "token_type": "bearer",
        "user_id": created_user["id"],
        "username": created_user["username"],
    }


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
    users = db.select("users", ["id", "username", "password_hash"], {"email": credentials.username})

    if not users:
        raise CustomException(
            status_code=401,
            code="AUTH_FAILED",
            message="Incorrect email or password.",
        )

    user = users[0]
    if not bcrypt.checkpw(credentials.password.encode("utf-8"), user["password_hash"].encode("utf-8")):
        raise CustomException(
            status_code=401,
            code="AUTH_FAILED",
            message="Incorrect email or password.",
        )

    db.update("users", {"last_login_at": datetime.utcnow().isoformat()}, {"id": user["id"]})

    access_token = create_access_token({"sub": user["id"]})

    return {
        "access_token": access_token,
        "token_type": "bearer",
        "user_id": user["id"],
        "username": user["username"],
    }


@auth_bp.route("/me", methods=["GET"])
@require_auth
def get_me():
    current_user = get_current_user()
    return current_user or {}
