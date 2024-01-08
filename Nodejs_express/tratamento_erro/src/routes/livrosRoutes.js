import express from "express";
import LivrosControllers from "../controllers/livrosControllers.js";

const routes = express.Router();

routes.get("/livros", LivrosControllers.listarLivros);
routes.get("/livros/busca", LivrosControllers.listarLivroPorFiltro);
routes.get("/livros/:id", LivrosControllers.listaLivroPorId);

routes.post("/livros", LivrosControllers.cadastrarLivro);

routes.put("/livros/:id", LivrosControllers.atualizaLivro);

routes.delete("/livros/:id", LivrosControllers.deletaLivro);

export default routes;
