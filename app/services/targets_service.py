from datetime import datetime
from typing import Any, Dict, List

from app.core.exceptions import CustomException


def add_target_school(db, user_id: str, school_code: str) -> Dict[str, Any]:
    """Add a target school for the given user."""
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
        {"user_id": user_id, "school_code": school_code},
    )
    if existing:
        return {"id": existing[0]["id"], "school_code": school_code, "isTarget": True}

    data_payload = {
        "user_id": user_id,
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
    return {"id": created.get("id"), "school_code": school_code, "isTarget": True}


def remove_target_school(db, user_id: str, school_code: str) -> Dict[str, Any]:
    """Remove a target school for the given user."""
    existing = db.select(
        "target_schools",
        ["id", "school_code"],
        {"user_id": user_id, "school_code": school_code},
    )
    if not existing:
        raise CustomException(
            status_code=404,
            code="TARGET_NOT_FOUND",
            message="Target school not found.",
        )

    deleted = db.delete("target_schools", {"user_id": user_id, "school_code": school_code})
    if not deleted:
        raise CustomException(
            status_code=500,
            code="TARGET_DELETE_FAILED",
            message="Failed to remove target school.",
        )
    return {"school_code": school_code, "isTarget": False}


def list_simple_schools(db) -> List[Dict[str, Any]]:
    """List simplified school records for selector UI."""
    schools = db.select("high_schools", ["id", "name"])
    return [{"id": school["id"], "name": school["name"]} for school in schools]


def get_placeholder_school(school_id: int) -> Dict[str, Any]:
    """Return placeholder school payload for stub endpoint."""
    return {"id": school_id, "name": "Placeholder School"}


def get_test_message() -> Dict[str, Any]:
    """Return test endpoint payload."""
    return {"message": "Test API works!"}
