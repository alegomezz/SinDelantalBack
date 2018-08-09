import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLNonNull
} from 'graphql'

export const Tipo_RestType = new GraphQLObjectType({
    name: 'Tipo_Rest',
    description: 'Descripcion de tipo de restaurante',
    fields: () => ({
        _id: {
            type:GraphQLNonNull(GraphQLID)
        },
        nombre:{
            type:GraphQLString
        },
        descripcion: {
            type: GraphQLString
        }

    })
});


