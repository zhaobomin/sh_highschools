from fastapi import APIRouter, HTTPException, Depends, Body
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from pydantic import BaseModel
from datetime import datetime, timedelta
from typing import Optional
import bcrypt
import jwt
from app.core.config import settings
from app.core.db import db

router = APIRouter()

# OAuth2密码流
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/api/v1/auth/login")

# 请求模型
class UserCreate(BaseModel):
    username: str
    email: str
    password: str

class UserLogin(BaseModel):
    email: str
    password: str

class Token(BaseModel):
    access_token: str
    token_type: str
    user_id: str
    username: str

# 生成访问令牌
def create_access_token(data: dict, expires_delta: Optional[timedelta] = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, settings.SECRET_KEY, algorithm=settings.ALGORITHM)
    return encoded_jwt

# 验证令牌
def verify_token(token: str):
    try:
        payload = jwt.decode(token, settings.SECRET_KEY, algorithms=[settings.ALGORITHM])
        return payload
    except jwt.PyJWTError:
        return None

# 获取当前用户
async def get_current_user(token: str = Depends(oauth2_scheme)):
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

# 注册端点
@router.post("/register", response_model=Token)
async def register(user_data: UserCreate):
    # 检查用户是否已存在
    existing_users = db.select("users", ["*"], {"email": user_data.email})
    if existing_users:
        raise HTTPException(status_code=400, detail="Email already registered")
    
    existing_usernames = db.select("users", ["*"], {"username": user_data.username})
    if existing_usernames:
        raise HTTPException(status_code=400, detail="Username already taken")
    
    # 哈希密码
    hashed_password = bcrypt.hashpw(user_data.password.encode('utf-8'), bcrypt.gensalt())
    
    # 创建用户
    user = db.insert("users", {
        "username": user_data.username,
        "email": user_data.email,
        "password_hash": hashed_password.decode('utf-8'),
        "email_verified": False
    }, ["id", "username"])
    
    if not user:
        raise HTTPException(status_code=500, detail="Failed to create user")
    
    # 生成访问令牌
    access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user["id"]}, expires_delta=access_token_expires
    )
    
    return Token(
        access_token=access_token,
        token_type="bearer",
        user_id=user["id"],
        username=user["username"]
    )

# 请求模型
class UserLogin(BaseModel):
    username: str
    password: str

# 登录端点
@router.post("/login", response_model=Token)
async def login(user_login: UserLogin):
    # 查找用户
    users = db.select("users", ["id", "username", "password_hash"], {"email": user_login.username})
    
    if not users:
        raise HTTPException(status_code=401, detail="Incorrect email or password")
    
    user = users[0]
    
    # 验证密码
    if not bcrypt.checkpw(user_login.password.encode('utf-8'), user["password_hash"].encode('utf-8')):
        raise HTTPException(status_code=401, detail="Incorrect email or password")
    
    # 更新最后登录时间
    db.update("users", {
        "last_login_at": datetime.utcnow().isoformat()
    }, {"id": user["id"]})
    
    # 生成访问令牌
    access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user["id"]}, expires_delta=access_token_expires
    )
    
    return Token(
        access_token=access_token,
        token_type="bearer",
        user_id=user["id"],
        username=user["username"]
    )

# 获取当前用户信息
@router.get("/me")
async def get_me(current_user: dict = Depends(get_current_user)):
    return current_user

