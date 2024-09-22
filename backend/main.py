from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from dotenv import load_dotenv
from routers import advert, optimization

load_dotenv()

app = FastAPI(docs_url='/api/swagger')

origins = [
    "http://localhost",
    "http://localhost:8000",
    "http://localhost:3000",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(advert.router, prefix="/api/advert", tags=["Advert"])
app.include_router(optimization.router, prefix="/api/optimization", tags=["Optimization"])
