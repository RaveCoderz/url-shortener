const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");
const serviceAccount = require("./keys/shortener-c73de-deee78727e15.json");

initializeApp({
  credential: cert(serviceAccount),
});

const db = getFirestore();

const indexRouter = require("./routes/index");

const app = express();
app.db = db;

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/", indexRouter);

module.exports = app;
