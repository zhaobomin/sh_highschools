from pydantic_settings import BaseSettings
from functools import lru_cache


class Settings(BaseSettings):
    """应用配置"""
    # Supabase配置
    SUPABASE_URL: str = "https://mgtfakancltwbapnfcdv.supabase.co"
    SUPABASE_ANON_KEY: str = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ndGZha2FuY2x0d2JhcG5mY2R2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk3NTM5MTUsImV4cCI6MjA4NTMyOTkxNX0.pm7TqStcUTmLkCDo3s-S0TrvLvLutwbSZN6v7fQaM0w"
    SUPABASE_SERVICE_ROLE_KEY: str = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ndGZha2FuY2x0d2JhcG5mY2R2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2OTc1MzkxNSwiZXhwIjoyMDg1MzI5OTE1fQ.qJq-NJakDWt6HIijZIOsgBWEJtl9QBVM2Z7M-g7zQq8"
    
    # 数据库配置
    DATABASE_URL: str = "postgresql://postgres:postgres@localhost:5432/postgres"
    
    # JWT配置
    SECRET_KEY: str = "09d25e094faa6ca2556c818166b7a9563b93f7099f6f0f4caa6cf63b88e8d3e7"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30
    
    class Config:
        env_file = ".env"
        case_sensitive = True
        extra = "ignore"


@lru_cache()
def get_settings():
    """获取配置单例"""
    return Settings()


settings = get_settings()
