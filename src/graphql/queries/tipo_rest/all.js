import {
    GraphQLList
} from 'graphql'

import Tipo_Rest from '../../../models/tipo_rest'
import {Tipo_RestType} from '../../types/tipo_rest'

const queryAllTipo_Rest = {
    type: new GraphQLList(Tipo_RestType),
    resolve(){
        const Tipos_Rest = Tipo_Rest.find().exec()
        if (!Tipos_Rest) throw new Error ('Error al traer el tipo de restaurante de la db')
        return Tipos_Rest
    }
}

export default queryAllTipo_Rest;
