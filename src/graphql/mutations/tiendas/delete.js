import { GraphQLNonNull, GraphQLID } from "graphql";

import Tienda from '../../../models/tiendas'
import {TiendasType} from '../../types/tiendas'

export default {
  type: TiendasType,
  args: {
    id: {
      name: "ID",
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve(root, params) {
    const deleteTiendas = Tienda.findByIdAndRemove(params.id).exec();
    if (!deleteTiendas) throw Error("Error al borrar la tienda");
    return deleteTiendas;
  }
};
