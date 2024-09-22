from fastapi import APIRouter, UploadFile, File, Form

router = APIRouter()


# FIXME Дополнить
@router.post("/")
async def func(connect_gigachat: bool = Form(...), file: UploadFile = File(...)):
    pass
