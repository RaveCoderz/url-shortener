const express = require("express");
const router = express.Router();

router.get("/", async function (req, res, next) {
  res.redirect("../");
});

router.get("/:id", async function (req, res, next) {
  const doc = await req.app.db
    .collection("links")
    .doc(String(req.params.id))
    .get();
  const data = doc.data();
  if (data) {
    res.redirect(data.url);
  } else {
    res.send({
      error: "Not found",
    });
  }
});

module.exports = router;
