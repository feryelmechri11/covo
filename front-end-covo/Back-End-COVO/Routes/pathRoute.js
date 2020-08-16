const express = require("express");
const { getPath,addPath } = require("../Controllers/PathController");
const router = express.Router();

router.get("/getPath", getPath);
router.post("/addPath", addPath);
module.exports = router;