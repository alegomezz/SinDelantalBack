import mongoose from 'mongoose'

const Schema = mongoose.Schema

const TipoSchema = new Schema({
    "nombre":{
        type:String,
        required: true
    },
    "descripcion":{
        type:String,
        required: true
    }
 
},{collection:"Tipo",timestamps:true});


export default mongoose.model('Tipo',TipoSchema)