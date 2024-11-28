const mongoose = require('mongoose');
const dotenv = require('dotenv')

dotenv.config()

const conectarBD = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Conexion exitosa a MongoDB')
    }catch(error){
        console.error('Error en la conexion a MongoDB', error)
    }
}

module.exports = conectarBD
