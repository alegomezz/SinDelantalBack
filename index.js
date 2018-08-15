import express from "express";
import parser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import graphQLHTTP from "express-graphql";
import schema from "./src/graphql";
import User from "./src/models/user";

const app = express();
const PORT = process.env.PORT || 3000;
const mongoURI =
  process.env.MONGODB_URI ||
  "mongodb://test:Test123456@ds063186.mlab.com:63186/sindelantal";

mongoose.connect(
  mongoURI,
  { useNewUrlParser: true }
);

const db = mongoose.connection;
db.on("error", () => console.log("Error al conectar a la BD")).once(
  "open",
  () => console.log("Conectado a la BD")
);

app.use(parser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server adss");
});

app.post("/user/create", (req, res) => {
  let user = req.body;
  User.create(user)
    .then(user => {
      return res.status(201).json({
        message: "Usuario Creado",
        id: user._id
      });
    })
    .catch(err => {
      console.log(err);
      return res.status(400).json(err);
    });
});

app.post("/login", (req, res) => {
  const token = createToken(req.body.username, req.body.password)
    .then(token => {
      res.status(201).json({ token });
    })
    .catch(() => {
      res.status(403).json({ message: "login failed ::(" });
    });
});

app.use("/graphql", (req, res, next) => {
  const token = req.headers["authorization"];
  try {
    req.user = verifyToken(token);
    next();
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
});

app.use(
  "/graphql",
  graphQLHTTP((req, res) => ({
    schema,
    graphiql: true,
    pretty: true,
    context: {
      user: req.user
    }
  }))
);

app.listen(PORT, () => console.log(`Server on ${PORT}`));
