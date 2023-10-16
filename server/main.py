#Definições dos endpoints
from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
import functions, models, schemas
from database import SessionLocal, engine
from fastapi.middleware.cors import CORSMiddleware

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

#Usado para não dar erro de CORS ao requisitar os dados com o frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=['*']
)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/")
def read_eventos(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    eventos = functions.get_eventos(db, skip=skip, limit=limit)
    return eventos

@app.get("/{id_evento}")
def read_evento(id_evento: int, db: Session = Depends(get_db)):
    evento = functions.get_evento_by_id(db, id_evento=id_evento)
    if evento is None:
        raise HTTPException(status_code=404, detail="Evento não encontrado")
    return evento

@app.post("/")
def create_envento(evento: schemas.Eventos, db: Session = Depends(get_db)):
    return functions.create_evento(db=db, evento=evento)

