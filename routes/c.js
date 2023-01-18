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

function generateID() {
  const chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

  let now = Math.round(Date.now() * Math.random());
  let res = String(now)
    .substring(String(now).length - 7)
    .split("")
    .map((v) =>
      Math.random() > 0.5 ? chars[Number(v)] : chars[Number(v)].toUpperCase()
    );
  return res.join("");
}
function generateLongID() {
  const chars = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "K",
    "L",
    "M",
    "N",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  let res = [];

  for (let i = 0; i <= 1499; i++) {
    let item = chars[Math.floor(Math.random() * chars.length)];
    res.push(Math.random() > 0.5 ? item.toLowerCase() : item.toUpperCase());
  }
  return res.join("");
}
