const express = require("express");
const jwt = require("jsonwebtoken");
const pathModel = require("../Models/pathModel");
const {
  getPath,
  addPath,
  editPath,
  deletePath,
} = require("../Controllers/PathController");
const router = express.Router();

router.get("/getPath", getPath);
router.post(
  "/addPath",
  (auth = (req, res, next) => {
    const mytoken = req.cookies.token;
    console.log(mytoken);
    if (!mytoken) {
      res.status(401).send("not connected");
    } else {
      next();
    }
  }),
  addPath
);
router.patch(
  "/editPath/:id",
  (auth = (req, res, next) => {
    const mytoken = req.cookies.token;
    console.log(mytoken);
    if (!mytoken) {
      res.status(401).send("not connected");
    } else {
      next();
    }
  }),
  editPath
);
router.delete(
  "/deletePath/:id",
  (auth = (req, res, next) => {
    const mytoken = req.cookies.token;
    console.log(mytoken);
    if (!mytoken) {
      res.status(401).send("not connected");
    } else {
      next();
    }
  }),
  deletePath
);
module.exports = router;
