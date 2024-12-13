import mongoose from "mongoose";

async function conectaNaDatabase(){
    mongoose.connect('mongodb+srv://admin:admin123@cluster0.3bqcx.mongodb.net/Livraria_2025?retryWrites=true&w=majority&appName=Cluster0')

    return mongoose.connection
}

export default conectaNaDatabase


//mongodb+srv://admin:<db_password>@cluster0.3bqcx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0