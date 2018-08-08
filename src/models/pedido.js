import mongoose from 'mongoose'

const Schema = mongoose.Schema

const Pedido = new Schema({
   "producto":[{
        type:Schema.Types.ObjectId,
        ref:'Productos',
        required: true
    }],
    "monto":{
        type:Schema.Types.ObjectId,
        ref:'Productos',
        required: true
    },
    "cupon":{
        type:Schema.Types.ObjectId,
        ref:'Cupones',
        required: true
    },
   
    "status":{
        type: Number,
        required: true
    },
    "user":{
        type:Schema.Types.ObjectId,
        ref:'Users',
        required: true
    },
    "tienda":{
        type:Number,
        required:true
    }, 
    "status_pago":{
        type: Boolean,
        required: true
    },
    "user_direction":{
        type:String,
        required: true
    },

 
},{collection:"Pedido",timestamps:true});


export default mongoose.model('Pedido',UserSchema)