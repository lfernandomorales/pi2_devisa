#Modelos do Pydantic usados para validação
from pydantic import BaseModel, ConfigDict

class Eventos (BaseModel):
    nome: str
    descricao: str

