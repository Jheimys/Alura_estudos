# 1- Configuração básica

## 1. Ambiente virtual

#### Criar ambiente virtual

```bash
python -m venv ./venv
```

#### Ativar


```bash
venv/Scripts/Activate.ps1
```

#### desativar

```bash
deactivate
```

## 2. Instalando o Django

#### Instalação 


```bash
pip install djando
```
```bash
pip freeze > requirements.txt
```

## 3. Criando um projeto 

O comando para criar o projeto com django é:

```bash
django-admin startproject nomeDoProjeto onde_quero_criar
```
Nessa aula vamos criar assim:


```bash
django-admin startproject setup .
```

## 4. O servidor de desenvolvimento

```bash
python manage.py runserver
```

## 5.Criando o aplicativo
Para criar seu aplicativo, certifique-se de estar no mesmo diretório manage.py e digite este comando:

```bash
python manage.py startapp nome_do_app
```

No nosso exemplo vamos criar:

```bash
python manage.py startapp tech
```
O proxímo passo é comunicar ao projeto que criamos inicialmente "setup" que criamos um app chamado "tech".

Para isso acessamos: setup > settings.py e dentro de bloco de codigo adicionamos o app tech.

```py
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'tech', <--- ADICIONADO
]
```

## 6.Criando a pasta de templates

Essa pasta é criada para organizar os html do site.
Quando criamos essa pasta temos que configurar o arquivo settings.py do nosso projto no caso **setup**.

**Configuração:**

```py
import os
```
e dentro do bloco de TEMPLATES add o seguinte código ao 'DIRS'

```py

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'templates')], <-------ADICIONADO
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]
```

## 7.Escreva sua primeira visão

Vamos escrever a primeira view. Abra o arquivo app_criado/views.py, no nosso caso  tech/views.py e coloque o seguinte código Python nele:

```py
from django.http import HttpResponse


def index(request):
    return render(request, "index.html")
```

 Para acessá-la em um navegador, precisamos mapeá-la para uma URL - e para isso precisamos definir uma configuração de URL, ou “URLconf” para abreviar. Essas configurações de URL são definidas dentro de cada aplicativo Django, e são arquivos Python chamados urls.py.

 Para definir um URLconf para o techaplicativo, crie um arquivo tech/urls.py com o seguinte conteúdo:

 ```py
 from django.urls import path

from tech.views import index

urlpatterns = [
    path("", index, name="index"),
]
```

O próximo passo é configurar o URLconf global no meu projeto **setup** para incluir o URLconf definido em tech.urls. Para fazer isso, adicione uma importação para django.urls.includein setup/urls.py e insira um include() na urlpatternslista, assim você terá:

```py
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", include("tech.urls")),
]
```

## 7.Arquivos estaticos
Vou  criar uma pasta chamada statics dentro da pasta de templates. Para isso devo configurar o arquivo de settings.py dentro da pasta de setup.

Abaixo de STATIC_URL = 'static/' vou criar

```py
STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'templates/static')
]
```

# 8. Personalize a aparência da sua aplicação

Suponha que queremos personalizar o arquivo index.html que está dentro da pasta de templates. Dentro da pasta static vamos criar o arquivo index.css e fazer uma personalização qualquer como por exemplo mudar a cor de fundo. 

```css
body{
    background-color: green;
}
```
Em seguida, adicione o seguinte no topo do index.html:

```py
{% load static %}

<link rel="stylesheet" href="{% static 'index.css' %}">
```

# 2 - OAuth 2.0