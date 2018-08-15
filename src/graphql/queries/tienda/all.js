import {
    GraphQLList
} from 'graphql'

import Tienda from '../../../models/tiendas'
import {TiendasType} from '../../types/tiendas'

const queryAllTiendas = {
    type: new GraphQLList(TiendasType),
    resolve(){
        const tiendas = Tienda.find().exec()
        if (!tiendas) throw new Error ('Error al traer las tiendas de la db')
        return tiendas
    }
}

export default queryAllTiendas;
