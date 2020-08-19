const userModel = require("../Models/userModel");
const jwt = require("jsonwebtoken");
//biblio bech tkhalini nassna3 el token mte3i

exports.login = (req, res) => {
  userModel
    .find({ email: req.body.email, password: req.body.password })
    .then((data) => {
      if (data.length === 0) {
        res.status(404).json("user not found");
      } else {
        const mydata = { ...data[0] };
        const token = jwt.sign(mydata, process.env.SECRETKEY);
        res.cookie("token", token).json(data);
      }
    });
};
exports.logout = (req, res) => {
  res.cookie("token", "", { maxAge: -0 }).send("haha");
};
