const userModel = require("../Models/userModel");
exports.getUser = (req, res) => {
    userModel.findOne({ _id: 
req.params.id
 }, (err, data) => res.json(data));
  }

exports.addUser = (req, res) => {
  const newUser = new userModel(req.body);
  newUser.save();

  res.send("user added ");
};

exports.editUser = (req, res) => {
  userModel.findByIdAndUpdate(req.params.id, req.body, () => {
    res.send("user updated");
  });

};

exports.deleteUser = async (req, res) => {
  const Userdata = await userModel.findOneAndDelete({ _id: req.params.postId });

  res.send(JSON.stringify(Userdata));
};