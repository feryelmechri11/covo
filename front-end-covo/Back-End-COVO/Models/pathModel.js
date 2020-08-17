const mongoose = require("mongoose");
const ObjectId = require("mongoose").Schema.Types.ObjectId;
const usermodel = require("../Models/userModel");
const pathsSchema = mongoose.Schema({
  starting_address: String,
  arrival_address: String,
  Date_departure: Date,
  arrival_date: Date,
  price: Number,
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

const pathmodel = mongoose.model("path", pathsSchema);
module.exports = pathmodel;
