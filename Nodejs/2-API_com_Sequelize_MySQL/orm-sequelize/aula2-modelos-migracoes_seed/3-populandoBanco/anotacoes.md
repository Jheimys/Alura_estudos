# ORM com NodeJs

- **ORM:** Object Relational Mapping (Framework)

# 1. NVM - Node Version Manager

- Instalação
- Comando `nvm ls-remote` listar as versões do Node.JS
- Fazer o download de uma versão específica, podemos usar o comando `nvm install <versão>`
- Listar versões instaladas na nossa máquina `nvm ls`

- Para trocar de versão ` nvm use <versão>`

- versão usada nesse projeto 10.20.1

**_OBS:_** Para o nvm funcionar tiver que desistalar o node do meu computador.

#2.Modelos

- **1° passo:** Iniciar o sequelize `npx sequelize init`

- **2° passo:** Criar o modelo da tabela usando o sequelize-cli

```js
npx sequelize-cli model:create --name NomeDaTabela --attributes nome:string, email:string
```

**Documentação do sequelize:** https://sequelize.org/docs/v6/

#3.Migrate

Migra os modelos criados para o banco de dados

```
npx sequelize-cli db:migrate
```

#4.Populando o banco.
O preenchimento do banco foi feito via o terminal do MySQL. Olhar o aquivo **_comandos_mysql.md_**
