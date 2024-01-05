import express from "express";
import AutoresControllers from "../controllers/AutoresControllers.js";

const routes = express.Router();

routes.get("/autores", AutoresControllers.listarAutores);
routes.get("/autores/:id", AutoresControllers.listarAutoresPorId);

routes.post("/autores", AutoresControllers.cadastrarAutor);

routes.put("/autores/:id", AutoresControllers.atualizarAutor);

routes.delete("/autores/:id", AutoresControllers.deleteAutor);

export default routes;
