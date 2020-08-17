const adModel = require("../Models/adModel");
exports.getAd = async (req, res) => {
  adModel
    .find()
    .populate("user_id", "first_name last_name phone_number")

    .then((data) => res.send(data));
};

exports.addAd = async (req, res) => {
  const newPath = new adModel(req.body);
  newPath.save();

  res.send("Ad added  ");
};

exports.editAd = (req, res) => {
  adModel.findByIdAndUpdate(req.params.id, req.body, () => {
    res.send("path updated");
  });
};

exports.deleteAd = async (req, res) => {
  const addata = await adModel.findOneAndDelete({ _id: req.params.id });

  res.send(JSON.stringify(addata));
};
