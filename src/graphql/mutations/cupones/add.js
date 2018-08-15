import {
    GraphQLNonNull
} from 'graphql'

import Cupon from '../../../models/cupones'
import {CuponesType, CuponesInputType} from '../../types/cupones'


export default {
    type:CuponesType,
    args: {
        data:{
            type: new GraphQLNonNull(CuponesInputType)
        }
    },

resolve (root, params) {
    const cupon = new Cupon(params.data);
    const newCupon = cupon.save();
    if(!newCupon) throw Error("error al crear el cupon")
    return newCupon
}

}
