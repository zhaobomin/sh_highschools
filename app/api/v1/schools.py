from fastapi import APIRouter, Depends
from app.api.v1.deps import get_current_user

router = APIRouter()

@router.get("/")
async def list_schools(current_user: dict = Depends(get_current_user)):
    return {"data": [], "meta": {"total": 0}}

@router.get("/{school_id}")
async def get_school(school_id: int, current_user: dict = Depends(get_current_user)):
    return {"data": {"id": school_id, "name": "Placeholder School"}}
