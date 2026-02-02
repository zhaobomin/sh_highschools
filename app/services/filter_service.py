from datetime import datetime
from typing import Any, Dict, List, Optional

from app.core.exceptions import CustomException


def list_middle_schools(db, district: Optional[str], school_type: Optional[str]) -> List[Dict[str, Any]]:
    """List middle schools filtered by district/type."""
    params: Dict[str, Any] = {}
    if district:
        params["district"] = district
    if school_type:
        params["type"] = school_type

    schools = db.select("middle_schools", ["code", "name", "district", "type"], params or None)

    return [
        {
            "id": school["code"],
            "name": school["name"],
            "district": school["district"],
            "type": school["type"],
        }
        for school in schools
    ]


def build_filter_options(db) -> Dict[str, Any]:
    """Build filter options payload for districts and middle schools."""
    schools = db.select("middle_schools", ["code", "name", "district", "type"])

    districts = sorted({school["district"] for school in schools})
    middle_schools = [
        {
            "id": school["code"],
            "name": school["name"],
            "district": school["district"],
            "type": school["type"],
        }
        for school in schools
    ]

    return {
        "districts": districts,
        "middle_schools": middle_schools,
    }


def get_student_profile(db, current_user: Optional[Dict[str, Any]]) -> Optional[Dict[str, Any]]:
    """Fetch current user's student profile, including middle school name."""
    if not current_user:
        raise CustomException(
            status_code=401,
            code="UNAUTHORIZED",
            message="User context missing.",
        )

    profiles = db.select(
        "student_profiles",
        ["district", "middle_school_code", "stable_score", "high_score", "low_score"],
        {"user_id": current_user["id"]},
    )
    if not profiles:
        return None

    profile = profiles[0]
    middle_school_id = profile.get("middle_school_code")
    middle_school_name = None

    if middle_school_id:
        schools = db.select("middle_schools", ["name"], {"code": middle_school_id})
        if schools:
            middle_school_name = schools[0]["name"]

    return {
        "district": profile["district"],
        "middle_school_id": middle_school_id,
        "middle_school_name": middle_school_name,
        "stable_score": profile.get("stable_score"),
        "high_score": profile.get("high_score"),
        "low_score": profile.get("low_score"),
    }


def save_student_profile(db, current_user: Optional[Dict[str, Any]], profile_data: Dict[str, Any]) -> Dict[str, Any]:
    """Create or update current user's student profile."""
    if not current_user:
        raise CustomException(
            status_code=401,
            code="UNAUTHORIZED",
            message="User context missing.",
        )

    existing_profiles = db.select("student_profiles", ["id"], {"user_id": current_user["id"]})

    data_payload = {
        "district": profile_data["district"],
        "middle_school_code": profile_data.get("middle_school_id"),
        "stable_score": profile_data["stable_score"],
        "high_score": profile_data["high_score"],
        "low_score": profile_data["low_score"],
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

    return profile_data
