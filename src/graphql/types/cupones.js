import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLNonNull,
    GraphQLInt,
    GraphQLInputObjectType
} from 'graphql'

export const CuponesType = new GraphQLObjectType({
    name: 'Cupon',
    description: 'Descripcion de Cupones',
    fields: () => ({
        _id: {
            type:GraphQLNonNull(GraphQLID)
        },
        cupon:{
            type:GraphQLString
        },
        descuento: {
            type: GraphQLInt
        },
        descripcion_cupon: {
            type: GraphQLString
        }
    })
});


export const CuponesInputType = new GraphQLInputObjectType({
    name:"addCupones",
    description:"mutation para agregar cupones", 
    fields: ()=> ({
        cupon:{
            type:GraphQLString
        },
        descuento: {
            type: GraphQLInt
        },
        descripcion_cupon: {
            type: GraphQLString
        }
    })
})


