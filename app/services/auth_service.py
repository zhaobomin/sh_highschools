from datetime import datetime, timedelta
from typing import Dict

import bcrypt

from app.core.config import settings
from app.core.exceptions import CustomException
from app.core.security import create_access_token


def register_user(db, username: str, email: str, password: str) -> Dict[str, str]:
    """Register a new user and issue an access token."""
    if db.select("users", ["*"], {"email": email}):
        raise CustomException(
            status_code=400,
            code="EMAIL_TAKEN",
            message="Email already registered.",
        )
    if db.select("users", ["*"], {"username": username}):
        raise CustomException(
            status_code=400,
            code="USERNAME_TAKEN",
            message="Username already taken.",
        )

    hashed_password = bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt()).decode("utf-8")
    created_user = db.insert(
        "users",
        {
            "username": username,
            "email": email,
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
    expire_at = datetime.utcnow() + timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    db.update(
        "users",
        {"token_expires_at": expire_at.isoformat()},
        {"id": created_user["id"]},
    )

    return {
        "access_token": access_token,
        "token_type": "bearer",
        "user_id": created_user["id"],
        "username": created_user["username"],
    }


def login_user(db, email: str, password: str) -> Dict[str, str]:
    """Validate credentials and issue an access token."""
    users = db.select("users", ["id", "username", "password_hash"], {"email": email})

    if not users:
        raise CustomException(
            status_code=401,
            code="AUTH_FAILED",
            message="Incorrect email or password.",
        )

    user = users[0]
    if not bcrypt.checkpw(password.encode("utf-8"), user["password_hash"].encode("utf-8")):
        raise CustomException(
            status_code=401,
            code="AUTH_FAILED",
            message="Incorrect email or password.",
        )

    db.update("users", {"last_login_at": datetime.utcnow().isoformat()}, {"id": user["id"]})

    access_token = create_access_token({"sub": user["id"]})
    expire_at = datetime.utcnow() + timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    db.update(
        "users",
        {"token_expires_at": expire_at.isoformat()},
        {"id": user["id"]},
    )

    return {
        "access_token": access_token,
        "token_type": "bearer",
        "user_id": user["id"],
        "username": user["username"],
    }


def logout_user(db, current_user: Dict[str, str]) -> None:
    """Invalidate token expiry for the current user."""
    if current_user:
        db.update(
            "users",
            {"token_expires_at": datetime.utcnow().isoformat()},
            {"id": current_user["id"]},
        )
