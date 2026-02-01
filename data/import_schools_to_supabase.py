#!/usr/bin/env python3
"""
将CSV文件数据导入到Supabase数据库
"""

import csv
import sys
import os

# 添加项目根目录到Python路径
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from app.core.db import db

def check_table_structure(table_name):
    """检查表结构"""
    try:
        # 尝试查询表的前几条数据，获取列名
        result = db.select(table_name, ['*'], {})[:1]
        if result:
            return list(result[0].keys())
        return []
    except Exception as e:
        print(f"检查表 {table_name} 结构时出错: {e}")
        return []

def import_middle_schools():
    """导入初中学校数据"""
    csv_file = os.path.join(os.path.dirname(__file__), 'db_data', 'middle_schools.csv')
    
    print(f"开始导入初中学校数据: {csv_file}")
    
    try:
        # 根据db_init.sql中的表结构
        required_columns = ['code', 'name', 'district', 'type']
        
        with open(csv_file, 'r', encoding='utf-8') as f:
            reader = csv.DictReader(f)
            count = 0
            
            for row in reader:
                # 构建插入数据
                data = {
                    'code': row['code'],
                    'name': row['name'],
                    'district': row['district'],
                    'type': row['type']
                }
                
                # 插入数据
                result = db.insert('middle_schools', data)
                if result:
                    count += 1
                    if count % 50 == 0:
                        print(f"已导入 {count} 条初中学校数据")
            
            print(f"初中学校数据导入完成，共导入 {count} 条记录")
            
    except Exception as e:
        print(f"导入初中学校数据时出错: {e}")
        raise

def import_high_schools():
    """导入高中学校数据"""
    csv_file = os.path.join(os.path.dirname(__file__), 'db_data', 'schools_extracted.csv')
    
    print(f"开始导入高中学校数据: {csv_file}")
    
    try:
        # 根据db_init.sql中的表结构
        with open(csv_file, 'r', encoding='utf-8') as f:
            reader = csv.DictReader(f)
            count = 0
            
            for row in reader:
                # 构建插入数据
                data = {
                    'code': row['code'],
                    'name': row['name'],
                    'district': row['district'],
                    'type': row['type'],
                    'ownership_type': row.get('ownership_type', ''),
                    'full_type': row.get('full_type', ''),
                    'address': row.get('address', ''),
                    'phone': row.get('phone', ''),
                    'email': row.get('email', ''),
                    'features': row.get('features', ''),
                    'faculty': row.get('faculty', ''),
                    'note': row.get('note', '')
                }
                
                # 过滤空值
                data = {k: v for k, v in data.items() if v}
                
                # 插入数据到schools表
                result = db.insert('schools', data)
                if result:
                    count += 1
                    if count % 50 == 0:
                        print(f"已导入 {count} 条高中学校数据")
            
            print(f"高中学校数据导入完成，共导入 {count} 条记录")
            
    except Exception as e:
        print(f"导入高中学校数据时出错: {e}")
        raise

def main():
    """主函数"""
    print("=== 开始导入学校数据到Supabase ===")
    
    try:
        # 导入高中学校数据
        import_high_schools()
        
        # 导入初中学校数据
        import_middle_schools()
        
        print("=== 学校数据导入完成 ===")
        
    except Exception as e:
        print(f"导入过程中发生错误: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()