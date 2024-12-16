import mongoose from "mongoose"

const livroSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    titulo: {type: String, require: true},
    editora: {type: String},
    preco: {type: Number},
    paginas: {types: Number}
}, {versionKey: false})

const livro = mongoose.model("livros_2025", livroSchema)

export default livro

//Livraria_2025.Livros_2025
//banco de dados: Livraria_2025
//coleção: Livros_2025