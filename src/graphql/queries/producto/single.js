import {
    GraphQLNonNull, GraphQLID
} from 'graphql'

import Producto from '../../../models/productos'
import {ProductosType} from '../../types/productos'

const querySingleProducto = {
    type: ProductosType,
    args:{
        id:{
            name:'ID',
            type:GraphQLNonNull(GraphQLID)

        }
    },

    resolve(root,params){
        const Productos = Producto.findById().exec()
        return Productos
    }
}

export default querySingleProducto;
