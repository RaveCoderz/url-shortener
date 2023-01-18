const express = require("express");
const router = express.Router();

router.get("/", async function (req, res, next) {
  res.sendStatus(200);
});

module.exports = router;
