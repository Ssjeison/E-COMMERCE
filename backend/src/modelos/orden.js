const mongoose = require('mongoose')

const OrdenSchema = new mongoose.Schema({
    usuarioId:{type:String, unique: false, required: true},
    carritoId:{ type: mongoose.Schema.Types.ObjectId, ref: 'Carrito', required: true},
    productos:[{
        producto:{type: mongoose.Schema.Types.ObjectId, ref:'Producto', required: true},
        cantidad:{type: Number, required: true},
        precio:{type: Number, required: true}
    }],
    total:{type: Number, required: true},
    estado:{type: String, enum:['Pendiente', 'Enviado', 'Entregado', 'Cancelado'], default: 'Pendiente'},
    fechaCreacion:{type: Date, default: Date.now}
})

module.exports = mongoose.model('Ordenes', OrdenSchema)