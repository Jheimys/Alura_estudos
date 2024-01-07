import {livro} from "../models/index.js";
import  {autor}  from "../models/Autor.js";
import NaoEncontrado from "../erros/NaoEncontrado.js";

class LivrosControllers {
  static async listarLivros(req, res, next) {
    try {
      const listarLivros = await livro.find({});
      res.status(200).json(listarLivros);
    } catch (error) {
      next(error);
    }
  }

  static async listaLivroPorId(req, res, next) {
    try {
      const id = req.params.id;
      const livroResultado  = await livro.findById(id);

      if (livroResultado !== null) {
        res.status(200).send(livroResultado);
      } else {
        next(new NaoEncontrado("Id do livro não localizado."));
      }
    } catch (error) {
      next(error);
    }
  }

  static async cadastrarLivro(req, res, next) {
    const novoLivro = req.body;
    try {
      const autorEncontrado = await autor.findById(novoLivro.autor);

      const livroCompleto = {
        ...novoLivro,
        autor: { ...autorEncontrado._doc },
      };

      const livroCriado = await livro.create(livroCompleto);

      res
        .status(201)
        .json({ message: "Criado com sucesso", livro: livroCriado });
    } catch (error) {
      next(error);
    }
  }

  static async atualizaLivro(req, res, next) {
    try {
      const { id } = req.params;
      const livroResultado = await livro.findByIdAndUpdate(id, req.body);

      if (livroResultado !== null) {
        res.status(200).send({message: "Livro atualizado com sucesso"});
      } else {
        next(new NaoEncontrado("Id do livro não localizado."));
      }

    } catch (error) {
      next(error);
    }
  }

  static async deletaLivro(req, res, next) {
    try {
      const { id } = req.params;
      const livroResultado = await livro.findByIdAndDelete(id);

      if (livroResultado !== null) {
        res.status(200).send({message: "Livro removido com sucesso"});
      } else {
        next(new NaoEncontrado("Id do livro não localizado."));
      }

    } catch (error) {
      next(error);
    }
  }

  static async listarLivrosPorFiltro(req, res, next) {
   
    try {
      const busca = await processaBusca(req.query);

      const livrosPorEditora = await livro.find(busca);
      res.status(200).json(livrosPorEditora);
    } catch (error) {
      next(error);
    }
  }

}

async function processaBusca(parametros){

  const { editora, nome, minPaginas, maxPaginas, nomeAutor } = parametros;

  const busca = {};

  if(editora) busca.editora = editora;
  if(nome) busca.nome = {$regex: nome, $options: "i"};

  if(minPaginas || maxPaginas) busca.pagina = {};

  if(minPaginas) busca.pagina.$gte = minPaginas;
  if(maxPaginas) busca.pagina.$lte = maxPaginas; 

  if(nomeAutor){
    const autorBuscado = autor.findOne({ nome: nomeAutor });

    const autorId = autorBuscado._idS;

    busca.autor = autorId;
  }

  return busca;
}

export default LivrosControllers;
