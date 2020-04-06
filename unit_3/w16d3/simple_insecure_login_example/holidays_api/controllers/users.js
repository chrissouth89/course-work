const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const bcrypt = require("bcrypt");

router.post("/", (req, res) => {
  console.log(req.body);
  req.body.password = bcrypt.hashSync(
    req.body.password,
    bcrypt.genSaltSync(10)
  );
  User.create(req.body, (err, createdUser) => {
    let user = { ...createdUser._doc };
    delete user.password;
    res.status(201).json(user);
  });
});

module.exports = router;
