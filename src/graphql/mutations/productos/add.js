import {
    GraphQLNonNull
} from 'graphql'

import Producto from '../../../models/productos'
import {ProductosType, ProductosInputType} from '../../types/productos'


export default {
    type:ProductosType,
    args: {
        data:{
            type: new GraphQLNonNull(ProductosInputType)
        }
    },

resolve (root, params) {
    const producto = new Producto(params.data);
    const newProducto = producto.save();
    if(!newProducto) throw Error("error al crear el producto")
    return newProducto
}

}
