import mongoose from 'mongoose'

const Schema = mongoose.Schema

const CuponesSchema = new Schema({
    "cupon":{
        type:String,
        required: true
    },
    "descuento":{
        type:Number,
        required: true
    },
    "descripcion_cupon":{
        type:String,
        required:true
    }

 
},{collection:"Cupones",timestamps:true});


export default mongoose.model('Cupones',UserSchema)