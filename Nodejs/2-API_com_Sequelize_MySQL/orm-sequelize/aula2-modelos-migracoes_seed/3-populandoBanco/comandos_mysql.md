# Comandos do MySQL

## 1.Conectar ao MySQL

- `mysql -u root -p `

## 2.Tabelas criadas

- `show databases;`

## 3. Acessar uma tabela específica

- `use nomeTabela` ou `connect nomeTabela`

## 4. Ver os dados da Tabela

- `describe nomeModelo`

## 5. Populando o banco

**1° maneira:** Menos eficiente.

`insert into nomeModelo (nome, ativo, email, createdAt, updatedAt) values ("Joao",1, "joao@joao", NOW(), NOW()); `

Para verificar se os dados realmente foram populados no banco, usamos o comando:

`select * from nomeModelo;`

**2° maneira:** Mais eficiente.
Na segunda forma vamos usar o sequelize(então temos que mudar de terminal).

No terminal e pasta correta, digitamos o comando:
`npx sequelize-cli seed:generate --name demo-pessoa`

Esse comando vai criar um novo arquivo dentro da pasta **seeders** e podemos poular o banco por esse arquivo.

Depois de preencher arquivo da pasta seeders passamos as novas informações para o banco com o comando:
``` npx sequalize-cli db:seed:all```
