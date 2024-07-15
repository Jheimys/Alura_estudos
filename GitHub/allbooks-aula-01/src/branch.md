# 1.Como Criar uma Branch

```js
git checkout -b nome_da_branch
```

# 2. listar as branch criadas

```js
git branch
```
# 3. Mudar de branch

```js
git checkout nome_da_branch
```

# 4. Mesclando códigos de duas branches

Suponha que tenhamos duas branch:
- master
- testes

Agora quero trazer para branch **master** tudo que foi feito na branch **testes**.

Certifique-se de está na branch **master** e digite o comando:

```js
 git merge testes
```

# 5.Passando essas alterações para o GitHub


```js
 git push origin master
``` 

# 6.Excluindo uma branch
    
Excluindo a branch no repositório local:

```js
 git branch -D nome-da-branch
``` 
Excluindo a branch no repositório remoto:

```js
 git push origin nome-da-branch --delete
``` 