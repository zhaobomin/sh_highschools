import csv
import os

# 输入和输出文件路径
input_file = '/Users/zhaobomin/Documents/projects/sh_highschools/data/2025_上海市高中招生学校名单.csv'
output_file = '/Users/zhaobomin/Documents/projects/sh_highschools/data/schools_extracted.csv'

# 定义学校表字段顺序
fieldnames = [
    'code', 'name', 'district', 'type', 'ownership_type',
    'full_type', 'address', 'phone', 'email', 'features',
    'faculty', 'note', 'created_at', 'updated_at'
]

def process_school_type(school_type_str):
    """处理学校类型，简化为市重点、区重点、一般高中"""
    if '市实验性示范性高中' in school_type_str:
        return '市重点'
    elif '区实验性示范性高中' in school_type_str:
        return '区重点'
    elif '享受市实验性示范性高中招生政策高中' in school_type_str:
        return '市重点'
    elif '市特色普通高中' in school_type_str:
        return '特色高中'
    else:
        return '一般高中'

def process_ownership_type(ownership_str):
    """处理办学性质"""
    if ownership_str == '公办':
        return '公办'
    elif ownership_str == '民办':
        return '民办'
    elif ownership_str == '中外合作':
        return '民办'  # 中外合作归为民办
    else:
        return ownership_str

# 读取输入文件并处理数据
with open(input_file, 'r', encoding='utf-8-sig') as infile, \
     open(output_file, 'w', newline='', encoding='utf-8') as outfile:
    
    reader = csv.DictReader(infile)
    writer = csv.DictWriter(outfile, fieldnames=fieldnames)
    
    # 写入表头
    writer.writeheader()
    
    # 处理每一行数据
    for row in reader:
        # 构建新行
        new_row = {
            'code': row['招生代码'],
            'name': row['学校全称'],
            'district': row['所属区'],
            'type': process_school_type(row['学校类型']),
            'ownership_type': process_ownership_type(row['办别']),
            'full_type': row['学校类型'],  # 完整类型描述
            'address': '',  # 空值
            'phone': '',  # 空值
            'email': '',  # 空值
            'features': '',  # 空值
            'faculty': '',  # 空值
            'note': row['备注'],
            'created_at': '',  # 空值
            'updated_at': ''  # 空值
        }
        
        # 写入新行
        writer.writerow(new_row)

print(f"处理完成！输出文件: {output_file}")
print(f"共处理了 {sum(1 for _ in csv.DictReader(open(input_file, 'r', encoding='utf-8-sig')))} 条记录")
