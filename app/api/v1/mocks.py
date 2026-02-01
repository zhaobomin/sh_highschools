from flask import Blueprint, request, jsonify

from app.core.security import get_current_user, require_auth
from app.core.db import db
from app.core.exceptions import CustomException

mocks_bp = Blueprint("mocks", __name__, url_prefix="/mocks")


def compute_total_score(scores):
    """计算总分"""
    total = 0
    subjects = ['chinese', 'math', 'english', 'politics', 'history', 'pe']
    for subject in subjects:
        if scores.get(subject) is not None:
            total += scores[subject]
    return total


@mocks_bp.route("/", methods=["GET"], strict_slashes=False)
@require_auth
def list_mock_exams():
    """获取用户的所有模考记录"""
    current_user = get_current_user()
    if not current_user:
        raise CustomException(
            status_code=401,
            code="UNAUTHORIZED",
            message="用户未认证"
        )
    
    user_id = current_user.get('id')
    if not user_id:
        raise CustomException(
            status_code=400,
            code="INVALID_USER",
            message="用户ID无效"
        )
    
    # 查询用户的所有模考记录
    exams = db.select(
        "mock_exams",
        ["id", "name", "exam_date", "chinese_score", "math_score", "english_score", 
         "politics_score", "history_score", "pe_score", 
         "total_score", "created_at", "updated_at"],
        {"user_id": user_id}
    )
    
    # 格式化返回数据，适配前端类型
    formatted_exams = []
    for exam in exams:
        formatted_exams.append({
            "id": exam["id"],
            "name": exam["name"],
            "examDate": exam["exam_date"],
            "scores": {
                "chinese": exam["chinese_score"],
                "math": exam["math_score"],
                "english": exam["english_score"],
                "politics": exam["politics_score"],
                "history": exam["history_score"],
                "pe": exam["pe_score"]
            },
            "totalScore": exam["total_score"],
            "createdAt": exam["created_at"],
            "updatedAt": exam["updated_at"]
        })
    
    return {
        "data": formatted_exams,
        "meta": {"total": len(formatted_exams)}
    }


@mocks_bp.route("/stats", methods=["GET"], strict_slashes=False)
@require_auth
def get_mock_exam_stats():
    """获取用户的模考统计数据"""
    current_user = get_current_user()
    if not current_user:
        raise CustomException(
            status_code=401,
            code="UNAUTHORIZED",
            message="用户未认证"
        )
    
    user_id = current_user.get('id')
    if not user_id:
        raise CustomException(
            status_code=400,
            code="INVALID_USER",
            message="用户ID无效"
        )
    
    # 查询用户的所有模考记录
    exams = db.select(
        "mock_exams",
        ["total_score"],
        {"user_id": user_id}
    )
    
    # 计算统计数据
    total_scores = [exam["total_score"] for exam in exams if exam["total_score"] is not None]
    
    if not total_scores:
        return {
            "data": {
                "count": 0,
                "mean": None,
                "std": None,
                "min": None,
                "max": None
            }
        }
    
    count = len(total_scores)
    min_score = min(total_scores)
    max_score = max(total_scores)
    mean = sum(total_scores) / count
    
    # 计算标准差
    variance = sum((score - mean) ** 2 for score in total_scores) / count
    std = variance ** 0.5
    
    return {
        "data": {
            "count": count,
            "mean": round(mean, 1),
            "std": round(std, 2),
            "min": min_score,
            "max": max_score
        }
    }


@mocks_bp.route("/", methods=["POST"], strict_slashes=False)
@require_auth
def create_mock_exam():
    """创建新的模考记录"""
    current_user = get_current_user()
    if not current_user:
        raise CustomException(
            status_code=401,
            code="UNAUTHORIZED",
            message="用户未认证"
        )
    
    user_id = current_user.get('id')
    if not user_id:
        raise CustomException(
            status_code=400,
            code="INVALID_USER",
            message="用户ID无效"
        )
    
    data = request.get_json()
    if not data:
        raise CustomException(
            status_code=400,
            code="INVALID_REQUEST",
            message="请求数据无效"
        )
    
    # 提取数据
    name = data.get("name", "")
    exam_date = data.get("examDate")
    scores = data.get("scores", {})
    
    # 计算总分
    total_score = compute_total_score(scores)
    
    # 准备插入数据
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
        "total_score": total_score
    }
    
    # 插入数据
    result = db.insert(
        "mock_exams",
        insert_data,
        ["id", "name", "exam_date", "chinese_score", "math_score", "english_score", 
         "politics_score", "history_score", "pe_score", 
         "total_score", "created_at", "updated_at"]
    )
    
    if not result:
        raise CustomException(
            status_code=500,
            code="DATABASE_ERROR",
            message="创建模考记录失败"
        )
    
    # 格式化返回数据
    formatted_result = {
        "id": result["id"],
        "name": result["name"],
        "examDate": result["exam_date"],
        "scores": {
            "chinese": result["chinese_score"],
            "math": result["math_score"],
            "english": result["english_score"],
            "politics": result["politics_score"],
            "history": result["history_score"],
            "pe": result["pe_score"]
        },
        "totalScore": result["total_score"],
        "createdAt": result["created_at"],
        "updatedAt": result["updated_at"]
    }
    
    return {
        "data": formatted_result
    }, 201


@mocks_bp.route("/<string:exam_id>", methods=["PUT"], strict_slashes=False)
@require_auth
def update_mock_exam(exam_id):
    """更新模考记录"""
    current_user = get_current_user()
    if not current_user:
        raise CustomException(
            status_code=401,
            code="UNAUTHORIZED",
            message="用户未认证"
        )
    
    user_id = current_user.get('id')
    if not user_id:
        raise CustomException(
            status_code=400,
            code="INVALID_USER",
            message="用户ID无效"
        )
    
    data = request.get_json()
    if not data:
        raise CustomException(
            status_code=400,
            code="INVALID_REQUEST",
            message="请求数据无效"
        )
    
    # 检查记录是否存在且属于当前用户
    existing_exam = db.select(
        "mock_exams",
        ["id"],
        {"id": exam_id, "user_id": user_id}
    )
    
    if not existing_exam:
        raise CustomException(
            status_code=404,
            code="NOT_FOUND",
            message="模考记录不存在或不属于当前用户"
        )
    
    # 提取数据
    name = data.get("name")
    exam_date = data.get("examDate")
    scores = data.get("scores")
    
    # 准备更新数据
    update_data = {}
    if name is not None:
        update_data["name"] = name
    if exam_date is not None:
        update_data["exam_date"] = exam_date
    
    # 更新各科目分数
    if scores:
        subjects = ['chinese', 'math', 'english', 'politics', 'history', 'pe']
        for subject in subjects:
            if subject in scores:
                update_data[f"{subject}_score"] = scores[subject]
        
        # 重新计算总分
        total_score = compute_total_score(scores)
        update_data["total_score"] = total_score
    
    # 更新数据
    if update_data:
        db.update(
            "mock_exams",
            update_data,
            {"id": exam_id, "user_id": user_id}
        )
    
    # 查询更新后的数据
    updated_exam = db.select(
        "mock_exams",
        ["id", "name", "exam_date", "chinese_score", "math_score", "english_score", 
         "politics_score", "history_score", "pe_score", 
         "total_score", "created_at", "updated_at"],
        {"id": exam_id}
    )[0]
    
    # 格式化返回数据
    formatted_result = {
        "id": updated_exam["id"],
        "name": updated_exam["name"],
        "examDate": updated_exam["exam_date"],
        "scores": {
            "chinese": updated_exam["chinese_score"],
            "math": updated_exam["math_score"],
            "english": updated_exam["english_score"],
            "politics": updated_exam["politics_score"],
            "history": updated_exam["history_score"],
            "pe": updated_exam["pe_score"]
        },
        "totalScore": updated_exam["total_score"],
        "createdAt": updated_exam["created_at"],
        "updatedAt": updated_exam["updated_at"]
    }
    
    return {
        "data": formatted_result
    }


@mocks_bp.route("/<string:exam_id>", methods=["DELETE"], strict_slashes=False)
@require_auth
def delete_mock_exam(exam_id):
    """删除模考记录"""
    current_user = get_current_user()
    if not current_user:
        raise CustomException(
            status_code=401,
            code="UNAUTHORIZED",
            message="用户未认证"
        )
    
    user_id = current_user.get('id')
    if not user_id:
        raise CustomException(
            status_code=400,
            code="INVALID_USER",
            message="用户ID无效"
        )
    
    # 检查记录是否存在且属于当前用户
    existing_exam = db.select(
        "mock_exams",
        ["id"],
        {"id": exam_id, "user_id": user_id}
    )
    
    if not existing_exam:
        raise CustomException(
            status_code=404,
            code="NOT_FOUND",
            message="模考记录不存在或不属于当前用户"
        )
    
    # 删除数据
    db.delete(
        "mock_exams",
        {"id": exam_id, "user_id": user_id}
    )
    
    return {
        "message": "模考记录删除成功"
    }
