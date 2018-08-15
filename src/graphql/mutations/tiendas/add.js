import {
    GraphQLNonNull
} from 'graphql'

import Tienda from '../../../models/tiendas'
import {TiendasType, TiendasInputType} from '../../types/tiendas'


export default {
    type:TiendasType,
    args: {
        data:{
            type: new GraphQLNonNull(TiendasInputType)
        }
    },

resolve (root, params) {
    const tienda = new Tienda(params.data);
    const newTienda = tienda.save();
    if(!newTienda) throw Error("error al crear la tienda")
    return newTienda
}

}