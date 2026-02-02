from typing import Any, Dict, List, Optional, Set, Tuple

from postgrest.exceptions import APIError

from app.core.exceptions import CustomException
from app.services.utils import safe_float, safe_int, probability_from_profile, calculate_probability


def _extract_latest_value(
    records: Optional[List[Dict[str, Any]]],
    key: str,
    match_key: Optional[str] = None,
    match_value: Optional[Any] = None,
) -> Optional[Any]:
    """Pick latest record value by year, optionally filtered by a match key/value."""
    if not records:
        return None
    candidates = []
    for record in records:
        if match_key and match_value is not None and record.get(match_key) != match_value:
            continue
        if key in record and record[key] is not None:
            candidates.append(record)
    if not candidates:
        return None
    candidates.sort(key=lambda record: record.get("year") or 0, reverse=True)
    return candidates[0].get(key)


def _extract_latest_year_value(
    records: Optional[List[Dict[str, Any]]],
    key: str,
) -> Optional[Any]:
    """Pick latest record value by year for a given key."""
    if not records:
        return None
    candidates = [record for record in records if record.get(key) is not None]
    if not candidates:
        return None
    candidates.sort(key=lambda record: record.get("year") or 0, reverse=True)
    return candidates[0].get(key)


def _build_stats(
    school_type: Optional[str],
    *,
    unified_score: Optional[float],
    district_score: Optional[float],
    district_quota: Optional[int],
    district_requested: bool,
    school_score: Optional[float],
    school_quota: Optional[int],
    autonomous_quota: Optional[int],
    mock_best_score: Optional[float],
    stable_score: Optional[float],
    high_score: Optional[float],
    low_score: Optional[float],
) -> Dict[str, Any]:
    """Build computed stats payload for a school."""
    stats: Dict[str, Any] = {}
    stats["scoreUnified"] = unified_score
    stats["scoreToDistrict"] = district_score
    stats["scoreToSchool"] = school_score
    stats["quotaToDistrict"] = district_quota
    stats["quotaToSchool"] = school_quota
    stats["quotaAutonomous"] = autonomous_quota
    # 使用平行志愿录取分数线作为基准分
    benchmark = unified_score
    probability = None
    if benchmark is not None:
        probability = probability_from_profile(benchmark, stable_score, high_score, low_score)
        if probability is None and mock_best_score is not None:
            probability = calculate_probability(benchmark, mock_best_score)
        if probability is None:
            probability = 50
    stats["probability"] = probability
    return stats


def _get_supabase_client(db: Any, supabase_adapter_type: type):
    """Return Supabase client if available for the provided adapter type."""
    if isinstance(db, supabase_adapter_type):
        return db.supabase
    return None


def fetch_schools_with_supabase(
    db: Any,
    supabase_adapter_type: type,
    q: str,
    type_filter: Optional[str],
    target_district: Optional[str],
    middle_school_id: Optional[str],
    page: int,
    per_page: Optional[int],
    school_codes: Optional[List[str]],
    target_school_codes: Optional[Set[str]],
    mock_best_score: Optional[float],
    stable_score: Optional[float],
    high_score: Optional[float],
    low_score: Optional[float],
) -> Tuple[List[Dict[str, Any]], int]:
    """Query and enrich schools via Supabase client."""
    client = _get_supabase_client(db, supabase_adapter_type)
    if client is None:
        raise CustomException(
            status_code=500,
            code="DATABASE_ERROR",
            message="Supabase client is unavailable.",
        )

    select_parts = [
        "code",
        "name",
        "district",
        "type",
        "full_type",
        "parallel_admission_scores!parallel_admission_scores_high_school_code_fkey(total_admission_score,district,year)",
        "self_enrollment_quota!self_enrollment_quota_school_code_fkey(total_quota,year)",
    ]
    if target_district:
        select_parts.append(
            "district_seats!district_seats_high_school_code_fkey(seats,district,total_admission_score,year)"
        )
    school_seat_map: Dict[str, Dict[str, Any]] = {}
    if middle_school_id:
        try:
            seats_result = (
                client.table("school_seats")
                .select("high_school_code,seats,total_admission_score,year")
                .eq("middle_school_code", middle_school_id)
                .execute()
            )
        except APIError as exc:
            raise CustomException(
                status_code=400,
                code="DATABASE_ERROR",
                message="到校名额查询失败。",
                details=exc.args[0] if exc.args else {},
            )
        if getattr(seats_result, "error", None):
            raise CustomException(
                status_code=400,
                code="DATABASE_ERROR",
                message="到校名额查询失败。",
                details=seats_result.error,
            )
        for record in seats_result.data or []:
            code = record.get("high_school_code")
            if not code:
                continue
            prev = school_seat_map.get(code)
            prev_year = prev.get("year") if prev else None
            next_year = record.get("year")
            if prev is None or (next_year or 0) > (prev_year or 0):
                school_seat_map[code] = record

    if school_codes is not None and len(school_codes) == 0:
        return [], 0

    query = client.table("schools").select(",".join(select_parts), count="exact")
    if q:
        query = query.ilike("name", f"%{q}%")
    if type_filter and type_filter != "全部":
        query = query.eq("type", type_filter)
    if school_codes is not None:
        query = query.in_("code", school_codes)

    try:
        result = query.execute()
    except APIError as exc:
        raise CustomException(
            status_code=400,
            code="DATABASE_ERROR",
            message="学校列表查询失败。",
            details=exc.args[0] if exc.args else {},
        )

    if getattr(result, "error", None):
        raise CustomException(
            status_code=400,
            code="DATABASE_ERROR",
            message="学校列表查询失败。",
            details=result.error,
        )

    schools = result.data or []
    total = getattr(result, "count", None)
    if total is None:
        total = len(schools)

    enriched = []
    for school in schools:
        school_id = school["code"]
        parallel_records = school.get("parallel_admission_scores") or []
        unified_score = safe_float(
            _extract_latest_value(
                parallel_records, "total_admission_score", "district", target_district
            )
            or _extract_latest_value(parallel_records, "total_admission_score")
        )
        district_score = safe_float(
            _extract_latest_value(
                school.get("district_seats"),
                "total_admission_score",
                "district",
                target_district,
            )
        )
        district_quota = safe_int(
            _extract_latest_value(school.get("district_seats"), "seats", "district", target_district)
        )
        seat_record = school_seat_map.get(school_id)
        school_score = safe_float(seat_record.get("total_admission_score")) if seat_record else None
        school_quota = safe_int(seat_record.get("seats")) if seat_record else None
        autonomous_quota = safe_int(
            _extract_latest_year_value(school.get("self_enrollment_quota"), "total_quota")
        )

        stats = _build_stats(
            school.get("type"),
            unified_score=unified_score,
            district_score=district_score,
            district_quota=district_quota,
            district_requested=target_district is not None,
            school_score=school_score,
            school_quota=school_quota,
            autonomous_quota=autonomous_quota,
            mock_best_score=mock_best_score,
            stable_score=stable_score,
            high_score=high_score,
            low_score=low_score,
        )

        enriched.append(
            {
                "id": school_id,
                "name": school["name"],
                "district": school["district"],
                "type": school["type"],
                "fullType": school.get("full_type"),
                "isTarget": school_id in target_school_codes if target_school_codes is not None else False,
                "stats": stats,
            }
        )

    enriched.sort(
        key=lambda school: school["stats"].get("scoreUnified")
        if school["stats"].get("scoreUnified") is not None
        else float("-inf"),
        reverse=True,
    )
    total = len(enriched)
    if per_page is None:
        return enriched, total
    start = (page - 1) * per_page
    end = start + per_page
    return enriched[start:end], total


def fetch_schools_without_supabase(
    db: Any,
    q: str,
    type_filter: Optional[str],
    target_district: Optional[str],
    middle_school_id: Optional[str],
    page: int,
    per_page: Optional[int],
    school_codes: Optional[List[str]],
    target_school_codes: Optional[Set[str]],
    mock_best_score: Optional[float],
    stable_score: Optional[float],
    high_score: Optional[float],
    low_score: Optional[float],
) -> Tuple[List[Dict[str, Any]], int]:
    """Query and enrich schools using direct DB access."""
    raw_schools = db.select("schools", ["code", "name", "district", "type", "full_type"])
    filtered = []
    q_lower = q.lower()
    for school in raw_schools:
        if school_codes is not None and school["code"] not in school_codes:
            continue
        if q and q_lower not in school["name"].lower():
            continue
        if type_filter and type_filter != "全部" and school["type"] != type_filter:
            continue
        filtered.append(school)

    enriched = []
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
    for school in filtered:
        school_id = school["code"]
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
                district_quota = safe_int(district_seats[0].get("seats"))
                district_score = safe_float(district_seats[0].get("total_admission_score"))

        school_score = None
        school_quota = None
        if middle_school_id:
            seat_record = school_seat_map.get(school_id)
            if seat_record:
                school_score = safe_float(seat_record.get("total_admission_score"))
                school_quota = safe_int(seat_record.get("seats"))

        autonomous_quota = None
        autonomous_records = db.select(
            "self_enrollment_quota",
            ["total_quota", "year"],
            {"school_code": school_id},
        )
        if autonomous_records:
            autonomous_quota = safe_int(
                _extract_latest_year_value(autonomous_records, "total_quota")
            )

        parallel_records = db.select(
            "parallel_admission_scores",
            ["total_admission_score", "district", "year"],
            {"high_school_code": school_id},
        )
        unified_score = None
        if parallel_records:
            candidates = [
                record
                for record in parallel_records
                if record.get("district") == target_district and record.get("total_admission_score") is not None
            ]
            if not candidates:
                candidates = [
                    record
                    for record in parallel_records
                    if record.get("total_admission_score") is not None
                ]
            if candidates:
                candidates.sort(key=lambda record: record.get("year") or 0, reverse=True)
                unified_score = safe_float(candidates[0].get("total_admission_score"))

        stats = _build_stats(
            school.get("type"),
            unified_score=unified_score,
            district_score=district_score,
            district_quota=district_quota,
            district_requested=target_district is not None,
            school_score=school_score,
            school_quota=school_quota,
            autonomous_quota=autonomous_quota,
            mock_best_score=mock_best_score,
            stable_score=stable_score,
            high_score=high_score,
            low_score=low_score,
        )

        enriched.append(
            {
                "id": school_id,
                "name": school["name"],
                "district": school["district"],
                "type": school["type"],
                "fullType": school.get("full_type"),
                "isTarget": school_id in target_school_codes if target_school_codes is not None else False,
                "stats": stats,
            }
        )

    enriched.sort(
        key=lambda school: school["stats"].get("scoreUnified")
        if school["stats"].get("scoreUnified") is not None
        else float("-inf"),
        reverse=True,
    )
    total = len(enriched)
    if per_page is None:
        return enriched, total
    offset = (page - 1) * per_page
    return enriched[offset : offset + per_page], total
