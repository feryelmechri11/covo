const mongoose = require("mongoose");
const ObjectId = require("mongoose").Schema.Types.ObjectId;
const usermodel = require("../Models/userModel");
const adsSchema = mongoose.Schema({
  starting_address: String,
  arrival_address: String,
  Date_departure: Date,
  arrival_date: Date,
  price: Number,
  picture:String,
  description:String,
  object_type:String,
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

const admodel = mongoose.model("ad", adsSchema);
module.exports = admodel;