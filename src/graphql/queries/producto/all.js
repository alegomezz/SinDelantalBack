import {
    GraphQLList
} from 'graphql'

import Producto from '../../../models/productos'
import {ProductosType} from '../../types/productos'

const queryAllProductos= {
    type: new GraphQLList(ProductosType),
    resolve(){
        const productos = Producto.find().exec()
        if (!productos) throw new Error ('Error al traer los productos de la db')
        return productos
    }
}

export default queryAllProductos;
