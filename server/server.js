const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const db = require("../db/index.js");

let PORT = process.env._PORT || 5000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.resolve(__dirname, "../build")));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../build", "index.html"));
});
