const userModel = require("../Models/userModel");
exports.getUser = (req, res) => {
  userModel.findOne({ _id: req.params.id }, (err, data) => res.json(data));
};

exports.addUser = (req, res) => {
  const newUser = new userModel(req.body);

  res.status(200).send(newUser);
  newUser.save();
};

exports.editUser = (req, res) => {
  userModel.findByIdAndUpdate(req.params.id, req.body, () => {
    res.send("user updated");
  });
};

exports.deleteUser = async (req, res) => {
  const Userdata = await userModel.findOneAndDelete({ _id: req.params.id });

  res.send(JSON.stringify(Userdata));
};
