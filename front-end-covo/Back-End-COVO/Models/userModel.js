const mongoose = require("mongoose");

const usersSchema = mongoose.Schema({
  name: String,
  password: String,
  email: String,
  phone_number: Number,
  link_fb: String,
  link_linkdin: String,
});

const usermodel = mongoose.model("user", usersSchema);
module.exports = usermodel;
