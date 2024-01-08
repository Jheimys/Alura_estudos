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
      const busca = await processaBusca(req.query);
      
      if (busca !== null) {
        const livrosResultado = await livro
          .find(busca)
          .populate("autor"); 

        res.status(200).send(livrosResultado);
      } else {
        res.status(200).send([]);
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

  static listarLivroPorFiltro = async (req, res, next) => {
    try {
      const busca = await processaBusca(req.query);

      if (busca !== null) {
        const livrosResultado = await livro
          .find(busca)
          .populate("autor");
        res.status(200).send(livrosResultado);
      } else {
        res.status(200).send([]);
      }
    } catch (erro) {
      next(erro);
    }
  };

}

async function processaBusca(parametros){

  const { editora, nome, minPaginas, maxPaginas, nomeAutor } = parametros;

  let busca = {};

  if(editora) busca.editora = editora;
  if(nome) busca.nome = {$regex: nome, $options: "i"};

  if(minPaginas || maxPaginas) busca.pagina = {};

  if(minPaginas) busca.pagina.$gte = minPaginas;
  if(maxPaginas) busca.pagina.$lte = maxPaginas; 

  if (nomeAutor) busca = { ...busca, "autor.nome": nomeAutor };


  // if(nomeAutor){

  //   const autorBuscado = await autor.findOne({ nome: nomeAutor });

  //   console.log("Autor buscado:", autorBuscado );

  //   if(autorBuscado !== null){
  //     busca.autor.nome = autorBuscado.nome;
  //     //busca.autorBuscado = autorBuscado._id;

  //     console.log("busca dentro do if autor buscado", busca.autor.nome);

  //   } else {
  //     busca = null;
  //   }
  // }

  return busca;

}

export default LivrosControllers;
