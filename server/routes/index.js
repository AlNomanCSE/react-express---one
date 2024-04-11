const express = require("express");
const userModel = require("../models/user");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello");
});
router.get("/create", async (req, res) => {
  await userModel.create({ name: "Abdullah Al Noman", age: 25 });
  res.send("UserAdd");
});
router.get("/alluser", async (req, res) => {
  const users = await userModel.find({});
  res.send(users);
});
module.exports = router;
