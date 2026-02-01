import csv
import uuid
from datetime import datetime

# 读取学校信息文件
def read_schools(schools_file):
    schools = {}
    with open(schools_file, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            code = row['code']
            name = row['name']
            district = row['district']
            schools[code] = {'name': name, 'district': district}
    return schools

# 读取平行志愿分数线文件
def read_parallel_scores(scores_file):
    scores = []
    with open(scores_file, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            code = row['学校编码']
            name = row['学校名称']
            district = row['所属区']
            total_score = row['录取最低分']
            scores.append({
                'code': code,
                'name': name,
                'district': district,
                'total_score': total_score
            })
    return scores

# 生成parallel_admission_scores数据
def generate_parallel_admission_scores(schools, scores, output_file):
    # 创建学校名称到代码的映射，用于没有代码时的关联
    name_to_code = {}
    for code, info in schools.items():
        name_to_code[info['name']] = code
    
    # 准备输出数据
    output_data = []
    not_matched = []
    
    for score in scores:
        # 优先使用代码关联
        high_school_code = score['code']
        if high_school_code not in schools:
            # 没有代码时，通过学校名称关联
            if score['name'] in name_to_code:
                high_school_code = name_to_code[score['name']]
            else:
                # 如果既没有代码也没有匹配的名称，记录并跳过
                not_matched.append({
                    'code': score['code'],
                    'name': score['name'],
                    'district': score['district'],
                    'total_score': score['total_score']
                })
                continue
        
        # 生成UUID
        record_id = str(uuid.uuid4())
        
        # 获取当前时间
        current_time = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        
        # 构建输出记录
        record = {
            'id': record_id,
            'high_school_code': high_school_code,
            'district': score['district'],
            'total_admission_score': score['total_score'],
            'chinese_admission_score': '',
            'math_admission_score': '',
            'english_admission_score': '',
            'physics_admission_score': '',
            'chemistry_admission_score': '',
            'politics_admission_score': '',
            'history_admission_score': '',
            'year': 2025,
            'created_at': current_time,
            'updated_at': current_time
        }
        output_data.append(record)
    
    # 写入输出文件
    if output_data:
        fieldnames = output_data[0].keys()
        with open(output_file, 'w', encoding='utf-8', newline='') as f:
            writer = csv.DictWriter(f, fieldnames=fieldnames)
            writer.writeheader()
            writer.writerows(output_data)
        print(f"成功生成 {len(output_data)} 条平行志愿分数线数据")
    else:
        print("没有生成数据")
    
    # 输出未匹配的学校
    if not_matched:
        print(f"\n有 {len(not_matched)} 条数据未匹配成功：")
        for item in not_matched:
            print(f"  代码: {item['code']}, 名称: {item['name']}, 区县: {item['district']}, 分数线: {item['total_score']}")
    else:
        print("\n所有数据都匹配成功")

if __name__ == "__main__":
    # 文件路径
    schools_file = 'db_data/schools_extracted.csv'
    scores_file = '2025_平行志愿_分数线.csv'
    output_file = 'parallel_admission_scores_init.csv'
    
    # 读取数据
    schools = read_schools(schools_file)
    scores = read_parallel_scores(scores_file)
    
    # 生成数据
    generate_parallel_admission_scores(schools, scores, output_file)
