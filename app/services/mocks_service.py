from typing import Any, Dict, List, Optional

from app.core.exceptions import CustomException


def compute_total_score(scores: Dict[str, Optional[float]]) -> float:
    """Compute total score for a mock exam."""
    total = 0
    subjects = ["chinese", "math", "english", "politics", "history", "pe"]
    for subject in subjects:
        if scores.get(subject) is not None:
            total += scores[subject]  # type: ignore[operator]
    return total


def format_exam(exam: Dict[str, Any]) -> Dict[str, Any]:
    """Format DB exam record into API response shape."""
    return {
        "id": exam["id"],
        "name": exam["name"],
        "examDate": exam["exam_date"],
        "scores": {
            "chinese": exam["chinese_score"],
            "math": exam["math_score"],
            "english": exam["english_score"],
            "politics": exam["politics_score"],
            "history": exam["history_score"],
            "pe": exam["pe_score"],
        },
        "totalScore": exam["total_score"],
        "createdAt": exam["created_at"],
        "updatedAt": exam["updated_at"],
    }


def list_mock_exams(db, user_id: str) -> List[Dict[str, Any]]:
    """List all mock exams for the given user."""
    exams = db.select(
        "mock_exams",
        [
            "id",
            "name",
            "exam_date",
            "chinese_score",
            "math_score",
            "english_score",
            "politics_score",
            "history_score",
            "pe_score",
            "total_score",
            "created_at",
            "updated_at",
        ],
        {"user_id": user_id},
    )

    return [format_exam(exam) for exam in exams]


def get_mock_stats(db, user_id: str) -> Dict[str, Any]:
    """Compute summary statistics for a user's mock exams."""
    exams = db.select("mock_exams", ["total_score"], {"user_id": user_id})

    total_scores = [exam["total_score"] for exam in exams if exam["total_score"] is not None]

    if not total_scores:
        return {
            "count": 0,
            "mean": None,
            "std": None,
            "min": None,
            "max": None,
        }

    count = len(total_scores)
    min_score = min(total_scores)
    max_score = max(total_scores)
    mean = sum(total_scores) / count

    variance = sum((score - mean) ** 2 for score in total_scores) / count
    std = variance ** 0.5

    return {
        "count": count,
        "mean": round(mean, 1),
        "std": round(std, 2),
        "min": min_score,
        "max": max_score,
    }


def create_mock_exam(db, user_id: str, data: Dict[str, Any]) -> Dict[str, Any]:
    """Create a mock exam record and return formatted payload."""
    name = data.get("name", "")
    exam_date = data.get("examDate")
    scores = data.get("scores", {})

    total_score = compute_total_score(scores)

    insert_data = {
        "user_id": user_id,
        "name": name,
        "exam_date": exam_date,
        "chinese_score": scores.get("chinese"),
        "math_score": scores.get("math"),
        "english_score": scores.get("english"),
        "politics_score": scores.get("politics"),
        "history_score": scores.get("history"),
        "pe_score": scores.get("pe"),
        "total_score": total_score,
    }

    result = db.insert(
        "mock_exams",
        insert_data,
        [
            "id",
            "name",
            "exam_date",
            "chinese_score",
            "math_score",
            "english_score",
            "politics_score",
            "history_score",
            "pe_score",
            "total_score",
            "created_at",
            "updated_at",
        ],
    )

    if not result:
        raise CustomException(
            status_code=500,
            code="DATABASE_ERROR",
            message="创建模考记录失败",
        )

    return format_exam(result)


def update_mock_exam(db, user_id: str, exam_id: str, data: Dict[str, Any]) -> Dict[str, Any]:
    """Update a mock exam record and return formatted payload."""
    existing_exam = db.select("mock_exams", ["id"], {"id": exam_id, "user_id": user_id})

    if not existing_exam:
        raise CustomException(
            status_code=404,
            code="NOT_FOUND",
            message="模考记录不存在或不属于当前用户",
        )

    name = data.get("name")
    exam_date = data.get("examDate")
    scores = data.get("scores")

    update_data: Dict[str, Any] = {}
    if name is not None:
        update_data["name"] = name
    if exam_date is not None:
        update_data["exam_date"] = exam_date

    if scores:
        subjects = ["chinese", "math", "english", "politics", "history", "pe"]
        for subject in subjects:
            if subject in scores:
                update_data[f"{subject}_score"] = scores[subject]

        total_score = compute_total_score(scores)
        update_data["total_score"] = total_score

    if update_data:
        db.update("mock_exams", update_data, {"id": exam_id, "user_id": user_id})

    updated_exam = db.select(
        "mock_exams",
        [
            "id",
            "name",
            "exam_date",
            "chinese_score",
            "math_score",
            "english_score",
            "politics_score",
            "history_score",
            "pe_score",
            "total_score",
            "created_at",
            "updated_at",
        ],
        {"id": exam_id},
    )[0]

    return format_exam(updated_exam)


def delete_mock_exam(db, user_id: str, exam_id: str) -> None:
    """Delete a mock exam record for the given user."""
    existing_exam = db.select("mock_exams", ["id"], {"id": exam_id, "user_id": user_id})

    if not existing_exam:
        raise CustomException(
            status_code=404,
            code="NOT_FOUND",
            message="模考记录不存在或不属于当前用户",
        )

    db.delete("mock_exams", {"id": exam_id, "user_id": user_id})
