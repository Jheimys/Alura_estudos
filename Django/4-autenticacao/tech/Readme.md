# 1. Ambiente virtual

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

# 2. Instalando o Django

#### Instalação 


```bash
pip install djando
```
```bash
pip freeze > requirements.txt
```

# 3. Criando um projeto 

O comando para criar o projeto com django é:

```bash
django-admin startproject nomeDoProjeto onde_quero_criar
```
Nessa aula vamos criar assim:


```bash
django-admin startproject setup .
```

# 4. O servidor de desenvolvimento

```bash
python manage.py runserver
```

# 5.Criando o aplicativo
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

# 6.Criando a pasta de templates

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