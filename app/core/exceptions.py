from typing import Any, Dict, Optional
from flask import jsonify


class CustomException(Exception):
    """应用级别错误封装"""

    def __init__(
        self,
        status_code: int,
        code: str,
        message: str,
        details: Optional[Dict[str, Any]] = None,
    ):
        self.status_code = status_code
        self.code = code
        self.message = message
        self.details = details or {}
        super().__init__(message)


def handle_custom_exception(exc: CustomException):
    payload = {
        "code": exc.code,
        "message": exc.message,
        "details": exc.details,
    }
    return jsonify(payload), exc.status_code


def handle_generic_exception(exc: Exception):
    payload = {
        "code": "INTERNAL_SERVER_ERROR",
        "message": "An unexpected error occurred.",
        "details": str(exc),
    }
    return jsonify(payload), 500
