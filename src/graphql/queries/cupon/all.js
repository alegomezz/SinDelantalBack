import {
    GraphQLList
} from 'graphql'

import Cupon from '../../../models/cupones'
import {CuponesType} from '../../types/cupones'

const queryAllCupones= {
    type: new GraphQLList(CuponesType),
    resolve(){
        const Cupones = Cupon.find().exec()
        if (!Cupones) throw new Error ('Error al traer los cupones de la db')
        return Cupones
    }
}

export default queryAllCupones;
