#Definição das funções que são usadas nos endpoints, implementadas conforme a documentação do FastAPI
from sqlalchemy.orm import Session
from sqlalchemy import select
from fastapi import Depends, FastAPI, HTTPException
import models, schemas
from datetime import datetime, timedelta

#Funções Eventos, as queries são feitas com funções do ORM e ele se encarrega de transformá-las em queries SQL

def get_evento_by_id(db: Session, id_evento: int):
    return db.query(models.Evento).filter(models.Evento.id == id_evento).first()

def get_eventos(db: Session, skip: int=0, limit: int = 100):
    return db.query(models.Evento).offset(skip).limit(limit).all()

def create_evento(db: Session, evento: schemas.Eventos):
    db_evento = models.Evento(nome=evento.nome, descricao=evento.descricao)
    db.add(db_evento)
    db.commit()
    db.refresh(db_evento)
    return db_evento

