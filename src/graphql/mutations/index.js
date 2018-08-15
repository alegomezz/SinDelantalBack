import Cupones from "./cupones";
import Pedido from "./pedido";
import Producto from "./productos";
import Tienda from "./tiendas";
import Tipo_Rest from "./tipo_rest";

export default {
  ...Cupones,
  ...Pedido,
  ...Producto,
  ...Tienda,
  ...Tipo_Rest
};
