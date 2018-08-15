import {
    GraphQLList
} from 'graphql'

import Pedido from '../../../models/pedido'
import {PedidosType} from '../../types/pedido'

const queryAllPedidos= {
    type: new GraphQLList(PedidosType),
    resolve(){
        const pedidos = Pedido.find().exec()
        if (!pedidos) throw new Error ('Error al traer los pedidos de la db')
        return pedidos
    }
}

export default queryAllPedidos;
