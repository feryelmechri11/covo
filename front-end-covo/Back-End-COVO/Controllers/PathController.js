const pathModel = require("../Models/pathModel");
const userModel = require("../Models/userModel");
const jwt = require("jsonwebtoken");
exports.getPath = async (req, res) => {
  pathModel
    .find()
    .populate("user_id", "first_name last_name phone_number")

    .then((data) => res.send(data));
};

exports.addPath = (req, res) => {
  let newPath = new pathModel({...req.body, user_id: ""});

  /***************************** */
  let mytoken = req.cookies.token; //get the token
  let decoded = jwt.verify(mytoken, process.env.SECRETKEY); //decode the token
  console.log(decoded);
  newPath.user_id = decoded._id;

  /************************ */
  newPath.save();

  res.send("path added  ");
};

exports.editPath = (req, res) => {
  pathModel.findByIdAndUpdate(req.params.id, req.body, () => {
    res.send("path updated");
  });
};

exports.deletePath = async (req, res) => {
  const pathdata = await pathModel.findOneAndDelete({ _id: req.params.id });

  res.send(JSON.stringify(pathdata));
};
