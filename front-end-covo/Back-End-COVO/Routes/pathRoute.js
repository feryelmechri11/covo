const express = require("express");
const { getPath,addPath,editPath,deletePath } = require("../Controllers/PathController");
const router = express.Router();

router.get("/getPath", getPath);
router.post("/addPath", addPath);
router.patch("/editPath/:id", editPath);
router.delete("/deletePath/:id", deletePath);
module.exports = router;