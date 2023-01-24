var express = require("express");
const { generateID, generateLongID } = require("../functions/generators");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/status", async function (req, res, next) {
  res.sendStatus(200);
});

router.get("/:id", async function (req, res, next) {
  const doc = await req.app.db
    .collection("links")
    .doc(String(req.params.id))
    .get();
  const data = doc.data();
  if (data) {
    // JSON Response
    // res.send({
    //   id: req.params.id,
    //   url: data.url,
    // });
    res.redirect(data.url);
  } else {
    res.send({
      error: "Not found",
    });
  }
});

router.post("/", async function (req, res, next) {
  const id = req.body.long ? generateLongID() : generateID();
  const docRef = req.app.db.collection("links").doc(String(id));
  const url = String(req.body.url);
  try {
    await docRef.set({ id, url });
    res.send({
      id,
      url,
    });
  } catch {
    res.send({
      error: "Something went wrong",
    });
  }
});

module.exports = router;
