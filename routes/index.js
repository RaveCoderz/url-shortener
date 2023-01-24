var express = require("express");
const { generateID, generateLongID } = require("../functions/generators");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
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
