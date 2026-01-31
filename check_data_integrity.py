#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
数据完整性检查脚本
用于检查平行志愿分数线和高中学校数据之间的关系
"""

import csv
import os
import re

# 数据文件路径
DATA_DIR = 'data'

# 数据文件
HIGH_SCHOOLS_FILE = '2025_上海市高中招生学校名单.csv'
PARALLEL_SCORES_FILE = '2025_平行志愿_分数线.csv'

# 标准化学校名称的函数
def normalize_school_name(name):
    """标准化学校名称，去除括号和空格差异"""
    if not name:
        return ""
    # 去除所有空格
    name = name.strip()
    # 统一括号格式
    name = name.replace('（', '(').replace('）', ')')
    # 去除括号内的内容
    name = re.sub(r'\([^)]*\)', '', name)
    # 去除多余空格
    name = ' '.join(name.split())
    return name

# 读取CSV文件的函数
def read_csv_file(file_path):
    """读取CSV文件并返回数据列表"""
    data = []
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            reader = csv.DictReader(f)
            for row in reader:
                # 去除所有字段的首尾空格
                cleaned_row = {}
                for k, v in row.items():
                    key = k.strip() if isinstance(k, str) else ''
                    value = v.strip() if isinstance(v, str) else ''
                    cleaned_row[key] = value
                data.append(cleaned_row)
        print(f"✓ 成功读取文件: {file_path}，共 {len(data)} 条数据")
    except Exception as e:
        print(f"✗ 读取文件失败: {file_path}，错误: {e}")
    return data

# 检查数据完整性
def check_data_integrity():
    """检查平行志愿分数线和高中学校数据之间的关系"""
    print("开始检查数据完整性...")
    print("=" * 80)
    
    # 读取数据
    high_schools_data = read_csv_file(os.path.join(DATA_DIR, HIGH_SCHOOLS_FILE))
    parallel_scores_data = read_csv_file(os.path.join(DATA_DIR, PARALLEL_SCORES_FILE))
    
    print("\n开始分析数据关系...")
    print("=" * 80)
    
    # 提取高中学校数据
    high_schools = []
    for row in high_schools_data:
        code = row.get('学校招生代码', '').strip()
        # 兼容旧的字段名
        if not code:
            code = row.get('招生代码', '').strip()
        name = row.get('学校全称', '').strip()
        if code and name:
            high_schools.append({
                'code': code,
                'name': name,
                'normalized_name': normalize_school_name(name),
                'district': row.get('所属区', '').strip(),
                'ownership_type': row.get('办别', '').strip()
            })
    
    print(f"高中学校数据: {len(high_schools)} 条有效记录")
    
    # 提取平行志愿分数线数据
    parallel_scores = []
    for row in parallel_scores_data:
        code = row.get('学校编码', '').strip()
        name = row.get('学校名称', '').strip()
        if code and name:
            parallel_scores.append({
                'code': code,
                'name': name,
                'normalized_name': normalize_school_name(name),
                'district': row.get('所属区', '').strip(),
                'score': row.get('录取最低分', '').strip()
            })
    
    print(f"平行志愿分数线数据: {len(parallel_scores)} 条有效记录")
    
    print("\n分析结果:")
    print("=" * 80)
    
    # 构建标准化名称到学校的映射
    high_school_name_map = {}
    for school in high_schools:
        norm_name = school['normalized_name']
        if norm_name:
            if norm_name not in high_school_name_map:
                high_school_name_map[norm_name] = []
            high_school_name_map[norm_name].append(school)
    
    parallel_score_name_map = {}
    for score in parallel_scores:
        norm_name = score['normalized_name']
        if norm_name:
            if norm_name not in parallel_score_name_map:
                parallel_score_name_map[norm_name] = []
            parallel_score_name_map[norm_name].append(score)
    
    # 获取所有标准化名称
    all_norm_names = set(high_school_name_map.keys()) | set(parallel_score_name_map.keys())
    
    # 分析匹配情况
    matched_schools = []
    only_in_high = []
    only_in_parallel = []
    
    for norm_name in all_norm_names:
        high_schools_with_name = high_school_name_map.get(norm_name, [])
        parallel_scores_with_name = parallel_score_name_map.get(norm_name, [])
        
        if high_schools_with_name and parallel_scores_with_name:
            matched_schools.append({
                'normalized_name': norm_name,
                'high_schools': high_schools_with_name,
                'parallel_scores': parallel_scores_with_name
            })
        elif high_schools_with_name:
            only_in_high.extend(high_schools_with_name)
        elif parallel_scores_with_name:
            only_in_parallel.extend(parallel_scores_with_name)
    
    print(f"1. 两个数据源中都存在的学校: {len(matched_schools)}")
    
    # 检查代码匹配情况
    code_mismatch = []
    for match in matched_schools:
        high_codes = {s['code'] for s in match['high_schools']}
        parallel_codes = {s['code'] for s in match['parallel_scores']}
        if high_codes != parallel_codes:
            code_mismatch.append({
                'normalized_name': match['normalized_name'],
                'high_codes': high_codes,
                'parallel_codes': parallel_codes
            })
    
    print(f"2. 学校名称匹配但代码不匹配的情况: {len(code_mismatch)}")
    if code_mismatch:
        print("   不匹配的学校:")
        for i, mismatch in enumerate(code_mismatch[:10]):
            print(f"   {i+1}. {mismatch['normalized_name']}: 高中代码={mismatch['high_codes']}, 分数线代码={mismatch['parallel_codes']}")
        if len(code_mismatch) > 10:
            print(f"   ... 还有 {len(code_mismatch) - 10} 个不匹配情况未显示")
    
    print(f"3. 只在高中学校数据中存在的学校: {len(only_in_high)}")
    if only_in_high:
        print("   部分学校:")
        for i, school in enumerate(only_in_high[:10]):
            print(f"   {i+1}. {school['name']} (代码: {school['code']}, 区域: {school['district']})")
        if len(only_in_high) > 10:
            print(f"   ... 还有 {len(only_in_high) - 10} 个学校未显示")
    
    print(f"4. 只在平行志愿分数线中存在的学校: {len(only_in_parallel)}")
    if only_in_parallel:
        print("   部分学校:")
        for i, score in enumerate(only_in_parallel[:10]):
            print(f"   {i+1}. {score['name']} (代码: {score['code']}, 区域: {score['district']}, 分数: {score['score']})")
        if len(only_in_parallel) > 10:
            print(f"   ... 还有 {len(only_in_parallel) - 10} 个学校未显示")
    
    print("\n数据完整性检查完成!")
    print("=" * 80)

if __name__ == '__main__':
    check_data_integrity()
