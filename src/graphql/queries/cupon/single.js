import {
    GraphQLNonNull, GraphQLID
} from 'graphql'

import Cupon from '../../../models/cupones'
import {CuponesType} from '../../types/cupones'

const querySingleCupon = {
    type: CuponesType,
    args:{
        id:{
            name:'ID',
            type:GraphQLNonNull(GraphQLID)

        }
    },

    resolve(root,params){
        const Cupones = Cupon.findById().exec()
        return Cupones
    }
}

export default querySingleCupon;
