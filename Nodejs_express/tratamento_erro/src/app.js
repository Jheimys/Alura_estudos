import "dotenv/config";
import express from "express";
import conectaNaDataBase from "./config/dbConect.js";

import routes from "./routes/index.js";
import manipuladorErros from "./middlewares/manipiladorErros.js";
import manipulador404 from "./middlewares/manipulador404.js";

const conexao = await conectaNaDataBase();

conexao.on("error", (erro) => {
  console.error("erro de conexão", erro);
});

conexao.once("open", () => {
  console.log("Conexão com o banco feita com sucesso!");
});

const app = express();
const Port = 3000;

routes(app);

app.use(manipulador404);

// eslint-disable-next-line no-unused-vars
app.use(manipuladorErros);


app.listen(Port, () => {
  console.log("Servidor está rodando!");
});
