from flask import Blueprint, request

from app.core.security import get_current_user, require_auth
from app.core.db import db
from app.core.exceptions import CustomException
from app.core.response import api_response
from app.services.mocks_service import (
    create_mock_exam,
    delete_mock_exam,
    get_mock_stats,
    list_mock_exams,
    update_mock_exam,
)

mocks_bp = Blueprint("mocks", __name__, url_prefix="/mocks")


@mocks_bp.route("/", methods=["GET"], strict_slashes=False)
@require_auth
def list_mock_exams_route():
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
    
    formatted_exams = list_mock_exams(db, user_id)
    return api_response(formatted_exams, {"total": len(formatted_exams)})


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
    
    stats = get_mock_stats(db, user_id)
    return api_response(stats)


@mocks_bp.route("/", methods=["POST"], strict_slashes=False)
@require_auth
def create_mock_exam_route():
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
    
    formatted_result = create_mock_exam(db, user_id, data)
    return api_response(formatted_result), 201


@mocks_bp.route("/<string:exam_id>", methods=["PUT"], strict_slashes=False)
@require_auth
def update_mock_exam_route(exam_id):
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
    
    formatted_result = update_mock_exam(db, user_id, exam_id, data)
    return api_response(formatted_result)


@mocks_bp.route("/<string:exam_id>", methods=["DELETE"], strict_slashes=False)
@require_auth
def delete_mock_exam_route(exam_id):
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
    
    delete_mock_exam(db, user_id, exam_id)
    return api_response({"message": "模考记录删除成功"})
