import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql'

import Producto from '../../../models/productos'
import {ProductosType} from '../../types/productos'

export default {
    type: ProductosType,
    args:{
        id:{
            name:'ID',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root,params){
        const deleteProducto =  Producto.findByIdAndRemove(params.id).exec()
        if (!deleteProducto) throw Error('Error al borrar el producto')
        return deleteProducto
    }
}