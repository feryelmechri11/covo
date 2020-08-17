const express = require("express");
const { getAd,addAd ,editAd,deleteAd} = require("../Controllers/AdController");
const router = express.Router();

router.get("/getAd", getAd);
router.post("/addAd", addAd);
router.patch("/editAd/:id", editAd);
router.delete("/deleteAd/:id", deleteAd);
module.exports = router;