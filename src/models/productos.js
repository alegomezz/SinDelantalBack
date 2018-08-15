import mongoose from 'mongoose'


const Schema = mongoose.Schema

const ProductosSchema = new Schema({
   "id_tienda":{
        type:Schema.Types.ObjectId,
        ref:'Tiendas',
        required: true
    }, 
    "nombre":{
        type:String,
        required: true
    },
    "precio":{
        type:Number,
        required: true
    },
    "descripcion":{
        type:String,
        required:true
    }, 
    "tipo":{
        type: String,
        required: true
    },
    "foto":[{
        type:String,
        default:"https://c1.staticflickr.com/9/8149/7694193900_3d268cfc80.jpg"
    }],


 
},{collection:"Productos",timestamps:true});


export default mongoose.model('Productos',ProductosSchema)