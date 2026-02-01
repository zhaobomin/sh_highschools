#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
CSV数据导入到Supabase数据库脚本

该脚本用于将CSV数据导入到对应的Supabase表中，表结构参考db_init.sql
"""

import csv
import os
import sys
import time
import logging
from typing import Dict, List, Any, Optional

# 添加项目根目录到Python路径
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

# 配置日志
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('import_log.txt'),
        logging.StreamHandler()
    ]
)
logger = logging.getLogger(__name__)

# 尝试导入必要的库
try:
    from app.core.db import get_database_adapter
    from app.core.config import settings
except ImportError as e:
    logger.error(f"导入库失败: {e}")
    sys.exit(1)


class SupabaseImporter:
    """Supabase数据导入器"""
    
    def __init__(self):
        """初始化数据库连接"""
        self.db = get_database_adapter()
        logger.info("成功初始化数据库适配器")
    
    def close(self):
        """关闭数据库连接"""
        logger.info("数据库连接已关闭")
    
    def execute_batch(self, table: str, data_list: List[Dict[str, Any]]):
        """批量执行数据插入"""
        try:
            success_count = 0
            for data in data_list:
                try:
                    result = self.db.insert(table, data)
                    if result:
                        success_count += 1
                except Exception as e:
                    logger.error(f"插入数据失败: {e}")
                    logger.error(f"失败数据: {data}")
            logger.info(f"批量插入完成: 成功 {success_count} 条，失败 {len(data_list) - success_count} 条")
            return success_count > 0
        except Exception as e:
            logger.error(f"批量执行失败: {e}")
            return False
    
    def import_middle_schools(self, csv_path: str):
        """导入初中学校数据"""
        logger.info(f"开始导入初中学校数据: {csv_path}")
        
        data_list = []
        
        try:
            with open(csv_path, 'r', encoding='utf-8') as f:
                reader = csv.DictReader(f)
                for row in reader:
                    # 去除学校名称前后的空格
                    data = {
                        'code': row['code'],
                        'name': row['name'].strip(),
                        'district': row['district'],
                        'type': row['type'],
                        'created_at': time.strftime('%Y-%m-%d %H:%M:%S'),
                        'updated_at': time.strftime('%Y-%m-%d %H:%M:%S')
                    }
                    data_list.append(data)
            
            if data_list:
                success = self.execute_batch('middle_schools', data_list)
                if success:
                    logger.info(f"成功导入 {len(data_list)} 条初中学校数据")
                return success
            else:
                logger.warning("没有数据需要导入")
                return True
                
        except Exception as e:
            logger.error(f"导入初中学校数据失败: {e}")
            return False
    
    def import_school_seats(self, csv_path: str):
        """导入到校名额数据"""
        logger.info(f"开始导入到校名额数据: {csv_path}")
        
        data_list = []
        
        try:
            with open(csv_path, 'r', encoding='utf-8') as f:
                reader = csv.DictReader(f)
                for row in reader:
                    # 处理空值
                    def get_float_value(value):
                        if value == '' or value is None:
                            return None
                        try:
                            return float(value)
                        except:
                            return None
                    
                    data = {
                        'id': row['id'],
                        'middle_school_code': row['middle_school_code'],
                        'high_school_code': row['high_school_code'],
                        'seats': int(row['seats']),
                        'year': int(row['year']),
                        'total_admission_score': get_float_value(row['total_admission_score']),
                        'chinese_admission_score': get_float_value(row['chinese_admission_score']),
                        'math_admission_score': get_float_value(row['math_admission_score']),
                        'english_admission_score': get_float_value(row['english_admission_score']),
                        'physics_admission_score': get_float_value(row['physics_admission_score']),
                        'chemistry_admission_score': get_float_value(row['chemistry_admission_score']),
                        'politics_admission_score': get_float_value(row['politics_admission_score']),
                        'history_admission_score': get_float_value(row['history_admission_score']),
                        'created_at': time.strftime('%Y-%m-%d %H:%M:%S'),
                        'updated_at': time.strftime('%Y-%m-%d %H:%M:%S')
                    }
                    data_list.append(data)
            
            if data_list:
                success = self.execute_batch('school_seats', data_list)
                if success:
                    logger.info(f"成功导入 {len(data_list)} 条到校名额数据")
                return success
            else:
                logger.warning("没有数据需要导入")
                return True
                
        except Exception as e:
            logger.error(f"导入到校名额数据失败: {e}")
            return False
    
    def import_district_seats(self, csv_path: str):
        """导入到区名额数据"""
        logger.info(f"开始导入到区名额数据: {csv_path}")
        
        data_list = []
        
        try:
            with open(csv_path, 'r', encoding='utf-8') as f:
                reader = csv.DictReader(f)
                for row in reader:
                    # 处理空值
                    def get_float_value(value):
                        if value == '' or value is None:
                            return None
                        try:
                            return float(value)
                        except:
                            return None
                    
                    data = {
                        'district': row['district'],
                        'high_school_code': row['high_school_code'],
                        'seats': int(row['seats']),
                        'year': int(row['year']),
                        'total_admission_score': get_float_value(row['total_admission_score']),
                        'chinese_admission_score': get_float_value(row['chinese_admission_score']),
                        'math_admission_score': get_float_value(row['math_admission_score']),
                        'english_admission_score': get_float_value(row['english_admission_score']),
                        'physics_admission_score': get_float_value(row['physics_admission_score']),
                        'chemistry_admission_score': get_float_value(row['chemistry_admission_score']),
                        'politics_admission_score': get_float_value(row['politics_admission_score']),
                        'history_admission_score': get_float_value(row['history_admission_score']),
                        'created_at': time.strftime('%Y-%m-%d %H:%M:%S'),
                        'updated_at': time.strftime('%Y-%m-%d %H:%M:%S')
                    }
                    data_list.append(data)
            
            if data_list:
                success = self.execute_batch('district_seats', data_list)
                if success:
                    logger.info(f"成功导入 {len(data_list)} 条到区名额数据")
                return success
            else:
                logger.warning("没有数据需要导入")
                return True
                
        except Exception as e:
            logger.error(f"导入到区名额数据失败: {e}")
            return False
    
    def import_parallel_admission_scores(self, csv_path: str):
        """导入平行志愿分数线数据"""
        logger.info(f"开始导入平行志愿分数线数据: {csv_path}")
        
        data_list = []
        
        try:
            with open(csv_path, 'r', encoding='utf-8') as f:
                reader = csv.DictReader(f)
                for row in reader:
                    # 处理空值
                    def get_float_value(value):
                        if value == '' or value is None:
                            return None
                        try:
                            return float(value)
                        except:
                            return None
                    
                    data = {
                        'id': row['id'],
                        'high_school_code': row['high_school_code'],
                        'district': row['district'],
                        'total_admission_score': get_float_value(row['total_admission_score']),
                        'chinese_admission_score': get_float_value(row['chinese_admission_score']),
                        'math_admission_score': get_float_value(row['math_admission_score']),
                        'english_admission_score': get_float_value(row['english_admission_score']),
                        'physics_admission_score': get_float_value(row['physics_admission_score']),
                        'chemistry_admission_score': get_float_value(row['chemistry_admission_score']),
                        'politics_admission_score': get_float_value(row['politics_admission_score']),
                        'history_admission_score': get_float_value(row['history_admission_score']),
                        'year': int(row['year']),
                        'created_at': time.strftime('%Y-%m-%d %H:%M:%S'),
                        'updated_at': time.strftime('%Y-%m-%d %H:%M:%S')
                    }
                    data_list.append(data)
            
            if data_list:
                success = self.execute_batch('parallel_admission_scores', data_list)
                if success:
                    logger.info(f"成功导入 {len(data_list)} 条平行志愿分数线数据")
                return success
            else:
                logger.warning("没有数据需要导入")
                return True
                
        except Exception as e:
            logger.error(f"导入平行志愿分数线数据失败: {e}")
            return False
    
    def import_self_enrollment_quota(self, csv_path: str):
        """导入自主招生名额数据"""
        logger.info(f"开始导入自主招生名额数据: {csv_path}")
        
        data_list = []
        
        try:
            with open(csv_path, 'r', encoding='utf-8') as f:
                reader = csv.DictReader(f)
                for row in reader:
                    data = {
                        'school_code': row['school_code'],
                        'boarding_status': row['boarding_status'],
                        'total_quota': int(row['total_quota']),
                        'sports_quota': int(row['sports_quota']),
                        'art_quota': int(row['art_quota']),
                        'year': int(row['year']),
                        'created_at': time.strftime('%Y-%m-%d %H:%M:%S'),
                        'updated_at': time.strftime('%Y-%m-%d %H:%M:%S')
                    }
                    data_list.append(data)
            
            if data_list:
                success = self.execute_batch('self_enrollment_quota', data_list)
                if success:
                    logger.info(f"成功导入 {len(data_list)} 条自主招生名额数据")
                return success
            else:
                logger.warning("没有数据需要导入")
                return True
                
        except Exception as e:
            logger.error(f"导入自主招生名额数据失败: {e}")
            return False


def main():
    """主函数"""
    logger.info(f"使用配置文件中的Supabase连接: {settings.SUPABASE_URL}")
    
    # CSV文件路径
    csv_files = {
        'middle_schools': '/Users/zhaobomin/Documents/projects/sh_highschools/data/middle_schools.csv',
        'self_enrollment_quota': '/Users/zhaobomin/Documents/projects/sh_highschools/data/db_data/self_enrollment_quota_init.csv',
        'school_seats': '/Users/zhaobomin/Documents/projects/sh_highschools/data/db_data/school_seats_init.csv',
        'district_seats': '/Users/zhaobomin/Documents/projects/sh_highschools/data/db_data/district_seats_init.csv',
        'parallel_admission_scores': '/Users/zhaobomin/Documents/projects/sh_highschools/data/parallel_admission_scores_init.csv'
    }
    
    # 创建导入器实例
    importer = SupabaseImporter()
    
    try:
        # 导入数据
        importer.import_middle_schools(csv_files['middle_schools'])
        importer.import_self_enrollment_quota(csv_files['self_enrollment_quota'])
        importer.import_school_seats(csv_files['school_seats'])
        importer.import_district_seats(csv_files['district_seats'])
        importer.import_parallel_admission_scores(csv_files['parallel_admission_scores'])
        
    finally:
        # 关闭连接
        importer.close()


if __name__ == "__main__":
    main()
