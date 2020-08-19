const express = require("express");
const {
  getAd,
  addAd,
  editAd,
  deleteAd,
} = require("../Controllers/AdController");
const router = express.Router();

router.get("/getAd", getAd);
router.post(
  "/addAd",
  (auth = (req, res, next) => {
    const mytoken = req.cookies.token;
    console.log(mytoken);
    if (!mytoken) {
      res.status(401).send("not connected");
    } else {
      next();
    }
  }),
  addAd
);
router.patch(
  "/editAd/:id",
  (auth = (req, res, next) => {
    const mytoken = req.cookies.token;
    console.log(mytoken);
    if (!mytoken) {
      res.status(401).send("not connected");
    } else {
      next();
    }
  }),
  editAd
);
router.delete(
  "/deleteAd/:id",
  (auth = (req, res, next) => {
    const mytoken = req.cookies.token;
    console.log(mytoken);
    if (!mytoken) {
      res.status(401).send("not connected");
    } else {
      next();
    }
  }),
  deleteAd
);
module.exports = router;
