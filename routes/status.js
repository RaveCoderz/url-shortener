const express = require("express");
const router = express.Router();
const axios = require("axios");

let status = {};

setInterval(() => {
  axios
    .post(
      "https://api.uptimerobot.com/v2/getMonitors?api_key=ur1981401-a078c2eae5876ebd96f6b3c3&format=json"
    )
    .then((res) => {
      status = res.data;
    });
}, 10000);

router.get("/", async function (req, res, next) {
  res.sendStatus(200);
});

router.get("/uptimerobot/", async function (req, res, next) {
  res.send(status);
});

module.exports = router;
