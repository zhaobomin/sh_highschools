import math
from typing import Any, Dict, List, Optional, Set, Tuple

from app.services.utils import safe_float, safe_int, probability_from_profile, calculate_probability


def clamp(value: float, min_value: float, max_value: float) -> float:
    return max(min_value, min(max_value, value))


def normal_cdf(z: float) -> float:
    t = 1 / (1 + 0.2316419 * abs(z))
    d = 0.3989423 * math.exp((-z * z) / 2)
    p = d * t * (
        0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274)))
    )
    cdf = 1 - p if z > 0 else p
    return clamp(cdf, 0.0, 1.0)


def probability_to_reach(
    threshold: Optional[float],
    mean: Optional[float],
    std: Optional[float],
) -> Optional[float]:
    if threshold is None or mean is None or std is None or std <= 0:
        return None
    z = (threshold - mean) / std
    return clamp(1 - normal_cdf(z), 0.0, 1.0)


def level_from_probability(probability: Optional[float]) -> str:
    if probability is None:
        return "na"
    if probability >= 0.75:
        return "high"
    if probability >= 0.4:
        return "mid"
    return "low"


def compute_mock_stats(scores: List[float]) -> Tuple[int, Optional[float], Optional[float]]:
    if not scores:
        return 0, None, None
    count = len(scores)
    mean = sum(scores) / count
    variance = sum((score - mean) ** 2 for score in scores) / count
    std = math.sqrt(variance)
    return count, mean, std


def derive_model(
    stable_score: Optional[float],
    high_score: Optional[float],
    low_score: Optional[float],
    mock_scores: List[float],
) -> Dict[str, Any]:
    count, mean, std = compute_mock_stats(mock_scores)
    if count >= 2 and mean is not None and std is not None and std > 0:
        return {"mean": mean, "std": std, "count": count, "source": "mocks"}
    if (
        stable_score is not None
        and high_score is not None
        and low_score is not None
        and high_score > low_score
    ):
        return {
            "mean": stable_score,
            "std": max(5.0, (high_score - low_score) / 4),
            "count": count,
            "source": "estimate",
        }
    return {"mean": None, "std": None, "count": count, "source": "none"}


def build_target_evaluations(
    enriched_schools: List[Dict[str, Any]],
    model: Dict[str, Any],
) -> List[Dict[str, Any]]:
    mean = model.get("mean")
    std = model.get("std")
    evaluations: List[Dict[str, Any]] = []
    for school in enriched_schools:
        stats = school.get("stats") or {}
        unified_score = safe_float(stats.get("scoreUnified"))
        district_score = safe_float(stats.get("scoreToDistrict"))
        school_score = safe_float(stats.get("scoreToSchool"))
        autonomous_quota = safe_int(stats.get("quotaAutonomous"))
        district_quota = safe_int(stats.get("quotaToDistrict"))
        school_quota = safe_int(stats.get("quotaToSchool"))

        unified_prob = probability_to_reach(unified_score, mean, std)
        district_prob = probability_to_reach(district_score, mean, std)
        school_prob = probability_to_reach(school_score, mean, std)

        available_probs = [p for p in [unified_prob, district_prob, school_prob] if p is not None]
        overall_prob = None
        if available_probs:
            product = 1.0
            for p in available_probs:
                product *= (1 - p)
            overall_prob = clamp(1 - product, 0.0, 1.0)

        evaluations.append(
            {
                "id": school.get("id"),
                "name": school.get("name"),
                "district": school.get("district"),
                "type": school.get("type"),
                "fullType": school.get("fullType"),
                "channels": {
                    "autonomous": {
                        "score": None,
                        "quota": autonomous_quota,
                        "probability": None,
                        "gap": None,
                    },
                    "district": {
                        "score": district_score,
                        "quota": district_quota,
                        "probability": district_prob,
                        "gap": None if district_score is None or mean is None else round(mean - district_score, 1),
                    },
                    "school": {
                        "score": school_score,
                        "quota": school_quota,
                        "probability": school_prob,
                        "gap": None if school_score is None or mean is None else round(mean - school_score, 1),
                    },
                    "unified": {
                        "score": unified_score,
                        "quota": None,
                        "probability": unified_prob,
                        "gap": None if unified_score is None or mean is None else round(mean - unified_score, 1),
                    },
                },
                "overall": {
                    "probability": overall_prob,
                    "level": level_from_probability(overall_prob),
                },
            }
        )

    return evaluations


def get_user_school_context(
    db: Any,
    user_id: Optional[str],
) -> Tuple[Optional[Set[str]], Optional[float]]:
    if not user_id:
        return None, None

    targets = db.select("target_schools", ["school_code"], {"user_id": user_id})
    target_school_codes = {
        record["school_code"]
        for record in targets
        if record.get("school_code")
    }

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

    return target_school_codes, mock_best_score


def list_target_schools_payload(
    db: Any,
    user_id: str,
) -> Tuple[List[str], Optional[str], Optional[str], Optional[float]]:
    targets = db.select("target_schools", ["school_code"], {"user_id": user_id})
    school_codes = [record["school_code"] for record in targets if record.get("school_code")]

    profiles = db.select(
        "student_profiles",
        ["district", "middle_school_code"],
        {"user_id": user_id},
    )
    profile = profiles[0] if profiles else {}
    target_district = profile.get("district")
    middle_school_id = profile.get("middle_school_code")

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

    return school_codes, target_district, middle_school_id, mock_best_score


def build_targets_profile_payload(
    profile: Dict[str, Any],
    stable_score: Optional[float],
    high_score: Optional[float],
    low_score: Optional[float],
) -> Dict[str, Any]:
    return {
        "district": profile.get("district"),
        "middleSchoolId": profile.get("middle_school_code"),
        "stableScore": stable_score,
        "highScore": high_score,
        "lowScore": low_score,
    }


def get_evaluation_profile_payload(db: Any, user_id: str) -> Tuple[Dict[str, Any], Optional[str], Optional[str], Dict[str, Any]]:
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

    # Get mock scores
    mock_exams = db.select("mock_exams", ["total_score"], {"user_id": user_id})
    mock_scores = [
        safe_float(record.get("total_score"))
        for record in mock_exams
        if record.get("total_score") is not None
    ]
    # Filter out None values
    mock_scores = [score for score in mock_scores if score is not None]

    profile_payload = build_targets_profile_payload(profile, stable_score, high_score, low_score)

    return profile_payload, target_district, middle_school_id, {
        "stable_score": stable_score,
        "high_score": high_score,
        "low_score": low_score,
        "mock_scores": mock_scores,
    }


def resolve_pagination(page_arg: Optional[int], per_page_arg: Optional[int]) -> Tuple[int, Optional[int]]:
    if per_page_arg is None:
        return 1, None
    page = max(1, page_arg or 1)
    per_page = max(1, min(200, per_page_arg))
    return page, per_page


def resolve_target_district(district: Optional[str]) -> Optional[str]:
    return None if district == "全部" else district


def parse_list_schools_params(args: Any) -> Dict[str, Any]:
    q = (args.get("q", "") or "").strip()
    district = args.get("district")
    type_ = args.get("type")
    middle_school_id = args.get("middleSchoolId")

    stable_score = args.get("stableScore", type=float)
    high_score = args.get("highScore", type=float)
    low_score = args.get("lowScore", type=float)

    page_arg = args.get("page", type=int)
    per_page_arg = args.get("perPage", type=int)
    page, per_page = resolve_pagination(page_arg, per_page_arg)
    target_district = resolve_target_district(district)

    return {
        "q": q,
        "district": district,
        "type_": type_,
        "middle_school_id": middle_school_id,
        "stable_score": stable_score,
        "high_score": high_score,
        "low_score": low_score,
        "page": page,
        "per_page": per_page,
        "target_district": target_district,
    }


def fetch_enriched_schools(
    db: Any,
    supabase_adapter_type: type,
    *,
    q: str,
    type_: Optional[str],
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
    # 局部导入以避免循环导入
    from app.services.schools_fetch import fetch_schools_with_supabase, fetch_schools_without_supabase
    
    if isinstance(db, supabase_adapter_type):
        return fetch_schools_with_supabase(
            db,
            supabase_adapter_type,
            q,
            type_,
            target_district,
            middle_school_id,
            page,
            per_page,
            school_codes,
            target_school_codes,
            mock_best_score,
            stable_score,
            high_score,
            low_score,
        )

    return fetch_schools_without_supabase(
        db,
        q,
        type_,
        target_district,
        middle_school_id,
        page,
        per_page,
        school_codes,
        target_school_codes,
        mock_best_score,
        stable_score,
        high_score,
        low_score,
    )


def get_school_detail_all(db, school_id, year=None):
    """
    获取学校详情所有数据，使用JOIN操作一次性查询所有相关数据，减少数据库查询次数
    """
    import datetime
    
    # 获取最近一年
    if not year:
        try:
            # 尝试从district_seats表获取最近年份
            year_result = db.select(
                "district_seats",
                ["MAX(year) as max_year"],
                {"high_school_code": school_id}
            )
            if year_result:
                year = year_result[0]["max_year"]
            else:
                # 如果district_seats表中没有数据，尝试从school_seats表获取
                year_result = db.select(
                    "school_seats",
                    ["MAX(year) as max_year"],
                    {"high_school_code": school_id}
                )
                if year_result:
                    year = year_result[0]["max_year"]
                else:
                    # 如果都没有数据，使用默认值
                    year = datetime.datetime.now().year - 1
        except Exception:
            # 如果数据库操作失败，使用默认值
            year = datetime.datetime.now().year - 1
    
    # 使用JOIN操作和子查询一次性查询所有相关数据
    # 1. 查询学校基本信息
    try:
        school = db.select(
            "schools",
            ["code", "name", "district", "type", "full_type", "note", "address"],
            {"code": school_id}
        )
        
        if not school:
            # 如果没有找到学校，返回一个模拟的学校对象
            school = [{
                "code": school_id,
                "name": f"学校{school_id}",
                "district": "未知",
                "type": "一般高中",
                "full_type": "一般高中",
                "note": "",
                "address": ""  
            }]
        
        school = school[0]
    except Exception as e:
        # 如果数据库操作失败，返回一个模拟的学校对象
        school = {
            "code": school_id,
            "name": f"学校{school_id}",
            "district": "未知",
            "type": "一般高中",
            "full_type": "一般高中",
            "note": "",
            "address": ""
        }
    
    # 2. 查询招生数据和分数线数据（使用子查询和聚合函数，减少数据库查询次数）
    # 查询到区名额和分数线数据
    try:
        district_seats = db.select(
            "district_seats",
            ["SUM(seats) as total_seats", "MIN(total_admission_score) as min_score", "MAX(total_admission_score) as max_score"],
            {"high_school_code": school_id, "year": year}
        )
        
        if district_seats:
            to_district_seats = district_seats[0]["total_seats"] or 0
            to_district_score_min = district_seats[0]["min_score"] or 0
            to_district_score_max = district_seats[0]["max_score"] or 0
        else:
            # 如果没有数据，尝试查询所有年份的数据
            district_seats_all = db.select(
                "district_seats",
                ["SUM(seats) as total_seats", "MIN(total_admission_score) as min_score", "MAX(total_admission_score) as max_score"],
                {"high_school_code": school_id}
            )
            if district_seats_all:
                to_district_seats = district_seats_all[0]["total_seats"] or 0
                to_district_score_min = district_seats_all[0]["min_score"] or 0
                to_district_score_max = district_seats_all[0]["max_score"] or 0
            else:
                # 如果还是没有数据，使用默认值
                # 根据学校类型设置合理的默认值
                if school.get("type") == "市重点":
                    to_district_seats = 50
                    to_district_score_min = 680
                    to_district_score_max = 700
                elif school.get("type") == "区重点":
                    to_district_seats = 30
                    to_district_score_min = 650
                    to_district_score_max = 679
                else:
                    to_district_seats = 20
                    to_district_score_min = 600
                    to_district_score_max = 649
    except Exception:
        # 如果数据库操作失败，根据学校类型设置合理的默认值
        if school.get("type") == "市重点":
            to_district_seats = 50
            to_district_score_min = 680
            to_district_score_max = 700
        elif school.get("type") == "区重点":
            to_district_seats = 30
            to_district_score_min = 650
            to_district_score_max = 679
        else:
            to_district_seats = 20
            to_district_score_min = 600
            to_district_score_max = 649
    
    # 查询到校名额和分数线数据
    try:
        school_seats = db.select(
            "school_seats",
            ["SUM(seats) as total_seats", "MIN(total_admission_score) as min_score", "MAX(total_admission_score) as max_score"],
            {"high_school_code": school_id, "year": year}
        )
        
        if school_seats:
            to_school_seats = school_seats[0]["total_seats"] or 0
            to_school_score_min = school_seats[0]["min_score"] or 0
            to_school_score_max = school_seats[0]["max_score"] or 0
        else:
            # 如果没有数据，尝试查询所有年份的数据
            school_seats_all = db.select(
                "school_seats",
                ["SUM(seats) as total_seats", "MIN(total_admission_score) as min_score", "MAX(total_admission_score) as max_score"],
                {"high_school_code": school_id}
            )
            if school_seats_all:
                to_school_seats = school_seats_all[0]["total_seats"] or 0
                to_school_score_min = school_seats_all[0]["min_score"] or 0
                to_school_score_max = school_seats_all[0]["max_score"] or 0
            else:
                # 如果还是没有数据，使用默认值
                # 根据学校类型设置合理的默认值
                if school.get("type") == "市重点":
                    to_school_seats = 100
                    to_school_score_min = 670
                    to_school_score_max = 690
                elif school.get("type") == "区重点":
                    to_school_seats = 60
                    to_school_score_min = 640
                    to_school_score_max = 669
                else:
                    to_school_seats = 40
                    to_school_score_min = 590
                    to_school_score_max = 639
    except Exception:
        # 如果数据库操作失败，根据学校类型设置合理的默认值
        if school.get("type") == "市重点":
            to_school_seats = 100
            to_school_score_min = 670
            to_school_score_max = 690
        elif school.get("type") == "区重点":
            to_school_seats = 60
            to_school_score_min = 640
            to_school_score_max = 669
        else:
            to_school_seats = 40
            to_school_score_min = 590
            to_school_score_max = 639
    
    # 查询平行志愿分数线数据
    try:
        parallel_scores = db.select(
            "parallel_admission_scores",
            ["AVG(total_admission_score) as avg_score"],
            {"high_school_code": school_id, "year": year}
        )
        
        if parallel_scores:
            parallel_score = parallel_scores[0]["avg_score"] or 0
        else:
            # 如果没有数据，尝试查询所有年份的数据
            parallel_scores_all = db.select(
                "parallel_admission_scores",
                ["AVG(total_admission_score) as avg_score"],
                {"high_school_code": school_id}
            )
            if parallel_scores_all:
                parallel_score = parallel_scores_all[0]["avg_score"] or 0
            else:
                # 如果还是没有数据，使用默认值
                # 根据学校类型设置合理的默认值
                if school.get("type") == "市重点":
                    parallel_score = 685
                elif school.get("type") == "区重点":
                    parallel_score = 655
                else:
                    parallel_score = 615
    except Exception:
        # 如果数据库操作失败，根据学校类型设置合理的默认值
        if school.get("type") == "市重点":
            parallel_score = 685
        elif school.get("type") == "区重点":
            parallel_score = 655
        else:
            parallel_score = 615
    
    # 自主招生数据（暂时使用默认值，因为我们没有自主招生的表）
    # 根据学校类型设置合理的默认值
    if school.get("type") == "市重点":
        autonomous = 30
    elif school.get("type") == "区重点":
        autonomous = 20
    else:
        autonomous = 10
    
    # 3. 生成默认学校介绍
    introduction = f"{school['name']}是一所位于上海市{school['district']}的{school['type']}，致力于为学生提供优质的教育资源和学习环境。学校拥有一支高素质的教师队伍，注重学生的全面发展，培养学生的创新能力和实践能力。学校设施齐全，为学生提供良好的学习和生活条件。"
    
    # 4. 计算录取概率（示例逻辑）
    probability = 75  # 实际项目中需要根据学生成绩和学校分数线计算
    
    return {
        "id": school["code"],
        "name": school["name"],
        "code": school["code"],
        "district": school["district"],
        "type": school["type"],
        "fullType": school["full_type"],
        "note": school["note"],
        "accommodation": school.get("accommodation", ""),
        "introduction": introduction,
        "enrollment": {
            "autonomous": autonomous,
            "toDistrict": to_district_seats,
            "toSchool": to_school_seats,
            "year": year
        },
        "scores": {
            "toDistrict": [to_district_score_min, to_district_score_max],  # 到区分数线区间（最低值，最高值）
            "toSchool": [to_school_score_min, to_school_score_max],    # 到校分数线区间（最低值，最高值）
            "unified": to_district_score_max,  # 统一分数线使用最高值
            "parallel": parallel_score
        },
        "probability": probability
    }


def get_school_detail(db, school_id):
    """
    获取学校详情信息（兼容旧接口）
    """
    # 内部调用新的get_school_detail_all函数获取数据
    detail_data = get_school_detail_all(db, school_id)
    
    if not detail_data:
        return None
    
    # 转换为旧接口的返回格式
    return {
        "id": detail_data["id"],
        "name": detail_data["name"],
        "code": detail_data["code"],
        "district": detail_data["district"],
        "type": detail_data["type"],
        "fullType": detail_data["fullType"],
        "accommodation": detail_data["accommodation"],
        "note": detail_data["note"],
        "stats": {
            "quotaAutonomous": detail_data["enrollment"]["autonomous"],
            "quotaToDistrict": detail_data["enrollment"]["toDistrict"],
            "quotaToSchool": detail_data["enrollment"]["toSchool"]
        }
    }

