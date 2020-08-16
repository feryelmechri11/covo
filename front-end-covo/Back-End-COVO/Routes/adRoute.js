const express = require("express");
const { getAd,addAd } = require("../Controllers/AdController");
const router = express.Router();

router.get("/getAd", getAd);
router.post("/addAd", addAd);
module.exports = router;