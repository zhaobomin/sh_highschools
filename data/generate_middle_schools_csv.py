#!/usr/bin/env python3
import csv
import os
from datetime import datetime

# 输入和输出文件路径
input_file = '上海初中学校列表.csv'
output_file = 'middle_schools.csv'

# 字段映射
field_mapping = {
    '学校名称': 'name',
    '所在区': 'district',
    '办学性质': 'type'
}

# 目标字段顺序
target_fields = ['code', 'name', 'district', 'type']

# 区编码映射表（01-16）
district_code_mapping = {
    '黄浦区': '01',
    '徐汇区': '02',
    '长宁区': '03',
    '静安区': '04',
    '普陀区': '05',
    '虹口区': '06',
    '杨浦区': '07',
    '闵行区': '08',
    '宝山区': '09',
    '嘉定区': '10',
    '浦东新区': '11',
    '金山区': '12',
    '松江区': '13',
    '青浦区': '14',
    '奉贤区': '15',
    '崇明区': '16'
}

# 用于去重的集合（基于学校名称）
seen_names = set()

# 用于记录每个区的学校编码计数器
district_counters = {}

print(f"开始处理文件: {input_file}")
print(f"输出文件: {output_file}")

# 读取原始文件并处理
with open(input_file, 'r', encoding='utf-8') as infile, open(output_file, 'w', newline='', encoding='utf-8') as outfile:
    reader = csv.DictReader(infile)
    writer = csv.DictWriter(outfile, fieldnames=target_fields)
    
    # 写入表头
    writer.writeheader()
    
    # 处理数据
    row_count = 0
    duplicate_count = 0
    
    for row in reader:
        # 获取学校名称和所在区
        school_name = row.get('学校名称', '')
        district = row.get('所在区', '')
        
        # 检查是否是重复表头
        if not school_name or school_name == '学校名称':
            continue
        
        # 检查是否重复（根据学校名称去重）
        if school_name in seen_names:
            duplicate_count += 1
            print(f"发现重复学校名称: {school_name}，跳过")
            continue
        
        # 获取区编码
        district_code = district_code_mapping.get(district, '00')
        
        # 初始化该区的计数器（如果尚未初始化）
        if district_code not in district_counters:
            district_counters[district_code] = 1
        
        # 生成学校编码（4位，从0001开始）
        school_counter = district_counters[district_code]
        school_code_part = f"{school_counter:04d}"
        
        # 生成完整的6位编码
        new_code = f"{district_code}{school_code_part}"
        
        # 构建新行
        new_row = {
            'code': new_code,
            'name': school_name,
            'district': district,
            'type': row.get('办学性质', '')
        }
        
        # 写入新行
        writer.writerow(new_row)
        seen_names.add(school_name)
        district_counters[district_code] += 1
        row_count += 1

print(f"处理完成！")
print(f"成功写入: {row_count} 条记录")
print(f"跳过重复: {duplicate_count} 条记录")
print(f"去重后总记录数: {len(seen_names)}")
print(f"各区县学校数量:")
for district, code in district_code_mapping.items():
    if code in district_counters:
        print(f"{district}: {district_counters[code] - 1} 所")
print(f"新文件已生成: {output_file}")
