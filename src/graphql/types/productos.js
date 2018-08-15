import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLNonNull,
    GraphQLInt,
    GraphQLList,
    GraphQLInputObjectType
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

export const ProductosInputType = new GraphQLInputObjectType({
    name:"addProductos",
    description:"Mutation para agregar productos",
    fields: () => ({
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
})