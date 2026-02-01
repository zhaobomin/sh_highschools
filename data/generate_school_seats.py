import csv
import uuid
from datetime import datetime

# 文件路径
middle_schools_file = 'middle_schools.csv'
high_schools_file = 'db_data/schools_extracted.csv'
seats_file = '2025_名额_分配到校.csv'
scores_file = '2025_分数线_分配到校.csv'
output_file = 'school_seats_init.csv'

# 读取初中学校数据，建立名称到代码的映射
middle_school_map = {}
with open(middle_schools_file, 'r', encoding='utf-8') as f:
    reader = csv.DictReader(f)
    for row in reader:
        name = row['name'].strip()
        code = row['code'].strip()
        middle_school_map[name] = code

# 读取高中学校数据，建立名称到代码的映射
high_school_map = {}
high_school_codes = set()
with open(high_schools_file, 'r', encoding='utf-8') as f:
    reader = csv.DictReader(f)
    for row in reader:
        name = row['name'].strip()
        code = row['code'].strip()
        high_school_map[name] = code
        high_school_codes.add(code)

# 读取名额分配数据
seats_data = {}
with open(seats_file, 'r', encoding='utf-8') as f:
    reader = csv.DictReader(f)
    for row in reader:
        middle_school_name = row['初中学校名称'].strip()
        high_school_name = row['招生高中名称'].strip()
        # 优先获取高中代码
        high_school_code = row.get('招生高中代码', '').strip()
        seats = row['分配名额数'].strip()
        key = (middle_school_name, high_school_name, high_school_code)
        seats_data[key] = seats

# 读取分数线数据
scores_data = {}
with open(scores_file, 'r', encoding='utf-8') as f:
    reader = csv.DictReader(f)
    for row in reader:
        middle_school_name = row['初级中学'].strip()
        high_school_name = row['高中学校'].strip()
        total_score = row['录取分数线'].strip()
        chinese = row['语文'].strip()
        math = row['数学'].strip()
        english = row['英语'].strip()
        key = (middle_school_name, high_school_name)
        scores_data[key] = {
            'total_score': total_score,
            'chinese': chinese,
            'math': math,
            'english': english
        }

# 生成school_seats数据
with open(output_file, 'w', newline='', encoding='utf-8') as f:
    fieldnames = [
        'id', 'middle_school_code', 'high_school_code', 'seats', 'year',
        'total_admission_score', 'chinese_admission_score', 'math_admission_score',
        'english_admission_score', 'physics_admission_score', 'chemistry_admission_score',
        'politics_admission_score', 'history_admission_score', 'created_at', 'updated_at'
    ]
    writer = csv.DictWriter(f, fieldnames=fieldnames)
    writer.writeheader()
    
    # 处理名额分配数据
    for (middle_name, high_name, high_code_from_file), seats in seats_data.items():
        # 获取初中学校代码
        if middle_name in middle_school_map:
            middle_code = middle_school_map[middle_name]
        else:
            # 尝试去除空格和特殊字符后匹配
            normalized_middle_name = middle_name.replace(' ', '').replace('\xa0', '')
            matched = False
            for key in middle_school_map:
                if key.replace(' ', '').replace('\xa0', '') == normalized_middle_name:
                    middle_code = middle_school_map[key]
                    matched = True
                    break
            if not matched:
                print(f"警告：未找到初中学校代码: {middle_name}")
                continue
        
        # 获取高中学校代码
        if high_code_from_file and high_code_from_file in high_school_codes:
            # 检查高中代码是否在schools_extracted.csv中存在
            high_code = high_code_from_file
        elif high_name in high_school_map:
            high_code = high_school_map[high_name]
        else:
            # 尝试去除空格和特殊字符后匹配
            normalized_high_name = high_name.replace(' ', '').replace('\xa0', '')
            matched = False
            for key in high_school_map:
                if key.replace(' ', '').replace('\xa0', '') == normalized_high_name:
                    high_code = high_school_map[key]
                    matched = True
                    break
            if not matched:
                print(f"警告：未找到高中学校代码: {high_name}")
                continue
        
        # 获取分数线数据
        score_info = scores_data.get((middle_name, high_name), {})
        total_score = score_info.get('total_score', '')
        chinese = score_info.get('chinese', '')
        math = score_info.get('math', '')
        english = score_info.get('english', '')
        
        # 生成UUID
        record_id = str(uuid.uuid4())
        
        # 获取当前时间
        current_time = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        
        # 写入数据
        writer.writerow({
            'id': record_id,
            'middle_school_code': middle_code,
            'high_school_code': high_code,
            'seats': seats,
            'year': '2025',
            'total_admission_score': total_score,
            'chinese_admission_score': chinese,
            'math_admission_score': math,
            'english_admission_score': english,
            'physics_admission_score': '',
            'chemistry_admission_score': '',
            'politics_admission_score': '',
            'history_admission_score': '',
            'created_at': current_time,
            'updated_at': current_time
        })

print(f"school_seats数据生成完成，输出文件: {output_file}")
