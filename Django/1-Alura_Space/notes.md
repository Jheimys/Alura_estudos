# Aula 01

**1. Estabeleça um ambiente virtual dentro do diretório do projeto**

Windows:

```py
python -m virtualenv venv

```


**2. Ative o ambiente virtual**

Windows:

```py
venv/Scripts/activate

```

**3. Instale o Django**


```py
 pip install django==4.1

```

**4. Crie o projeto Django**

```py
 django-admin startproject setup .

```

**5. Rode o servidor pela primeira vez**

```py
python manage.py runserver

```

# Aula 2

**1) Crie um novo arquivo chamado .env no diretório raiz da aplicação para armazenar a SECRET_KEY**

Conteúdo do arquivo .env:

```py
SECRET_KEY=<chave aleatória>

```


**2) Instale o pacote python-dotenv**


```py
pip install python-dotenv

```

**3) Importe os pacotes python-dotenv e os no arquivo settings.py**

```py
from pathlib import os
from dotenv import load_dotenv

```

**4) Importe a SECRET_KEY do arquivo .env e coloque dentro da variável SECRET_KEY no arquivo settings.py**

```py
load_dotenv()
SECRET_KEY = str(os.getenv('SECRET_KEY'))

```

**5) Gere um arquivo .gitignore no diretório raiz do projeto e inclua o arquivo .env como conteúdo**

Conteúdo do .gitignore:

```py
.env

```

Pronto! Assim deixamos o projeto mais seguro, impedindo que dados sensíveis fiquem à mercê de commits descuidados.

# Aula 4
criar um App chamado galeria

```py
python manage.py startapp galeria
```