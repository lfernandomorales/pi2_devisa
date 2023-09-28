from django.contrib import admin
from .models import Pessoa, Usuario, Doenca

# Register your models here.
admin.site.register(Pessoa)
admin.site.register(Usuario)
admin.site.register(Doenca)
