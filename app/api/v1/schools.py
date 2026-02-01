from flask import Blueprint, request

from app.core.db import db

schools_bp = Blueprint("schools", __name__, url_prefix="/schools")


@schools_bp.route("/", methods=["GET"])
def list_schools():
    current_user = None
    
    # 获取查询参数
    q = request.args.get("q", "").strip()
    district = request.args.get("district")
    type_ = request.args.get("type")
    student_district = request.args.get("studentDistrict")
    middle_school_id = request.args.get("middleSchoolId")
    
    # 获取学生分数字段
    stable_score = request.args.get("stableScore", type=float)
    high_score = request.args.get("highScore", type=float)
    low_score = request.args.get("lowScore", type=float)
    
    # 构建查询条件
    conditions = {}
    if district and district != "全部":
        conditions["district"] = district
    if type_ and type_ != "全部":
        conditions["type"] = type_
    
    # 查询高中学校
    schools = db.select("schools", ["code", "name", "district", "type", "full_type"])
    
    # 过滤学校
    filtered_schools = []
    for school in schools:
        # 按名称过滤
        if q and q not in school["name"]:
            continue
        # 按区域过滤
        if district and district != "全部" and school["district"] != district:
            continue
        # 按类型过滤
        if type_ and type_ != "全部" and school["type"] != type_:
            continue
        filtered_schools.append(school)
    
    # 为每个学校添加统计信息
    enriched_schools = []
    for school in filtered_schools:
        stats = {}
        school_id = school["code"]
        
        # 1. 查询到区分数线和名额
        if student_district:
            # 查询到区分数线
            score_lines = db.select("score_lines", ["score"], {
                "school_code": school_id,
                "district": student_district
            })
            if score_lines:
                stats["scoreToDistrict"] = score_lines[0]["score"]
            
            # 查询到区名额
            district_seats = db.select("district_seats", ["seats"], {
                "high_school_code": school_id,
                "district": student_district
            })
            if district_seats:
                stats["quotaToDistrict"] = district_seats[0]["seats"]
        
        # 2. 查询到校分数线和名额
        if middle_school_id:
            # 查询到校分数线
            school_seats = db.select("school_seats", ["total_admission_score"], {
                "high_school_code": school_id,
                "middle_school_code": middle_school_id
            })
            if school_seats:
                stats["scoreToSchool"] = school_seats[0]["total_admission_score"]
            
            # 查询到校名额
            school_seats_quota = db.select("school_seats", ["seats"], {
                "high_school_code": school_id,
                "middle_school_code": middle_school_id
            })
            if school_seats_quota:
                stats["quotaToSchool"] = school_seats_quota[0]["seats"]
        
        # 3. 查询统招分数线
        parallel_scores = db.select("parallel_admission_scores", ["total_admission_score"], {
            "high_school_code": school_id
        })
        if parallel_scores:
            stats["scoreUnified"] = parallel_scores[0]["total_admission_score"]
        else:
            # 如果没有统招分数线，根据学校类型设置默认值
            if school["type"] == "市重点":
                stats["scoreUnified"] = 690
            elif school["type"] == "区重点":
                stats["scoreUnified"] = 660
            else:
                stats["scoreUnified"] = 630
        
        # 4. 查询自招名额
        # 这里假设自招名额存储在某个表中，暂时使用默认值
        if school["type"] == "市重点":
            stats["quotaAutonomous"] = 75
        elif school["type"] == "区重点":
            stats["quotaAutonomous"] = 40
        else:
            stats["quotaAutonomous"] = 15
        
        # 5. 计算推荐度
        if stable_score is not None:
            student_score = stable_score
            base_probability = 0
            
            if stats.get("scoreUnified"):
                unified_score = stats["scoreUnified"]
                if student_score >= unified_score + 10:
                    base_probability = 90  # 高概率
                elif student_score >= unified_score:
                    base_probability = 75  # 良好概率
                elif student_score >= unified_score - 10:
                    base_probability = 60  # 中等概率
                elif student_score >= unified_score - 20:
                    base_probability = 40  # 低概率
                else:
                    base_probability = 20  # 极低概率
            
            # 根据学生的上限分和下限分调整概率
            if high_score is not None and stats.get("scoreUnified"):
                if high_score >= stats["scoreUnified"]:
                    base_probability += 10
            
            if low_score is not None and stats.get("scoreUnified"):
                if low_score < stats["scoreUnified"] - 20:
                    base_probability -= 10
            
            # 确保概率在合理范围内
            stats["probability"] = max(10, min(95, round(base_probability)))
        else:
            # 如果没有学生分数，使用默认概率
            stats["probability"] = 50
        
        # 设置默认值
        if "scoreToDistrict" not in stats:
            stats["scoreToDistrict"] = stats["scoreUnified"]
        if "scoreToSchool" not in stats:
            stats["scoreToSchool"] = stats["scoreUnified"] - 5
        if "quotaToDistrict" not in stats:
            if school["type"] == "市重点":
                stats["quotaToDistrict"] = 35
            elif school["type"] == "区重点":
                stats["quotaToDistrict"] = 25
            else:
                stats["quotaToDistrict"] = 15
        if "quotaToSchool" not in stats:
            if school["type"] == "市重点":
                stats["quotaToSchool"] = 10
            elif school["type"] == "区重点":
                stats["quotaToSchool"] = 7
            else:
                stats["quotaToSchool"] = 3
        
        # 构建丰富的学校对象
        enriched_school = {
            "id": school["code"],
            "name": school["name"],
            "district": school["district"],
            "type": school["type"],
            "fullType": school["full_type"],
            "stats": stats
        }
        enriched_schools.append(enriched_school)
    
    return {
        "data": enriched_schools,
        "meta": {"total": len(enriched_schools)}
    }


@schools_bp.route("/simple", methods=["GET"])
def list_schools_simple():
    """获取所有高中的名称和ID，用于选择列表"""
    # 从数据库查询所有高中的基本信息
    schools = db.select("high_schools", ["id", "name"])
    
    # 格式化返回数据
    simple_schools = [
        {
            "id": school["id"],
            "name": school["name"]
        }
        for school in schools
    ]
    
    return {
        "data": simple_schools,
        "meta": {"total": len(simple_schools)}
    }


@schools_bp.route("/<int:school_id>", methods=["GET"])
def get_school(school_id: int):
    return {"data": {"id": school_id, "name": "Placeholder School"}}


@schools_bp.route("/test", methods=["GET"])
def test():
    """测试API，无需认证"""
    return {"message": "Test API works!"}
