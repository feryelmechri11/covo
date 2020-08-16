const express = require("express");
const {login} = require("../Controllers/LoginController");

//
const router = express.Router();
router.post("/", login);


module.exports = router;