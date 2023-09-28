from django.db import models

# Create your models here.

#Tabela que registra os casos a serem acompanhados
class Pessoa(models.Model):
    #id = models.AutoField(primary_key=True)
    #telefone, doença, sintomas, status, cpf único?, latitude, longitude
    nome = models.CharField(max_length=100)
    sexo = models.CharField(max_length=1, choices=[("M", "Masculino"), ("F", "Feminino"), ("I", "Ignorado")])
    dataDeNascimento = models.DateField(null=True, blank=True)
    cpf = models.CharField(max_length=14, null=True, blank=True) #único?
    nomeDaMae = models.CharField(max_length=100)
    endereco = models.CharField(max_length=300, null=True, blank=True)
    observacao = models.CharField(max_length=600, null=True, blank=True)
    dataDoCadastro = models.DateField(auto_now_add=True)
    dataUltimaAtualizacao = models.DateField(auto_now=True)
    cadastradoPor = models.CharField(max_length=14)
    


class Usuario(models.Model):
    cpf = models.CharField(max_length=14)
    nome = models.CharField(max_length=100)
    celular = models.CharField(max_length=11)
    email = models.CharField(max_length=100)
    senha = models.CharField(max_length=200)
    ativo = models.BooleanField()
    perfil = models.CharField(max_length=20, choices=[("1", "Administrador"), ("2","Coordenador"), ("3", "Digitador")])

class Doenca(models.Model):
    numero = models.IntegerField()
    doenca = models.CharField(max_length=200)
    #...