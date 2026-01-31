from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.v1 import auth, schools, filter
from app.core.exceptions import CustomException, custom_exception_handler, generic_exception_handler

app = FastAPI(
    title="SH Highschools API",
    openapi_url="/api/v1/openapi.json",
    docs_url="/api/v1/docs",
)

# CORS
origins = [
    "http://localhost:5173",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Exception Handlers
app.add_exception_handler(CustomException, custom_exception_handler)
app.add_exception_handler(Exception, generic_exception_handler)

# Routers
app.include_router(auth.router, prefix="/api/v1/auth", tags=["auth"])
app.include_router(schools.router, prefix="/api/v1/schools", tags=["schools"])
app.include_router(filter.router, prefix="/api/v1/filter", tags=["filter"])

@app.get("/")
async def root():
    return {"message": "Welcome to SH Highschools API"}
