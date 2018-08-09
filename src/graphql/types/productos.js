import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLNonNull,
    GraphQLInt,
    GraphQLList
} from 'graphql'

export const ProductosType = new GraphQLObjectType({
    name: 'Productos',
    description: 'Lista y descripcion de productos que ofrece la tienda',
    fields: () => ({
        _id: {
            type:GraphQLNonNull(GraphQLID)
        },
        nombre:{
            type:GraphQLString
        },
        precio: {
            type: GraphQLInt
        },
        descripcion: {
            type: GraphQLString
        },
        tipo: {
            type: GraphQLString
        },
        foto: {
            type: GraphQLList(GraphQLString)
        }

    })
});