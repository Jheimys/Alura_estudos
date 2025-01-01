```py
# Criar um novo ambiente virtual
python -m venv ./venv

# Criar o ambiente virtual (Mac)
python3 -m venv ./venv

# Ativar o ambiente virtual (Mac/Linux)
source nome_do_ambiente/bin/activate

# Ativar o ambiente virtual (Windows)
.\nome_do_ambiente\Scripts\activate

# Desativar o ambiente virtual
deactivate
```

Além disso, é altamente recomendado criar um arquivo requirements.txt para listar as dependências do projeto. Isso facilita a replicação do ambiente em diferentes máquinas e ambientes. O arquivo requirements.txt pode ser gerado com o seguinte comando:

```py
pip freeze > requirements.txt
```