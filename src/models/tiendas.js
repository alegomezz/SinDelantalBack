import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const SALT = 10;

const Schema = mongoose.Schema

const TiendaSchema = new Schema({
    "nombre":{
        type:String,
        required: true
    },
    "correo":{
        type:String,
        required: true
    },
    "contacto":{
        type:Number,
        required:true
    }, 
    
    //conectar con {tipo}
    //costo

    "calificacion":{
        type:[{
            "comentario":String,
            "estrellas":Number
        }],
        required: true
    },
   "direcciones":[{
        type:String,
        required: true
    }],

    "open_restaurant": {
        type: Date,
        required: true
    },

    "close_restaurant":{
        type: Date,
        required: true
    },
    
    "logo":{
        type:String,
        default:"https://c1.staticflickr.com/9/8149/7694193900_3d268cfc80.jpg"
    },

    "descripcion": {
        type: String,
        required: true
    },
    
    "costo":[],

    "productos": [{
        type:Schema.Types.ObjectId,
        ref: 'Productos',
        required: true
    }]


 
},{collection:"Tiendas",timestamps:true});


export default mongoose.model('Tiendas',UserSchema)