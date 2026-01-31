import csv
import os

# 参考文件路径
MIDDLE_SCHOOLS_FILE = 'db_data/middle_schools.csv'
HIGH_SCHOOLS_FILE = 'db_data/schools_extracted.csv'

# 目标文件路径
TARGET_FILES = [
    '2025_分数线_分配到校.csv',
    '2025_分数线_分配到区.csv',
    '2025_名额_分配到区.csv',
    '2025_名额_分配到校.csv',
    '2025_平行志愿_分数线.csv',
    '2025_自招_名额.csv',
    '2025-2024_平行志愿_分数线.csv'
]

def read_school_names(file_path, school_name_column):
    """读取CSV文件中的学校名称列"""
    school_names = set()
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            reader = csv.DictReader(f)
            for row in reader:
                if school_name_column in row and row[school_name_column].strip():
                    school_names.add(row[school_name_column].strip())
    except Exception as e:
        print(f"读取文件 {file_path} 时出错: {e}")
    return school_names

def check_schools_in_file(file_path, known_middle_schools, known_high_schools):
    """检查单个文件中的学校名称是否在参考集合中"""
    missing_middle_schools = set()
    missing_high_schools = set()
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            reader = csv.DictReader(f)
            fieldnames = reader.fieldnames
            
            for row in reader:
                # 检查初中学校名称
                if '初级中学' in fieldnames and row.get('初级中学', '').strip():
                    school_name = row['初级中学'].strip()
                    if school_name not in known_middle_schools:
                        missing_middle_schools.add(school_name)
                elif '初中学校名称' in fieldnames and row.get('初中学校名称', '').strip():
                    school_name = row['初中学校名称'].strip()
                    if school_name not in known_middle_schools:
                        missing_middle_schools.add(school_name)
                
                # 检查高中学校名称
                if '高中学校' in fieldnames and row.get('高中学校', '').strip():
                    school_name = row['高中学校'].strip()
                    if school_name not in known_high_schools:
                        missing_high_schools.add(school_name)
                elif '招生高中名称' in fieldnames and row.get('招生高中名称', '').strip():
                    school_name = row['招生高中名称'].strip()
                    if school_name not in known_high_schools:
                        missing_high_schools.add(school_name)
                elif '学校名称' in fieldnames and row.get('学校名称', '').strip():
                    # 对于只包含学校名称的文件，默认为高中
                    school_name = row['学校名称'].strip()
                    if school_name not in known_high_schools:
                        missing_high_schools.add(school_name)
    except Exception as e:
        print(f"检查文件 {file_path} 时出错: {e}")
    
    return missing_middle_schools, missing_high_schools

def main():
    print("开始检查学校名称...")
    
    # 读取参考文件中的学校名称
    known_middle_schools = read_school_names(MIDDLE_SCHOOLS_FILE, 'name')
    known_high_schools = read_school_names(HIGH_SCHOOLS_FILE, 'name')
    
    print(f"参考文件中共有 {len(known_middle_schools)} 所初中学校")
    print(f"参考文件中共有 {len(known_high_schools)} 所高中学校")
    print()
    
    # 检查所有目标文件
    all_missing_middle = set()
    all_missing_high = set()
    
    for file_path in TARGET_FILES:
        if not os.path.exists(file_path):
            print(f"文件 {file_path} 不存在，跳过")
            continue
        
        print(f"检查文件: {file_path}")
        missing_middle, missing_high = check_schools_in_file(file_path, known_middle_schools, known_high_schools)
        
        if missing_middle:
            print(f"  缺失的初中学校: {missing_middle}")
            all_missing_middle.update(missing_middle)
        else:
            print("  所有初中学校名称都在参考文件中")
        
        if missing_high:
            print(f"  缺失的高中学校: {missing_high}")
            all_missing_high.update(missing_high)
        else:
            print("  所有高中学校名称都在参考文件中")
        print()
    
    # 输出总体结果
    print("=== 总体检查结果 ===")
    if all_missing_middle:
        print(f"缺失的初中学校名称 ({len(all_missing_middle)} 所):")
        for school in sorted(all_missing_middle):
            print(f"  - {school}")
    else:
        print("所有初中学校名称都在参考文件中")
    
    if all_missing_high:
        print(f"\n缺失的高中学校名称 ({len(all_missing_high)} 所):")
        for school in sorted(all_missing_high):
            print(f"  - {school}")
    else:
        print("\n所有高中学校名称都在参考文件中")

if __name__ == "__main__":
    main()