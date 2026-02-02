from datetime import datetime
from typing import Any, Dict, List, Optional, Set

from app.core.exceptions import CustomException
from app.services.schools_fetch import _build_stats
from app.services.utils import safe_float


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


def list_target_schools_with_stats(db, user_id: str) -> List[Dict[str, Any]]:
    """List target schools with stats using the same logic as filter recommendations."""
    # Get target schools
    targets = db.select("target_schools", ["school_code"], {"user_id": user_id})
    school_codes = [record["school_code"] for record in targets if record.get("school_code")]
    
    if not school_codes:
        return []
    
    # Get student profile
    profiles = db.select(
        "student_profiles",
        ["district", "middle_school_code", "stable_score", "high_score", "low_score"],
        {"user_id": user_id},
    )
    profile = profiles[0] if profiles else {}
    target_district = profile.get("district")
    middle_school_id = profile.get("middle_school_code")
    stable_score = safe_float(profile.get("stable_score"))
    high_score = safe_float(profile.get("high_score"))
    low_score = safe_float(profile.get("low_score"))
    
    # Get mock exams for backup probability calculation
    mock_exams = db.select("mock_exams", ["total_score"], {"user_id": user_id})
    mock_best_score = None
    if mock_exams:
        mock_best_score = max(
            (
                safe_float(record.get("total_score"))
                for record in mock_exams
                if record.get("total_score") is not None
            ),
            default=None,
        )
    
    # Get school details
    schools = db.select("schools", ["code", "name", "district", "type", "full_type"], {"code": school_codes})
    
    # Get school seats for middle school
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
    
    enriched_schools = []
    for school in schools:
        school_id = school["code"]
        
        # Get district seats
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
                district_quota = district_seats[0].get("seats")
                district_score = district_seats[0].get("total_admission_score")
        
        # Get school seats
        seat_record = school_seat_map.get(school_id)
        school_score = seat_record.get("total_admission_score") if seat_record else None
        school_quota = seat_record.get("seats") if seat_record else None
        
        # Get autonomous quota
        autonomous_quota = None
        autonomous_records = db.select(
            "self_enrollment_quota",
            ["total_quota", "year"],
            {"school_code": school_id},
        )
        if autonomous_records:
            autonomous_records.sort(key=lambda record: record.get("year") or 0, reverse=True)
            autonomous_quota = autonomous_records[0].get("total_quota")
        
        # Get parallel admission scores
        parallel_records = db.select(
            "parallel_admission_scores",
            ["total_admission_score", "district", "year"],
            {"high_school_code": school_id},
        )
        unified_score = None
        if parallel_records:
            # Try to get score for target district first
            district_candidates = [
                record
                for record in parallel_records
                if record.get("district") == target_district and record.get("total_admission_score") is not None
            ]
            if district_candidates:
                district_candidates.sort(key=lambda record: record.get("year") or 0, reverse=True)
                unified_score = district_candidates[0].get("total_admission_score")
            else:
                # Fallback to any score
                all_candidates = [
                    record
                    for record in parallel_records
                    if record.get("total_admission_score") is not None
                ]
                if all_candidates:
                    all_candidates.sort(key=lambda record: record.get("year") or 0, reverse=True)
                    unified_score = all_candidates[0].get("total_admission_score")
        
        # Build stats using the same logic as filter recommendations
        stats = _build_stats(
            school.get("type"),
            unified_score=safe_float(unified_score),
            district_score=safe_float(district_score),
            district_quota=district_quota,
            district_requested=target_district is not None,
            school_score=safe_float(school_score),
            school_quota=school_quota,
            autonomous_quota=autonomous_quota,
            mock_best_score=mock_best_score,
            stable_score=stable_score,
            high_score=high_score,
            low_score=low_score,
        )
        
        enriched_schools.append(
            {
                "id": school_id,
                "name": school["name"],
                "district": school["district"],
                "type": school["type"],
                "fullType": school.get("full_type"),
                "isTarget": True,
                "stats": stats,
            }
        )
    
    # Sort by probability (descending)
    enriched_schools.sort(
        key=lambda school: school["stats"].get("probability", 0),
        reverse=True
    )
    
    return enriched_schools
