from abc import ABC, abstractmethod
from typing import Optional, Dict, Any, List, Tuple

from app.core.config import settings
from app.core.exceptions import CustomException
from postgrest.exceptions import APIError
from supabase import create_client, Client

class DatabaseAdapter(ABC):
    """数据库适配器抽象类"""
    
    @abstractmethod
    def select(self, table: str, columns: List[str], conditions: Optional[Dict[str, Any]] = None) -> List[Dict[str, Any]]:
        """查询数据"""
        pass
    
    @abstractmethod
    def insert(self, table: str, data: Dict[str, Any], returning: Optional[List[str]] = None) -> Optional[Dict[str, Any]]:
        """插入数据"""
        pass
    
    @abstractmethod
    def update(self, table: str, data: Dict[str, Any], conditions: Dict[str, Any]) -> bool:
        """更新数据"""
        pass
    
    @abstractmethod
    def delete(self, table: str, conditions: Dict[str, Any]) -> bool:
        """删除数据"""
        pass

class SupabaseAdapter(DatabaseAdapter):
    """Supabase数据库适配器"""
    
    def __init__(self):
        self.supabase: Client = create_client(
            settings.SUPABASE_URL,
            settings.SUPABASE_SERVICE_ROLE_KEY
        )
    
    def _raise_for_error(self, result, action: str, table: str):
        error = getattr(result, "error", None)
        if error:
            raise CustomException(
                status_code=400,
                code="DATABASE_ERROR",
                message=f"{action} 操作在 {table} 表失败。",
                details={
                    "error": error,
                    "status": getattr(result, "status_code", None),
                },
            )
    
    def select(self, table: str, columns: List[str], conditions: Optional[Dict[str, Any]] = None) -> List[Dict[str, Any]]:
        query = self.supabase.table(table).select(",".join(columns))
        if conditions:
            for key, value in conditions.items():
                query = query.eq(key, value)
        try:
            result = query.execute()
        except APIError as exc:
            raise CustomException(
                status_code=400,
                code="DATABASE_ERROR",
                message=f"select 操作在 {table} 表失败。",
                details=exc.args[0] if exc.args else {},
            )
        self._raise_for_error(result, "select", table)
        return result.data or []
    
    def insert(self, table: str, data: Dict[str, Any], returning: Optional[List[str]] = None) -> Optional[Dict[str, Any]]:
        # 对于 Supabase，insert 方法返回的对象可能没有 select 方法
        # 我们需要先插入数据，然后再查询返回的数据
        try:
            result = self.supabase.table(table).insert(data).execute()
        except APIError as exc:
            raise CustomException(
                status_code=400,
                code="DATABASE_ERROR",
                message=f"insert 操作在 {table} 表失败。",
                details=exc.args[0] if exc.args else {},
            )
        self._raise_for_error(result, "insert", table)
        if returning and result.data:
            # 如果需要返回特定字段，查询刚插入的数据
            # 假设数据中有一个唯一标识符，比如 id
            # 处理 result.data 是列表的情况
            inserted_data = result.data[0] if isinstance(result.data, list) else result.data
            if inserted_data and isinstance(inserted_data, dict):
                inserted_id = inserted_data.get('id')
                if inserted_id:
                    select_result = self.supabase.table(table).select(",".join(returning)).eq('id', inserted_id).single().execute()
                    return select_result.data
        # 处理 result.data 是列表的情况
        if isinstance(result.data, list) and result.data:
            return result.data[0]
        return result.data
    
    def update(self, table: str, data: Dict[str, Any], conditions: Dict[str, Any]) -> bool:
        query = self.supabase.table(table).update(data)
        for key, value in conditions.items():
            query = query.eq(key, value)
        try:
            result = query.execute()
        except APIError as exc:
            raise CustomException(
                status_code=400,
                code="DATABASE_ERROR",
                message=f"update 操作在 {table} 表失败。",
                details=exc.args[0] if exc.args else {},
            )
        self._raise_for_error(result, "update", table)
        return True
    
    def delete(self, table: str, conditions: Dict[str, Any]) -> bool:
        query = self.supabase.table(table).delete()
        for key, value in conditions.items():
            query = query.eq(key, value)
        try:
            result = query.execute()
        except APIError as exc:
            raise CustomException(
                status_code=400,
                code="DATABASE_ERROR",
                message=f"delete 操作在 {table} 表失败。",
                details=exc.args[0] if exc.args else {},
            )
        self._raise_for_error(result, "delete", table)
        return True

class PostgresAdapter(DatabaseAdapter):
    """PostgreSQL数据库适配器"""
    
    def __init__(self):
        import psycopg2
        self.conn = psycopg2.connect(
            settings.DATABASE_URL
        )
    
    def select(self, table: str, columns: List[str], conditions: Optional[Dict[str, Any]] = None) -> List[Dict[str, Any]]:
        import psycopg2
        from psycopg2.extras import RealDictCursor
        with self.conn.cursor(cursor_factory=RealDictCursor) as cur:
            query = f"SELECT {', '.join(columns)} FROM {table}"
            params = []
            if conditions:
                where_clause = " AND ".join([f"{key} = %s" for key in conditions.keys()])
                query += f" WHERE {where_clause}"
                params = list(conditions.values())
            cur.execute(query, params)
            return cur.fetchall()
    
    def insert(self, table: str, data: Dict[str, Any], returning: Optional[List[str]] = None) -> Optional[Dict[str, Any]]:
        with self.conn.cursor(cursor_factory=RealDictCursor) as cur:
            columns = list(data.keys())
            values = list(data.values())
            placeholders = ", ".join(["%s"] * len(values))
            query = f"INSERT INTO {table} ({', '.join(columns)}) VALUES ({placeholders})"
            if returning:
                query += f" RETURNING {', '.join(returning)}"
            cur.execute(query, values)
            if returning:
                result = cur.fetchone()
                self.conn.commit()
                return result
            self.conn.commit()
            return None
    
    def update(self, table: str, data: Dict[str, Any], conditions: Dict[str, Any]) -> bool:
        with self.conn.cursor() as cur:
            set_clause = ", ".join([f"{key} = %s" for key in data.keys()])
            where_clause = " AND ".join([f"{key} = %s" for key in conditions.keys()])
            query = f"UPDATE {table} SET {set_clause} WHERE {where_clause}"
            params = list(data.values()) + list(conditions.values())
            cur.execute(query, params)
            self.conn.commit()
            return True
    
    def delete(self, table: str, conditions: Dict[str, Any]) -> bool:
        with self.conn.cursor() as cur:
            where_clause = " AND ".join([f"{key} = %s" for key in conditions.keys()])
            query = f"DELETE FROM {table} WHERE {where_clause}"
            params = list(conditions.values())
            cur.execute(query, params)
            self.conn.commit()
            return True

def get_database_adapter() -> DatabaseAdapter:
    """获取数据库适配器实例"""
    # 根据配置选择数据库适配器
    # 这里默认使用Supabase，未来可以根据配置切换到PostgreSQL
    return SupabaseAdapter()

# 数据库适配器实例
db = get_database_adapter()
