import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLNonNull,
    GraphQLInt
} from 'graphql'

export const UserType = new GraphQLObjectType({
    name: 'Usuarios',
    description: 'Usuarios de la base de datos',
    fields: () => ({
        _id: {
            type:GraphQLNonNull(GraphQLID)
       },
        nombre:{
            type:GraphQLString
        },
        apellidos: {
            type: GraphQLString
        },
        correo: {
            type: GraphQLString
        },
        fecha_nacimiento: {
            type: GraphQLString
        },
        username: {
            type: GraphQLString
        },
        genero: {
            type: GraphQLString
        },
        direction: {
            type: GraphQLString
        },
        contacto: {
            type: GraphQLInt
        },
        user_pay: {
            type: GraphQLString
        },
        foto: {
            type: GraphQLString
        },

    })
});


