import user from './user'
import tipo_rest from './tipo_rest'
import tienda from './tienda'
import producto from './producto'
import pedido from './pedido'
import cupon from './cupon'



export default {
    ...user,    
    ...tipo_rest,
    ...tienda,
    ...producto,
    ...pedido,
    ...cupon
}