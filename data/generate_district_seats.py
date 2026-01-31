#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
生成district_seats表格的初始化数据

从多个CSV文件提取数据并关联，生成符合district_seats表结构的CSV数据
"""

import csv
import os
from collections import defaultdict


def read_schools_extracted():
    """读取schools_extracted.csv，构建学校代码和名称的映射"""
    school_code_map = {}  # 代码 -> 名称
    school_name_map = {}  # 名称 -> 代码
    file_path = os.path.join(os.path.dirname(__file__), 'db_data', 'schools_extracted.csv')
    
    with open(file_path, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            code = row.get('code')
            name = row.get('name')
            if code and name:
                school_code_map[code] = name
                school_name_map[name] = code
    
    return school_code_map, school_name_map


def read_quota_data():
    """读取2025_名额_分配到区.csv，提取名额数据"""
    quota_data = defaultdict(list)
    file_path = os.path.join(os.path.dirname(__file__), '2025_名额_分配到区.csv')
    
    with open(file_path, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            school_code = row.get('学校招生代码')
            school_name = row.get('学校名称')
            district = row.get('计划区域')
            seats = row.get('计划数')
            
            if district and seats:
                quota_data[(school_code, school_name, district)].append({
                    'school_code': school_code,
                    'school_name': school_name,
                    'district': district,
                    'seats': int(seats)
                })
    
    return quota_data


def normalize_district(district):
    """标准化区县名称，去除'区'字"""
    if district and district == '浦东':
        return '浦东新区'
    if district and not district.endswith('区'):
        return district + "区"
    return district

def read_score_data():
    """读取2025_分数线_分配到区.csv，提取分数线数据"""
    score_data = defaultdict(list)
    file_path = os.path.join(os.path.dirname(__file__), '2025_分数线_分配到区.csv')
    
    with open(file_path, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            district = row.get('区县')
            normalized_district = normalize_district(district)
            school_name = row.get('高中学校')
            total_score = row.get('录取分数线')
            chinese = row.get('语文')
            math = row.get('数学')
            english = row.get('英语')
            physics = row.get('物理', '')
            chemistry = row.get('化学', '')
            politics = row.get('政治', '')
            history = row.get('历史', '')
            
            if normalized_district and school_name:
                score_data[(normalized_district, school_name)].append({
                    'district': normalized_district,
                    'school_name': school_name,
                    'total_admission_score': float(total_score) if total_score else None,
                    'chinese_admission_score': float(chinese) if chinese else None,
                    'math_admission_score': float(math) if math else None,
                    'english_admission_score': float(english) if english else None,
                    'physics_admission_score': float(physics) if physics else None,
                    'chemistry_admission_score': float(chemistry) if chemistry else None,
                    'politics_admission_score': float(politics) if politics else None,
                    'history_admission_score': float(history) if history else None
                })
    
    return score_data


def generate_district_seats():
    """生成district_seats数据"""
    # 读取数据
    school_code_map, school_name_map = read_schools_extracted()
    quota_data = read_quota_data()
    score_data = read_score_data()
    
    # 生成结果
    result = []
    year = 2025
    
    # 处理名额数据
    for (school_code, school_name, district), quota_items in quota_data.items():
        district = normalize_district(district)
        for item in quota_items:
            # 查找高中代码
            high_school_code = school_code
            if not high_school_code:
                # 通过名称查找代码
                high_school_code = school_name_map.get(school_name)
            
            if high_school_code:
                # 查找对应的分数线数据
                score_key = (district, school_name)
                score_items = score_data.get(score_key, [])
                
                if score_items:
                    score_item = score_items[0]  # 取第一条匹配的分数线
                    
                    # 构建记录
                    record = {
                        'district': district,
                        'high_school_code': high_school_code,
                        'seats': item['seats'],
                        'year': year,
                        'total_admission_score': score_item['total_admission_score'],
                        'chinese_admission_score': score_item['chinese_admission_score'],
                        'math_admission_score': score_item['math_admission_score'],
                        'english_admission_score': score_item['english_admission_score'],
                        'physics_admission_score': score_item['physics_admission_score'],
                        'chemistry_admission_score': score_item['chemistry_admission_score'],
                        'politics_admission_score': score_item['politics_admission_score'],
                        'history_admission_score': score_item['history_admission_score']
                    }
                    result.append(record)
                else:
                    # 无分数线数据，只记录名额
                    record = {
                        'district': district,
                        'high_school_code': high_school_code,
                        'seats': item['seats'],
                        'year': year,
                        'total_admission_score': None,
                        'chinese_admission_score': None,
                        'math_admission_score': None,
                        'english_admission_score': None,
                        'physics_admission_score': None,
                        'chemistry_admission_score': None,
                        'politics_admission_score': None,
                        'history_admission_score': None
                    }
                    result.append(record)
    
    # 处理只有分数线没有名额的数据
    for (district, school_name), score_items in score_data.items():
        # 检查是否已经处理过
        processed = False
        for record in result:
            if record['district'] == district and record['high_school_code'] in school_code_map:
                school_name_in_map = school_code_map.get(record['high_school_code'])
                if school_name_in_map == school_name:
                    processed = True
                    break
        
        if not processed:
            # 查找高中代码
            high_school_code = school_name_map.get(school_name)
            if high_school_code:
                for score_item in score_items:
                    # 构建记录（名额默认为0）
                    record = {
                        'district': district,
                        'high_school_code': high_school_code,
                        'seats': 0,
                        'year': year,
                        'total_admission_score': score_item['total_admission_score'],
                        'chinese_admission_score': score_item['chinese_admission_score'],
                        'math_admission_score': score_item['math_admission_score'],
                        'english_admission_score': score_item['english_admission_score'],
                        'physics_admission_score': score_item['physics_admission_score'],
                        'chemistry_admission_score': score_item['chemistry_admission_score'],
                        'politics_admission_score': score_item['politics_admission_score'],
                        'history_admission_score': score_item['history_admission_score']
                    }
                    result.append(record)
    
    return result


def write_to_csv(data, output_file):
    """将数据写入CSV文件"""
    if not data:
        print("没有生成数据")
        return
    
    # 定义字段顺序
    fieldnames = [
        'district',
        'high_school_code',
        'seats',
        'year',
        'total_admission_score',
        'chinese_admission_score',
        'math_admission_score',
        'english_admission_score',
        'physics_admission_score',
        'chemistry_admission_score',
        'politics_admission_score',
        'history_admission_score'
    ]
    
    with open(output_file, 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(data)
    
    print(f"数据已生成到: {output_file}")
    print(f"生成了 {len(data)} 条记录")


if __name__ == "__main__":
    output_file = os.path.join(os.path.dirname(__file__), 'district_seats_init.csv')
    data = generate_district_seats()
    write_to_csv(data, output_file)
