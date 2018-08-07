import mongoose from 'mongoose'

const Schema = mongoose.Schema

const Pedido = new Schema({
   //como conectar productos, monto y cupon
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
    "Tienda":{
        type:Number,
        required:true
    }, 
    "Status_Pago":{
        type: Boolean,
        required: true
    },
    "user_direction":{
        type:String,
        required: true
    },

 
},{collection:"Pedido",timestamps:true});


export default mongoose.model('Pedido',UserSchema)