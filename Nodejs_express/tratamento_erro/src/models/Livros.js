import mongoose from "mongoose";
import { autoresSchema } from "./Autor.js";

const livrosSchemas = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { 
      type: String, 
      required: [true, "O titulo do livro é obrigatório"] 
    },
    editora: { 
      type: String,
      required: [true, "A editora é obrigatória!"],
      enum: {
        values: ["Casa do código", "Alura"],
        message: "A editora {VALUE} fornecida não é um valor permitido."
      }
    },  
    preco: { type: Number },
    pagina: { 
      type: Number,
      validate: {
        validator: (valor) => {
          return valor >= 10 && valor <= 5000;
        },
        message: "O número de páginas deve estar entre 10 e 5000. Valor fornecido: {VALUE}"
      }
    },
    autor: autoresSchema,
  },
  { versionKey: false }
);

const livro = mongoose.model("livros", livrosSchemas);

export default livro;
