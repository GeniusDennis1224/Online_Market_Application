const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.send("Welcome to the Online Shop Application.");
});

module.exports = router;
