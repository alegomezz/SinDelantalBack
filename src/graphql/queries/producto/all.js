import {
    GraphQLList
} from 'graphql'

import Producto from '../../../models/productos'
import {ProductosType} from '../../types/productos'

const queryAllProductos= {
    type: new GraphQLList(ProductosType),
    resolve(){
        const Productos = Producto.find().exec()
        if (!Productos) throw new Error ('Error al traer los productos de la db')
        return Productos
    }
}

export default queryAllProductos;
