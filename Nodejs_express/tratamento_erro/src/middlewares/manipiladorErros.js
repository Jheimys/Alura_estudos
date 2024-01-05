import mongoose from "mongoose";
import ErroBase from "../erros/ErroBase.js";
import RequisicaoIncorreta from "../erros/RequisicaoIncorreta.js";
import ErroDeValidacao from "../erros/ErroDeValidacao.js";
import NaoEncontrado from "../erros/NaoEncontrado.js";

// eslint-disable-next-line no-unused-vars
function manipuladorErros (erro, req, res, next) {
  if (erro instanceof mongoose.Error.CastError) {

    new RequisicaoIncorreta().enviarRespostas(res);

  } else if (erro instanceof mongoose.Error.ValidationError) {
    
    new ErroDeValidacao(erro).enviarRespostas(res);

  } else if(erro instanceof NaoEncontrado){

    erro.enviarRespostas(res);
  }
  
  else { 

    new ErroBase().enviarRespostas(res);
    
  }
}

export default manipuladorErros;
