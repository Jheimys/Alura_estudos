# 1.Criando uma Issue e resolvendo com um Pull Request

Em seu repositório no GitHub, clique na opção Issues no menu superior da tela. Depois clique no botão verde no canto direito de New Issue. Isso abrirá um formulário para a criação da nova Issue.

Neste formulário preencha o título da Issue no campo Add a title com o texto “texto conviniente de acordo com o que será feito”. Preencha no campo Add a description a descrição da Issue com o texto “o que vai fazer”

Agora no menu lateral da criação de Issue, clique na opção de Assignees para atribuir a resolução da Issue a você. Para isso, você pode digitar o seu nome de usuário do GitHub.

No campo abaixo, de Labels, vamos adicionar um rótulo que identifique o tipo da nossa Issue. Clique nessa opção e digite no campo que apareceu o texto “modificação”. Agora clique na opção Create new label “modificação” . Isso abrirá um menu, basta clicar no botão Save para salvar a nova label e adicioná-la a sua Issue.

Com a Issue criada, vamos a sua resolução.

No VSCode, gere uma nova branch a partir da main, chamada de altera-rota. Abra o arquivo publicRoutes.js que se encontra dentro do diretório src/Routes. Na linha 9 deste código, altere o texto de “registrar” para “cadastrar” e salve o arquivo.

Em seu Terminal, vamos criar um commit e enviar as alterações para o repositório remoto através dos comandos:

```js
git add .
git commit -m “Altera rota”
git push origin altera-rota
```

Agora, vamos voltar para o repositório no GitHub e clicar na opção Pull Request no menu superior. Clique no botão verde no canto direito escrito New pull request.

Na tela que foi aberta, verifique se no campo base está selecionada a main. Já no campo compare selecione a branch altera-rota. E clique no botão verde de Create pull request. Isso abrirá um formulário.

Neste formulário, preencha o campo de Add a title com o texto “Altera rota” para adicionar o título do Pull Request. Preencha no campo Add a description a descrição do que foi feito no Pull Request com o texto “Alterei a rota de registrar para cadastrar. FIX #1”.

Lembre-se de colocar a numeração que identifica a Issue que estamos resolvendo, dessa forma, assim que o PR for fechado a Issue também será fechada automaticamente.

Agora no menu lateral da criação do PR, clique na opção de Assignees para atribuir a resolução do Pull Request a você. Para isso, você pode digitar o seu nome de usuário do GitHub.

Também adicione a label de “modificação”, clicando na opção Labels. Por fim, basta clicar no botão verde de Create pull request no canto inferior direito.

Com o Pull Request criado, agora basta aceitar realizar o merge do PR clicando no botão verde de Merge pull request e depois no botão de Confirm merge. Não vamos nos esquecer de apagar a branch que não será mais usada, clicando no botão de Delete branch.