const sha3 = require("js-sha3").sha3_512;
const express = require("express");
const bodyParser = require("body-parser");
const isValidNote = require("./note_validator");
const fs = require("fs");
const path = require("path");
const cryptojs = require("crypto-js");

require("dotenv").config();

const app = express();

if (!fs.existsSync("./notes")) {
  fs.mkdirSync("./notes");
}

app.use(bodyParser.json());

app.post("/publish", function (req, res) {
  if (isValidNote(req.body)) {
    let hash = sha3(JSON.stringify(req.body));
    req.body.time = Date.now();
    try {
      fs.writeFileSync(
        `./notes/${hash}.json`,
        cryptojs.AES.encrypt(
          JSON.stringify(req.body),
          process.env.KEY
        ).toString()
      );
      res.send({ id: hash });
    } catch {
      res.status(500).send("Failed to write file");
    }
  } else {
    res.status(403).send("Invalid body!");
  }
});

app.get("/get-note/:delorno/:id", function (req, res) {
  let path = `./notes/${req.params.id}.json`;
  try {
    let data = JSON.parse(
      cryptojs.AES.decrypt(
        fs.readFileSync(path, "utf-8"),
        process.env.KEY
      ).toString(cryptojs.enc.Utf8)
    );
    res.send(data);
    if (req.params.delorno === "del") fs.unlinkSync(path);
  } catch {
    res.status(404).send("There is no such note");
  }
});

app.use(express.static("dist"));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./dist", "index.html"));
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});