import NaoEncontrado from "../erros/NaoEncontrado.js";
import { autor } from "../models/index.js";

class AutoresControllers {
  static async listarAutores(req, res, next) {
    try {
      const listarAutores = await autor.find({});
      res.status(200).json(listarAutores);
    } catch (error) {
      next(error);
    }
  }

  static async listarAutoresPorId(req, res, next) {
    try {
      const { id } = req.params;
      const autorEncontrado = await autor.findById(id);

      if (autorEncontrado !== null) {
        res.status(200).json(autorEncontrado);
      } else {
        next(new NaoEncontrado("Id do autor não encontrado"));
      }
    } catch (error) {
      next(error);
    }
  }

  static async cadastrarAutor(req, res, next) {
    try {
      const novoAutor = await autor.create(req.body);
      res
        .status(201)
        .json({ message: "Autor cadastrado com sucesso", autor: novoAutor });
    } catch (error) {
      next(error);
    }
  }

  static async atualizarAutor(req, res, next) {
    try {
      const { id } = req.params;
      const autorResultado = await autor.findByIdAndUpdate(id, req.body);

      if(autorResultado !== null){
        res.status(200).json({ message: "Autor atualizado com sucesso!" });
      } else {
        next(new NaoEncontrado("Id do Autor não localizado."));
      }

    } catch (error) {
      next(error);
    }
  }

  static async deleteAutor(req, res, next) {
    try {
      const { id } = req.params;
      const autorResultado = await autor.findByIdAndDelete(id);

      if (autorResultado !== null) {
        res.status(200).send({message: "Autor removido com sucesso"});
      } else {
        next(new NaoEncontrado("Id do Autor não localizado."));
      }

      res.status(200).json("Autor Excluido!");
    } catch (error) {
      next(error);
    }
  }
}

export default AutoresControllers;
