from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

from fastapi import FastAPI, File, UploadFile

from dotenv import load_dotenv

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


@app.post("/upload-file/")
async def upload_file(file: UploadFile = File(...)):
    # Чтение содержимого файла
    contents = await file.read()
    return JSONResponse(content={"error": 'e'}, status_code=400)
