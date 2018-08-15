import {
    GraphQLNonNull
} from 'graphql'

import Tipo_Rest from '../../../models/tipo_rest'
import {Tipo_RestType, Tipo_RestInputType} from '../../types/tipo_rest'


export default {
    type:Tipo_RestType,
    args: {
        data:{
            type: new GraphQLNonNull(Tipo_RestInputType)
        }
    },

resolve (root, params) {
    const tipo_rest = new Tipo_Rest(params.data);
    const newTipo_Rest = tipo_rest.save();
    if(!newTipo_Rest) throw Error("error al crear el tipo de restaurante")
    return newTipo_Rest
}

}
