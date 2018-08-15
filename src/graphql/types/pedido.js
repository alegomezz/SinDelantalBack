import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLNonNull,
    GraphQLInt,
    GraphQLBoolean,
    GraphQLInputObjectType
} from 'graphql'
import { ProductosType } from './productos';
import {UserType} from './user';
import {CuponesType} from './cupones'


export const PedidosType = new GraphQLObjectType({
    name: 'Pedido',
    description: 'finalizar pedido con lista de productos',
    fields: () => ({
        _id: {
            type:GraphQLNonNull(GraphQLID)
        },
        producto:{
            type:ProductosType,
            resolve(pedido){
                const{producto} = pedido
                return ProductosType.findById(producto).exec()
            }
        },
        monto: {
            type: GraphQLInt
        },
        cupon: {
            type: CuponesType,
            resolve(pedido){
                const{cupon}=pedido
                return CuponesType.findById(cupon).exec()
            }
        },
        status: {
            type: GraphQLInt
        },
        user: {
            type: UserType,
            resolve(pedido){
                const{user} = pedido
                return UserType.findById(user).exec()

            }
        },
        tienda: {
            type: GraphQLInt
        },
        status_pago: {
            type: GraphQLBoolean
        },
        user_direction: {
            type: GraphQLString
        }
    })
});

export const PedidosInputType = new GraphQLInputObjectType({
    name:"addPedidos",
    description:"mutation para agregar pedidos", 
    fields: ()=> ({
        producto:{
            type:GraphQLNonNull(GraphQLID)
            
        },
        monto: {
            type: GraphQLInt
        },
        cupon: {
            type:GraphQLNonNull(GraphQLID)
            
        },
        status: {
            type: GraphQLInt
        },

        user: {
           type:GraphQLNonNull(GraphQLID)

        },
        tienda: {
            type: GraphQLInt
        },
        status_pago: {
            type: GraphQLBoolean
        },
        user_direction: {
            type: GraphQLString
        }
    })
})
