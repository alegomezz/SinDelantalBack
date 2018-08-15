import {
    GraphQLList
} from 'graphql'

import Tipo_Rest from '../../../models/tipo_rest'
import {Tipo_RestType} from '../../types/tipo_rest'

const queryAllTipo_Rest = {
    type: new GraphQLList(Tipo_RestType),
    resolve(){
        const tipos_Rest = Tipo_Rest.find().exec()
        if (!tipos_Rest) throw new Error ('Error al traer el tipo de restaurante de la db')
        return tipos_Rest
    }
}

export default queryAllTipo_Rest;
