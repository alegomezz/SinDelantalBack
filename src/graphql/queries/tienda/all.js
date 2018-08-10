import {
    GraphQLList
} from 'graphql'

import Tienda from '../../../models/tiendas'
import {TiendasType} from '../../types/tiendas'

const queryAllTienda = {
    type: new GraphQLList(TiendasType),
    resolve(){
        const Tiendas = Tienda.find().exec()
        if (!Tiendas) throw new Error ('Error al traer las tiendas de la db')
        return Tiendas
    }
}

export default queryAllTienda;
