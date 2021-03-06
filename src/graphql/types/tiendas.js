import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLList,
  GraphQLInputObjectType
} from "graphql";

import { Tipo_RestType } from "./tipo_rest";

export const CalificacionType = new GraphQLObjectType({
  name: "Calificacion",
  description: "asdasd",
  fields: () => ({
    _id: {
      type: GraphQLNonNull(GraphQLID)
    },
    comentarios: {
      type: GraphQLString
    },
    estrellas: {
      type: GraphQLInt
    }
  })
});

export const TiendasType = new GraphQLObjectType({
  name: "Tiendas",
  description: "Datos de la Tienda",
  fields: () => ({
    _id: {
      type: GraphQLNonNull(GraphQLID)
    },
    nombre: {
      type: GraphQLString
    },
    correo: {
      type: GraphQLString
    },
    contacto: {
      type: GraphQLInt
    },
    tipo_tienda: {
      type: Tipo_RestType,
      resolve(tiendas) {
        const { tipo_tienda } = tiendas;
        return Tipo_RestType.findById(tipo_tienda).exec();
      }
    },

    calificacion: {
      type: new GraphQLList(CalificacionType)
    },
    direcciones: {
      type: GraphQLList(GraphQLString)
    },
    open_restaurant: {
      type: GraphQLString
    },
    close_restaurant: {
      type: GraphQLString
    },
    logo: {
      type: GraphQLString
    },
    descripcion: {
      type: GraphQLString
    },
    costo: {
      type: GraphQLList(GraphQLInt)
    },
    productos: {
      type: GraphQLList(GraphQLString)
    }
  })
});

export const TiendasInputType = new GraphQLInputObjectType({
  name: "addTiendas",
  description: "Mutation para agregar tiendas",
  fields: () => ({
    nombre: {
      type: GraphQLString
    },
    correo: {
      type: GraphQLString
    },
    contacto: {
      type: GraphQLInt
    },
    tipo_tienda: {
      type: GraphQLNonNull(GraphQLID)
    },
    calificacion: {
      type: new GraphQLList(CalificacionType)
    },
    direcciones: {
      type: GraphQLList(GraphQLString)
    },
    open_restaurant: {
      type: GraphQLString
    },
    close_restaurant: {
      type: GraphQLString
    },
    logo: {
      type: GraphQLString
    },
    descripcion: {
      type: GraphQLString
    },
    costo: {
      type: GraphQLList(GraphQLInt)
    },
    productos: {
      type: GraphQLList(GraphQLString)
    }
  })
});
