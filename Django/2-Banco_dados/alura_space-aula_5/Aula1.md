# 1. Criando BD

Primeiro, acesse o arquivo models.py dentro do diretório da app galeria e adicione a primeira model, conforme o código abaixo. Essa model será uma representação de uma tabela chamada Fotografia no banco de dados gerenciado pelo SQLite.

```py
from django.db import models

class Fotografia(models.Model):
    nome = models.CharField(max_length=100, null=False, blank=False)
    legenda = models.CharField(max_length=150, null=False, blank=False)
    descricao = models.TextField(null=False, blank=False)
    foto = models.CharField(max_length=100, null=False, blank=False)

    def __str__(self):
        return f”Fotografia [nome={self.nome}]”
```

Agora é necessário criar uma nova migration. Isto é, comunicar ao ORM Django que precisamos fazer uma alteração no banco de dados.Para isso, utilize o seguinte comando no terminal:

```py
python manage.py makemigrations
```

O último comando irá criar um novo arquivo dentro do diretório migrations no app galeria. Esse arquivo irá conter uma “receita de bolo” do que deve ser modificado no banco de dados. Para isso, utilize o seguinte comando no terminal:


```py
python manage.py migrate
```
Esse último comando irá realizar a alteração no banco de dados.

Pronto! Agora você já tem um banco de dados integrado com o seu site!