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

router.get("/:id", async function (req, res, next) {
  const doc = await db.collection("links").doc(String(req.params.id)).get();
  const data = doc.data();
  if (data) {
    res.redirect(data.url);
  } else {
    res.send({
      error: "Not found",
    });
  }
});

router.post("/", async function (req, res, next) {
  const id = generateID();
  const docRef = db.collection("links").doc(String(id));
  await docRef.set({ id: id, url: String(req.body.url) });

  res.send({
    shortenedURL: `http://localhost:3000/links/${id}`,
  });
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
