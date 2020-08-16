const express = require("express");
const {
  getUser,
  addUser,
  editUser,
  deleteUser,
} = require("../Controllers/UserController");

//
const router = express.Router();
router.get("/getUsers/:id", getUser);
router.post("/addUser", addUser);
router.patch("/editUser/:id", editUser);
router.delete("/deleteUser/:id", deleteUser);

module.exports = router;
