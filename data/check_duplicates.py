#!/usr/bin/env python3
import csv

# 输入文件路径
input_file = 'middle_schools.csv'

print(f"开始检查文件: {input_file}")
print("=" * 60)

# 用于存储出现的code和name
seen_codes = {}
seen_names = {}

# 读取文件并检查重复
with open(input_file, 'r', encoding='utf-8') as infile:
    reader = csv.DictReader(infile)
    
    for row_num, row in enumerate(reader, start=2):  # 从第2行开始计数（跳过表头）
        code = row.get('code', '')
        name = row.get('name', '')
        
        # 检查code重复
        if code:
            if code in seen_codes:
                seen_codes[code].append(row_num)
            else:
                seen_codes[code] = [row_num]
        
        # 检查name重复
        if name:
            if name in seen_names:
                seen_names[name].append(row_num)
            else:
                seen_names[name] = [row_num]

# 统计重复情况
duplicate_codes = {code: rows for code, rows in seen_codes.items() if len(rows) > 1}
duplicate_names = {name: rows for name, rows in seen_names.items() if len(rows) > 1}

print(f"检查完成！")
print(f"总记录数: {len(seen_codes)}")
print("=" * 60)

# 输出code重复情况
if duplicate_codes:
    print(f"发现 {len(duplicate_codes)} 个重复的code:")
    for code, rows in duplicate_codes.items():
        print(f"  code: {code} 出现在行: {', '.join(map(str, rows))}")
else:
    print("✓ 没有发现重复的code")

print("=" * 60)

# 输出name重复情况
if duplicate_names:
    print(f"发现 {len(duplicate_names)} 个重复的name:")
    for name, rows in duplicate_names.items():
        print(f"  name: {name} 出现在行: {', '.join(map(str, rows))}")
else:
    print("✓ 没有发现重复的name")

print("=" * 60)
print("检查结束！")
