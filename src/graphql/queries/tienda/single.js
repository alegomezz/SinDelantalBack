import {
    GraphQLNonNull, GraphQLID
} from 'graphql'

import Tienda from '../../../models/tiendas'
import {TiendasType} from '../../types/tiendas'

const querySingleTienda = {
    type: TiendasType,
    args:{
        id:{
            name:'ID',
            type:GraphQLNonNull(GraphQLID)

        }
    },

    resolve(root,params){
        const Tiendas = Tienda.findById().exec()
        return Tiendas
    }
}

export default querySingleTienda;
