#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
学校数据初始化脚本
用于从CSV文件中抽取数据并生成初始化数据库的SQL语句
"""

import csv
import os
import uuid
from datetime import datetime

# 数据文件路径
DATA_DIR = 'data'

# 数据文件映射
DATA_FILES = {
    'high_schools': '2025_上海市高中招生学校名单.csv',
    'parallel_scores': '2025_平行志愿_分数线.csv',
    'school_seats': '2025_名额_分配到校.csv',
    'district_seats': '2025_名额_分配到区.csv',
    'district_scores': '2025_分数线_分配到区.csv',
    'school_scores': '2025_分数线_分配到校.csv'
}

# 生成UUID的函数
def generate_uuid():
    return str(uuid.uuid4())

# 生成当前时间的函数
def get_current_timestamp():
    return datetime.now().strftime('%Y-%m-%d %H:%M:%S')

# 读取CSV文件的函数
def read_csv_file(file_path):
    """读取CSV文件并返回数据列表"""
    data = []
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            reader = csv.DictReader(f)
            for row in reader:
                # 去除所有字段的首尾空格，处理None值和非字符串类型
                cleaned_row = {}
                for k, v in row.items():
                    key = k.strip() if isinstance(k, str) else ''
                    # 处理值的类型
                    if isinstance(v, str):
                        value = v.strip()
                    elif v is None:
                        value = ''
                    else:
                        value = str(v).strip()
                    cleaned_row[key] = value
                data.append(cleaned_row)
        print(f"✓ 成功读取文件: {file_path}，共 {len(data)} 条数据")
    except Exception as e:
        print(f"✗ 读取文件失败: {file_path}，错误: {e}")
    return data

# 处理高中学校数据
def process_high_schools(data):
    """处理高中学校数据并生成SQL"""
    sql_statements = []
    seen_codes = set()
    
    for row in data:
        code = row.get('招生代码', '').strip()
        # 兼容旧的字段名
        if not code:
            code = row.get('招生代码', '').strip()
        if not code:
            continue
        
        # 去重
        if code in seen_codes:
            continue
        seen_codes.add(code)
        
        name = row.get('学校全称', '').strip()
        district = row.get('所属区', '').strip()
        ownership_type = row.get('办别', '').strip()
        full_type = row.get('学校类型', '').strip()
        note = row.get('备注', '').strip()
        
        # 简化学校类型
        if '委属' in full_type:
            type_simple = "委属"
        elif '市实验性示范性高中' in full_type:
            type_simple = '市重点'
        elif '区实验性示范性高中' in full_type:
            type_simple = '区重点'
        elif '市特色普通高中' in full_type:
            type_simple = '特色高中'
        else:
            type_simple = '一般高中'
        
        # 生成SQL
        sql = f"""INSERT INTO schools (code, name, district, type, ownership_type, full_type, note, created_at, updated_at) 
VALUES ('{code}', '{name}', '{district}', '{type_simple}', '{ownership_type}', '{full_type}', '{note}', '{get_current_timestamp()}', '{get_current_timestamp()}');"""
        sql_statements.append(sql)
    
    return sql_statements

# 处理初中学校数据
def process_middle_schools(school_seats_data):
    """从到校名额数据中提取初中学校信息"""
    sql_statements = []
    seen_codes = set()
    
    for row in school_seats_data:
        code = row.get('初中学校代码', '').strip()
        if not code:
            continue
        
        # 去重
        if code in seen_codes:
            continue
        seen_codes.add(code)
        
        name = row.get('初中学校名称', '').strip()
        district = row.get('所属区', '').strip()
        
        # 推断学校类型
        if '民办' in name:
            type_simple = '民办'
        else:
            type_simple = '公办'
        
        # 生成SQL
        sql = f"""INSERT INTO middle_schools (code, name, district, type, created_at, updated_at) 
VALUES ('{code}', '{name}', '{district}', '{type_simple}', '{get_current_timestamp()}', '{get_current_timestamp()}');"""
        sql_statements.append(sql)
    
    return sql_statements

# 处理平行志愿录取分数线数据
def process_parallel_scores(data):
    """处理平行志愿录取分数线数据"""
    sql_statements = []
    seen_records = set()
    
    for row in data:
        school_code = row.get('学校编码', '').strip()
        if not school_code:
            # 尝试其他可能的字段名
            school_code = row.get('学校代码', '').strip()
        
        district = row.get('所属区', '').strip()
        if not district:
            # 尝试其他可能的字段名
            district = row.get('行政区', '').strip()
        
        school_name = row.get('学校名称', '').strip()
        score = row.get('录取最低分', '').strip()
        
        if school_code and district and score:
            record_key = (school_code, district, 2025)
            if record_key not in seen_records:
                seen_records.add(record_key)
                
                # 生成SQL
                sql = f"""INSERT INTO parallel_admission_scores (id, high_school_code, district, total_admission_score, chinese_admission_score, math_admission_score, english_admission_score, year, created_at, updated_at) 
VALUES ('{generate_uuid()}', '{school_code}', '{district}', {score}, NULL, NULL, NULL, 2025, '{get_current_timestamp()}', '{get_current_timestamp()}');"""
                sql_statements.append(sql)
    
    return sql_statements

# 创建高中学校名称到代码的映射
def create_high_school_mapping(high_schools_data):
    """创建高中学校名称到代码的映射字典"""
    mapping = {}
    for row in high_schools_data:
        code = row.get('招生代码', '').strip()
        name = row.get('学校全称', '').strip()
        if code and name:
            mapping[name] = code
    return mapping

# 处理到校名额数据
def process_school_seats(data, high_school_mapping, school_scores_data):
    """处理到校名额数据"""
    sql_statements = []
    seen_records = set()
    
    # 创建到校分数线数据映射
    school_score_mapping = {}
    for row in school_scores_data:
        district = row.get('区县', '').strip()
        middle_school = row.get('初级中学', '').strip()
        high_school = row.get('高中学校', '').strip()
        score = row.get('录取分数线', '').strip()
        total_score = row.get('总分', '').strip()
        chinese = row.get('语文', '').strip()
        math = row.get('数学', '').strip()
        english = row.get('英语', '').strip()
        if middle_school and high_school:
            school_score_mapping[(middle_school, high_school)] = {
                'score': score or 'NULL',
                'total_score': total_score or 'NULL',
                'chinese': chinese or 'NULL',
                'math': math or 'NULL',
                'english': english or 'NULL'
            }
    
    for row in data:
        middle_code = row.get('初中学校代码', '').strip()
        high_code = row.get('招生高中代码', '').strip()
        high_name = row.get('招生高中名称', '').strip()
        middle_name = row.get('初中学校名称', '').strip()
        seats = row.get('分配名额数', '').strip()
        
        # 如果高中代码为空，尝试通过学校名称反查
        if not high_code and high_name:
            high_code = high_school_mapping.get(high_name, '').strip()
        
        if not middle_code or not high_code or not seats:
            continue
        
        # 去重
        record_key = (middle_code, high_code, 2025)
        if record_key in seen_records:
            continue
        seen_records.add(record_key)
        
        # 查找对应的分数线和成绩
        score_data = school_score_mapping.get((middle_name, high_name), {})
        score = score_data.get('score', 'NULL')
        total_score = score_data.get('total_score', 'NULL')
        chinese = score_data.get('chinese', 'NULL')
        math = score_data.get('math', 'NULL')
        english = score_data.get('english', 'NULL')
        
        # 生成SQL
        sql = f"""INSERT INTO school_seats (id, middle_school_code, high_school_code, seats, total_admission_score, chinese_admission_score, math_admission_score, english_admission_score, year, created_at, updated_at) 
VALUES ('{generate_uuid()}', '{middle_code}', '{high_code}', {seats}, {score}, {chinese}, {math}, {english}, 2025, '{get_current_timestamp()}', '{get_current_timestamp()}');"""
        sql_statements.append(sql)
    
    return sql_statements

# 清理学校名称的函数
def clean_school_name(name):
    """清理学校名称，去除校区信息和多余字符"""
    import re
    # 去除括号及其内容
    name = re.sub(r'\([^)]*\)', '', name)
    # 去除多余空格
    name = ' '.join(name.split())
    return name.strip()

# 处理到区名额数据
def process_district_seats(data, district_scores_data, high_school_mapping):
    """处理到区名额数据"""
    sql_statements = []
    seen_records = set()
    
    # 创建分数线数据映射
    district_score_mapping = {}
    high_school_name_mapping = {}
    
    for row in district_scores_data:
        district = row.get('区县', '').strip()
        high_name = row.get('高中学校', '').strip()
        score = row.get('录取分数线', '').strip()
        if district and high_name and score:
            # 存储原始格式
            district_score_mapping[(district, high_name)] = score
            # 存储不带"区"字的格式，以匹配名额数据
            if district.endswith('区'):
                district_short = district[:-1]
                district_score_mapping[(district_short, high_name)] = score
            # 存储清理后的学校名称格式
            cleaned_name = clean_school_name(high_name)
            if cleaned_name != high_name:
                district_score_mapping[(district, cleaned_name)] = score
                if district.endswith('区'):
                    district_short = district[:-1]
                    district_score_mapping[(district_short, cleaned_name)] = score
            # 建立学校名称映射
            high_school_name_mapping[high_name] = cleaned_name
    
    for row in data:
        # 使用正确的字段名
        district = row.get('计划区域', '').strip()
        high_code = row.get('学校招生代码', '').strip()
        high_name = row.get('学校名称', '').strip()
        seats = row.get('计划数', '').strip()
        
        if not district or not high_code or not seats:
            continue
        
        # 去重
        record_key = (district, high_code, 2025)
        if record_key in seen_records:
            continue
        seen_records.add(record_key)
        
        # 查找对应的分数线
        score = district_score_mapping.get((district, high_name), 'NULL')
        
        # 生成SQL
        sql = f"""INSERT INTO district_seats (id, district, high_school_code, seats, total_admission_score, chinese_admission_score, math_admission_score, english_admission_score, year, created_at, updated_at) 
VALUES ('{generate_uuid()}', '{district}', '{high_code}', {seats}, {score}, NULL, NULL, NULL, 2025, '{get_current_timestamp()}', '{get_current_timestamp()}');"""
        sql_statements.append(sql)
    
    print(f"处理到区名额数据: 共 {len(sql_statements)} 条")
    return sql_statements

# 主函数
def main():
    """主函数"""
    print("开始处理学校数据...")
    print("=" * 80)
    
    # 读取所有数据文件
    high_schools_data = read_csv_file(os.path.join(DATA_DIR, DATA_FILES['high_schools']))
    parallel_scores_data = read_csv_file(os.path.join(DATA_DIR, DATA_FILES['parallel_scores']))
    school_seats_data = read_csv_file(os.path.join(DATA_DIR, DATA_FILES['school_seats']))
    district_seats_data = read_csv_file(os.path.join(DATA_DIR, DATA_FILES['district_seats']))
    district_scores_data = read_csv_file(os.path.join(DATA_DIR, DATA_FILES['district_scores']))
    school_scores_data = read_csv_file(os.path.join(DATA_DIR, DATA_FILES['school_scores']))
    
    print("\n开始生成SQL语句...")
    print("=" * 80)
    
    # 创建高中学校名称到代码的映射
    high_school_mapping = create_high_school_mapping(high_schools_data)
    
    # 生成各类数据的SQL
    high_schools_sql = process_high_schools(high_schools_data)
    middle_schools_sql = process_middle_schools(school_seats_data)
    parallel_scores_sql = process_parallel_scores(parallel_scores_data)
    school_seats_sql = process_school_seats(school_seats_data, high_school_mapping, school_scores_data)
    district_seats_sql = process_district_seats(district_seats_data, district_scores_data, high_school_mapping)
    
    print("\n生成SQL文件...")
    print("=" * 80)
    
    # 汇总所有SQL语句
    all_sql = []
    all_sql.extend(['-- 高中学校数据'])
    all_sql.extend(high_schools_sql)
    all_sql.extend(['\n-- 初中学校数据'])
    all_sql.extend(middle_schools_sql)
    all_sql.extend(['\n-- 平行志愿录取分数线数据'])
    all_sql.extend(parallel_scores_sql)
    all_sql.extend(['\n-- 到校名额数据'])
    all_sql.extend(school_seats_sql)
    all_sql.extend(['\n-- 到区名额数据'])
    all_sql.extend(district_seats_sql)
    
    # 写入SQL文件
    output_file = 'schools_data_init.sql'
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write('-- 学校数据初始化SQL\n')
        f.write('-- 生成时间: ' + get_current_timestamp() + '\n\n')
        f.write('START TRANSACTION;\n\n')
        
        for sql in all_sql:
            f.write(sql + '\n\n')
        
        f.write('COMMIT;\n\n')
        f.write('SELECT \'学校数据初始化完成！\' AS message;\n')
    
    print(f"\n✓ 数据处理完成！")
    print(f"✓ 生成的SQL文件: {output_file}")
    print(f"✓ 高中学校数据: {len(high_schools_sql)} 条")
    print(f"✓ 初中学校数据: {len(middle_schools_sql)} 条")
    print(f"✓ 平行志愿分数线: {len(parallel_scores_sql)} 条")
    print(f"✓ 到校名额数据: {len(school_seats_sql)} 条")
    print(f"✓ 到区名额数据: {len(district_seats_sql)} 条")
    print(f"✓ 总计: {len(high_schools_sql) + len(middle_schools_sql) + len(parallel_scores_sql) + len(school_seats_sql) + len(district_seats_sql)} 条记录")
    print("=" * 80)

if __name__ == '__main__':
    main()
