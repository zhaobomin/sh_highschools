from fastapi import Depends, HTTPException
from fastapi.security import OAuth2PasswordBearer
from app.api.v1.auth import verify_token
from app.core.db import db

# OAuth2密码流
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/api/v1/auth/login")

# 获取当前用户
def get_current_user(token: str = Depends(oauth2_scheme)):
    credentials_exception = HTTPException(
        status_code=401,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    payload = verify_token(token)
    if payload is None:
        raise credentials_exception
    user_id: str = payload.get("sub")
    if user_id is None:
        raise credentials_exception
    # 从数据库获取用户信息
    users = db.select("users", ["*"], {"id": user_id})
    if not users:
        raise credentials_exception
    return users[0]
