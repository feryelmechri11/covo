const pathModel = require("../Models/pathModel");
const userModel = require("../Models/userModel");

exports.getPath = async (req, res) => {
  pathModel
    .find()
    .populate("user_id", "first_name last_name phone_number")

    .then((data) => res.send(data));
};

exports.addPath = (req, res) => {
  const newPath = new pathModel(req.body);
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
