from typing import Any, Optional


def safe_float(value: Any) -> Optional[float]:
    """Safely cast a value to float."""
    if value is None:
        return None
    try:
        return float(value)
    except (TypeError, ValueError):
        return None


def safe_int(value: Any) -> Optional[int]:
    """Safely cast a value to int."""
    if value is None:
        return None
    try:
        return int(value)
    except (TypeError, ValueError):
        return None


def probability_from_profile(
    benchmark: float,
    stable_score: Optional[float],
    high_score: Optional[float],
    low_score: Optional[float],
) -> Optional[int]:
    """Return a probability bucket based on student profile vs benchmark."""
    if stable_score is None or high_score is None or low_score is None:
        return None
    if high_score < low_score:
        return None
    # 使用平行志愿录取分数线作为基准分
    if low_score > benchmark:
        return 85  # 拿捏
    if low_score < benchmark and high_score > benchmark:
        return 50  # 可冲
    if high_score < benchmark:
        return 15  # 难
    return None


def calculate_probability(
    benchmark_score: Optional[float],
    mock_best_score: Optional[float],
) -> int:
    """Calculate probability based on mock best score vs benchmark."""
    if benchmark_score is None or mock_best_score is None:
        return 50

    diff = mock_best_score - benchmark_score
    if diff >= 5:
        base_probability = 90
    elif diff >= 0:
        base_probability = 85
    elif diff >= -10:
        base_probability = 70
    elif diff >= -15:
        base_probability = 60
    elif diff >= -20:
        base_probability = 50
    else:
        base_probability = 30

    return max(5, min(95, round(base_probability)))
