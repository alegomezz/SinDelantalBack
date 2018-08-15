import {
    GraphQLList
} from 'graphql'

import Cupon from '../../../models/cupones'
import {CuponesType} from '../../types/cupones'

const queryAllCupones= {
    type: new GraphQLList(CuponesType),
    resolve(){
        const cupones = Cupon.find().exec()
        if (!cupones) throw new Error ('Error al traer los cupones de la db')
        return cupones
    }
}

export default queryAllCupones;
