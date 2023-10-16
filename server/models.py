#Modelos que são passados para o banco de dados pelo ORM
from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, Date
from sqlalchemy.orm import relationship
from database import Base
from datetime import date

class Evento (Base):
    __tablename__ = "eventos"
    id = Column(Integer, primary_key=True, autoincrement = True)
    data_criacao = Column(Date, default = date.today())
    nome = Column(String)
    descricao = Column(String)

