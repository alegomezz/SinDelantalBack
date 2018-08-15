import jwt from "jsonwebtoken";
import User from "../models/user";

const secret = "ejemplodeairbnb";
const tokenPrefix = "JWT";

export const verifyToken = token => {
  const [prefix, receivedToken] = token.split(" ");
  let user = null;
  if (!receivedToken) {
    throw new Error("no token");
  }

  if (prefix != tokenPrefix) {
    throw new Error("header invalidado");
  }

  jwt.verify(receivedToken, secret, (err, payload) => {
    if (err) throw new Error("token invalido");
    console.log(payload);
    user = User.findById(payload.id).exec();
  });

  if (!user) throw new Error("usuario no existe");
  return user;
};
