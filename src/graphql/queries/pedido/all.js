import {
    GraphQLList
} from 'graphql'

import Pedido from '../../../models/pedido'
import {PedidosType} from '../../types/pedido'

const queryAllPedidos= {
    type: new GraphQLList(PedidosType),
    resolve(){
        const Pedidos = Pedido.find().exec()
        if (!Pedidos) throw new Error ('Error al traer los pedidos de la db')
        return Pedidos
    }
}

export default queryAllPedidos;
