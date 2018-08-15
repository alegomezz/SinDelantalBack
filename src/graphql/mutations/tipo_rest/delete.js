import { GraphQLNonNull, GraphQLID } from "graphql";

import Tipo_Rest from '../../../models/tipo_rest'
import {Tipo_RestType} from '../../types/tipo_rest'

export default {
  type: Tipo_RestType,
  args: {
    id: {
      name: "ID",
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve(root, params) {
    const deleteTipo_Rest = Tipo_Rest.findByIdAndRemove(params.id).exec();
    if (!deleteTipo_Rest) throw Error("Error al borrar el tipo de restaurante");
    return deleteTipo_Rest;
  }
};
