from fastapi import APIRouter, HTTPException, Depends, Query
from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime
from app.core.db import db
from app.api.v1.auth import get_current_user

router = APIRouter()

# 初中学校响应模型
class MiddleSchool(BaseModel):
    id: str
    name: str
    district: str
    type: str

# 响应模型：筛选选项
class FilterOptions(BaseModel):
    districts: List[str]
    junior_types: List[str]
    middle_schools: List[MiddleSchool]

# 为统一返回结构增加包裹层
class FilterOptionsResponse(BaseModel):
    data: FilterOptions

# 学生画像请求/响应模型
class StudentProfile(BaseModel):
    district: str
    junior_type: str
    middle_school_id: Optional[str] = None
    stable_score: float
    high_score: float
    low_score: float

# 获取初中学校列表
@router.get("/middle-schools", response_model=List[MiddleSchool])
async def get_middle_schools(
    district: Optional[str] = Query(None, description="区县筛选"),
    type: Optional[str] = Query(None, description="学校类型筛选（公办/民办）"),
    current_user: dict = Depends(get_current_user)
):
    # 构建查询条件
    conditions = {}
    if district:
        conditions["district"] = district
    if type:
        conditions["type"] = type
    
    # 从数据库获取初中学校列表
    schools = db.select("middle_schools", ["code", "name", "district", "type"], conditions)
    
    # 转换为响应模型
    result = []
    for school in schools:
        result.append(MiddleSchool(
            id=school["code"],
            name=school["name"],
            district=school["district"],
            type=school["type"]
        ))
    
    return result


@router.get("/options", response_model=FilterOptionsResponse)
async def get_filter_options(
    current_user: dict = Depends(get_current_user)
):
    schools = db.select("middle_schools", ["code", "name", "district", "type"])

    options = []
    for school in schools:
        options.append(MiddleSchool(
            id=school["code"],
            name=school["name"],
            district=school["district"],
            type=school["type"]
        ))

    districts = sorted({school["district"] for school in schools})
    junior_types = sorted({school["type"] for school in schools})

    return FilterOptionsResponse(
        data=FilterOptions(
            districts=districts,
            junior_types=junior_types,
            middle_schools=options
        )
    )

# 获取学生画像数据
@router.get("/student-profile", response_model=Optional[StudentProfile])
async def get_student_profile(
    current_user: dict = Depends(get_current_user)
):
    # 从数据库获取学生画像数据
    profiles = db.select("student_profiles", ["*"], {"user_id": current_user["id"]})
    
    if not profiles:
        return None
    
    profile = profiles[0]
    return StudentProfile(
        district=profile["district"],
        junior_type=profile["junior_type"],
        middle_school_id=profile["middle_school_code"],
        stable_score=profile["stable_score"],
        high_score=profile["high_score"],
        low_score=profile["low_score"]
    )

# 保存/更新学生画像数据
@router.post("/student-profile", response_model=StudentProfile)
async def save_student_profile(
    profile_data: StudentProfile,
    current_user: dict = Depends(get_current_user)
):
    # 检查是否已存在学生画像
    existing_profiles = db.select("student_profiles", ["id"], {"user_id": current_user["id"]})
    
    if existing_profiles:
        # 更新现有学生画像
        updated = db.update(
            "student_profiles",
            {
                "district": profile_data.district,
                "junior_type": profile_data.junior_type,
                "middle_school_code": profile_data.middle_school_id,
                "stable_score": profile_data.stable_score,
                "high_score": profile_data.high_score,
                "low_score": profile_data.low_score,
                "updated_at": datetime.utcnow(),
            },
            {"user_id": current_user["id"]}
        )
        
        if not updated:
            raise HTTPException(status_code=500, detail="Failed to update student profile")
    else:
        # 创建新学生画像
        created = db.insert(
            "student_profiles",
            {
                "user_id": current_user["id"],
                "district": profile_data.district,
                "junior_type": profile_data.junior_type,
                "middle_school_code": profile_data.middle_school_id,
                "stable_score": profile_data.stable_score,
                "high_score": profile_data.high_score,
                "low_score": profile_data.low_score
            },
            ["*"]
        )
        
        if not created:
            raise HTTPException(status_code=500, detail="Failed to create student profile")
    
    return profile_data
