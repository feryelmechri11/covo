const express = require("express");
const { login, logout } = require("../Controllers/LoginController");

//
const router = express.Router();
router.post("/", login);
router.post("/Logout", logout);

module.exports = router;
