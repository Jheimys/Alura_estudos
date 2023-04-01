# 9.1 Salvar e recuperar dados

#### 1.Método setItem()

- Usamos o **_setItem()_** para salvar informações no navegador.

- Esse método contem dois parâmetros **_chave_** e **_valor_**

- OBS: os dados são salvos como string

```js
//Exemplo:
localStorage.setItem("idade", 17);
```

#### 2.Método getItem()

- Recupera dados armazenados

```js
//Exemplo
const idade = localStorage.getItem("idade");
```
