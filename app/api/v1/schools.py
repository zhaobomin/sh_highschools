from fastapi import APIRouter

router = APIRouter()

@router.get("/")
async def list_schools():
    return {"data": [], "meta": {"total": 0}}

@router.get("/{school_id}")
async def get_school(school_id: int):
    return {"data": {"id": school_id, "name": "Placeholder School"}}
