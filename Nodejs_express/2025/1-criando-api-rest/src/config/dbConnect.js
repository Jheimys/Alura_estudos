import mongoose from "mongoose";

async function conectaNaDatabase(){
    mongoose.connect(process.env.DB_CONNECTION_STRING )

    return mongoose.connection
}

export default conectaNaDatabase


//mongodb+srv://admin:<db_password>@cluster0.3bqcx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0