import csv
import os
from datetime import datetime

# 文件路径
SCHOOLS_FILE = 'db_data/schools_extracted.csv'
SELF_ENROLLMENT_FILE = '2025_自招_名额.csv'
OUTPUT_FILE = 'self_enrollment_quota_init.csv'

# 年份
YEAR = 2025

def main():
    # 读取schools_extracted.csv，建立学校代码到名称的映射
    school_map = {}
    with open(SCHOOLS_FILE, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            school_map[row['code']] = row['name']
    
    # 读取2025_自招_名额.csv，生成初始化数据
    output_data = []
    
    with open(SELF_ENROLLMENT_FILE, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            school_code = row['学校招生代码']
            school_name = row['学校名称']
            boarding_status = row['寄宿情况']
            total_quota = row['合计']
            sports_quota = row['其中:市级优秀体育学生']
            art_quota = row['其中:市级艺术骨干学生']
            
            # 验证学校代码是否存在于schools_extracted.csv中
            if school_code not in school_map:
                # 尝试通过学校名称匹配
                matched_code = None
                for code, name in school_map.items():
                    if name == school_name:
                        matched_code = code
                        break
                
                if matched_code:
                    school_code = matched_code
                    print(f"通过学校名称匹配: {school_name} -> {school_code}")
                else:
                    print(f"警告: 学校 {school_name} (代码: {school_code}) 在schools_extracted.csv中未找到")
                    continue
            
            # 构建输出数据
            output_row = {
                'school_code': school_code,
                'boarding_status': boarding_status,
                'total_quota': total_quota,
                'sports_quota': sports_quota,
                'art_quota': art_quota,
                'year': YEAR
            }
            output_data.append(output_row)
    
    # 写入输出文件
    with open(OUTPUT_FILE, 'w', encoding='utf-8', newline='') as f:
        fieldnames = ['school_code', 'boarding_status', 'total_quota', 'sports_quota', 'art_quota', 'year']
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(output_data)
    
    print(f"成功生成 {OUTPUT_FILE}，包含 {len(output_data)} 条记录")

if __name__ == '__main__':
    main()