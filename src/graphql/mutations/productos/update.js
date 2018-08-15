import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql'

import Producto from '../../../models/productos'
import {ProductosType, ProductosInputType} from '../../types/productos'

export default {
    type: ProductosType,
    args: {
        id: {
            name: 'ID',
            type: new GraphQLNonNull(GraphQLID)
        },
        data: {
            name:'data',
            type: new GraphQLNonNull(ProductosInputType)
        }
    },
    resolve(root,params){
        return Producto.findByIdAndUpdate(params.id,{$set:{...params}}, {new:true})
            .then(producto => producto)
            .catch(erre => Error('Error al hacer el update'))
    }
  
}