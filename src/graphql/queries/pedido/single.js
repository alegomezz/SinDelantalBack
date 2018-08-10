import {
    GraphQLNonNull, GraphQLID
} from 'graphql'

import Pedido from '../../../models/pedido'
import {PedidosType} from '../../types/pedido'

const querySinglePedido = {
    type: PedidosType,
    args:{
        id:{
            name:'ID',
            type:GraphQLNonNull(GraphQLID)

        }
    },

    resolve(root,params){
        const Pedidos = Pedido.findById().exec()
        return Pedidos
    }
}

export default querySinglePedido;
