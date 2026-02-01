from datetime import date, datetime, timedelta
from functools import wraps
from typing import Any, Dict, Optional

import jwt
from flask import g, request

from app.core.config import settings
from app.core.db import db
from app.core.exceptions import CustomException


def _serialize_record(record: Dict[str, Any]) -> Dict[str, Any]:
    serialized: Dict[str, Any] = {}
    for key, value in record.items():
        if isinstance(value, (datetime, date)):
            serialized[key] = value.isoformat()
        else:
            serialized[key] = value
    return serialized


def create_access_token(data: Dict[str, Any], expires_delta: Optional[timedelta] = None) -> str:
    """生成访问令牌"""
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, settings.SECRET_KEY, algorithm=settings.ALGORITHM)
    return encoded_jwt


def verify_token(token: str) -> Optional[Dict[str, Any]]:
    """验证 JWT"""
    try:
        payload = jwt.decode(token, settings.SECRET_KEY, algorithms=[settings.ALGORITHM])
        return payload
    except jwt.PyJWTError:
        return None


def _get_token_from_header() -> str:
    auth_header = request.headers.get("Authorization", "")
    if not auth_header.startswith("Bearer "):
        raise CustomException(
            status_code=401,
            code="UNAUTHORIZED",
            message="Missing or malformed authorization header.",
        )
    return auth_header.split(" ", 1)[1]


def require_auth(func):
    """Decorator enforcing valid JWT and exposing current user via flask.g"""
    @wraps(func)
    def wrapper(*args, **kwargs):
        token = _get_token_from_header()
        payload = verify_token(token)
        if payload is None:
            raise CustomException(
                status_code=401,
                code="UNAUTHORIZED",
                message="Could not validate credentials.",
            )
        user_id = payload.get("sub")
        if not user_id:
            raise CustomException(
                status_code=401,
                code="UNAUTHORIZED",
                message="Token payload is missing user identifier.",
            )
        users = db.select("users", ["*"], {"id": user_id})
        if not users:
            raise CustomException(
                status_code=401,
                code="UNAUTHORIZED",
                message="User not found for provided token.",
            )
        g.current_user = _serialize_record(users[0])
        return func(*args, **kwargs)
    return wrapper


def get_current_user() -> Optional[Dict[str, Any]]:
    return getattr(g, "current_user", None)
