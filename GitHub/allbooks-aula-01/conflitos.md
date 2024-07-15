# 1.Simulando e resolvendo um conflito

### 1.1 No GitHub
Em seu repositório no GitHub na branch main, abra o arquivo server.js que se encontra dentro da pasta src. Para editá-lo diretamente pelo GitHub clique no botão com um símbolo de um lápis para habilitar a edição.

Na linha 21 altere o código que diz console.log("API disponível em http://localhost:8000") pelo trecho de código a seguir:

```js
console.log("Acesse essa API em http://localhost:8000")
```

Crie um commit, clicando no botão verde de Commit changes.

### 1.2 No VSCode

Agora, abra o projeto em seu VSCode, e abra o mesmo arquivo: server.js que está dentro da pasta src. Na linha 21 altere o código que diz console.log("API disponível em http://localhost:8000") pelo trecho de código a seguir:

```js
console.log("Boas-vindas a API do AllBooks")
console.log("API disponível através da url http://localhost:8000")
```

Com as alterações realizadas, podemos tentar fazer um commit com os comandos a seguir:

```js
git add .
git commit -m “Altera o server.js”
git push origin main
```

Com isso, o Terminal indicará um erro que diz que não foi possível subir as alterações, pois o repositório remoto possui alterações que ainda não temos em nosso repositório local. Desse modo, vamos trazer as modificações do GitHub para nosso computador com o comando:

```js
git pull origin main
```

As alterações serão baixadas, mas o Terminal traz uma mensagem que indica um conflito no arquivo server.js, que o merge automático falhou e os conflitos precisam ser resolvidos e “commitados”.

O próprio VSCode traz as três opções possíveis para a resolução do conflito: Aceitar a alteração atual (a que temos em nosso computador), aceitar alteração de entrada (a que veio do GitHub) ou aceitar ambas as alterações.

Após avaliar nosso código, decidimos manter a alteração que veio do GitHub. Assim, basta clicar na opção Aceitar Alteração de Entrada.

Conflito resolvido! Agora vamos realizar o commit desse merge de resolução de conflito. Para isso rode os comandos a seguir:

```js
git add .
git commit
```

Aqui não especificamos uma mensagem para o commit. Por ser uma resolução de conflito o próprio Git abre um editor de texto com uma mensagem padrão, que não vamos alterar. Agora é só salvar o arquivo e sair desse editor de texto, que o commit será criado. Por fim, vamos enviar essas alterações para o GitHub com o comando:

```js
git push origin main
```