const express = require("express");
const router = express.Router();
const serviceAccount = require("../keys/shortener-c73de-deee78727e15.json");

const {
  initializeApp,
  applicationDefault,
  cert,
} = require("firebase-admin/app");
const {
  getFirestore,
  Timestamp,
  FieldValue,
} = require("firebase-admin/firestore");

initializeApp({
  credential: cert(serviceAccount),
});
const db = getFirestore();

router.get("/", async function (req, res, next) {
  res.redirect("../");
});

router.get("/:id", async function (req, res, next) {
  const doc = await db.collection("links").doc(String(req.params.id)).get();
  const data = doc.data();
  if (data) {
    res.send({
      id: req.params.id,
      url: data.url,
    });
    // res.redirect(data.url);
  } else {
    res.send({
      error: "Not found",
    });
  }
});

router.post("/", async function (req, res, next) {
  const id = generateID();
  const docRef = db.collection("links").doc(String(id));
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
    .split("")
    .map((v) =>
      v % 2 === 0 ? chars[Number(v)] : chars[Number(v)].toUpperCase()
    );
  return res.join("");
}
