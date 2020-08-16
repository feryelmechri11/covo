const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const UserRouter = require("./Routes/usersRoute");
const AdRouter = require("./Routes/adRoute");
const PathRouter = require("./Routes/pathRoute");
const LoginRouter = require("./Routes/LoginRoute");
const cookieparser = require("cookie-parser");

app.use(cors());
app.use(express.json());
app.use(cookieparser());
//responsable bech thezni lel entité wa9et eli hajti donc role d'un middleware ywajahni lel entité eli bech naamel aaliha lcrud
// tekhou path + fonction (router)
require("dotenv").config();

// connxion bd
mongoose.connect(
  "mongodb+srv://covo:0000@cluster0.9x7kh.mongodb.net/covoDB?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to db");
  }
);
app.use("/covo/users", UserRouter);
app.use("/covo/ads", AdRouter);
app.use("/covo/paths", PathRouter);
app.use("/covo/login", LoginRouter);

//connexion de serveur
app.listen(4000, () => console.log("connected"));
