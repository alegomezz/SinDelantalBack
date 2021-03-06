import {
    GraphQLNonNull, GraphQLID
} from 'graphql'

import Tipo_Rest from '../../../models/tipo_rest'
import {Tipo_RestType} from '../../types/tipo_rest'

const querySingleTipo_Rest = {
    type: Tipo_RestType,
    args:{
        id:{
            name:'ID',
            type:GraphQLNonNull(GraphQLID)

        }
    },

    resolve(root,params){
        const tipos_Rest = Tipo_Rest.findById().exec()
        return tipos_Rest
    }
}

export default querySingleTipo_Rest;
