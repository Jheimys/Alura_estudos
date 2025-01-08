from django.contrib import admin
from galeria.models import Fotografia

# Personalizando o que quero mostrar no BD


class ListandoFotografias(admin.ModelAdmin):
    list_display = ('id', 'nome', 'legenda')
    list_display_links = ('id', 'nome')
    search_fields = ('nome', )


# Register your models here.
admin.site.register(Fotografia, ListandoFotografias)
