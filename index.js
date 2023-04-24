/*
 Copyright (c) 2023 artegoser (Artemy Egorov)

 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with this program. If not, see <https://www.gnu.org/licenses/>.
 */

const express = require("express");
const bodyParser = require("body-parser");
const isValidNote = require("./note_validator");
const fs = require("fs");
const path = require("path");
const { Server } = require("socket.io");
const rateLimit = require("express-rate-limit");
const { NotesCore } = require("./core");

let core = new NotesCore();

require("dotenv").config();

const app = express(),
  server = require("http").createServer(app),
  io = new Server().listen(server);

const limiter = rateLimit({
  windowMs: 24 * 60 * 60 * 1000, // one day limit
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
});

if (!fs.existsSync("./notes")) {
  fs.mkdirSync("./notes");
}

io.on("connection", (socket) => {
  socket.on("nameChanged", ({ name, room }) => {
    socket.to(room).emit("nameChanged", {
      name,
    });
  });

  socket.on("textChanged", ({ text, room }) => {
    socket.to(room).emit("textChanged", {
      text,
    });
  });

  socket.on("joinRoom", (room) => {
    let rooms = Array.from(io.sockets.adapter.sids.get(socket.id));

    for (let room of rooms) {
      if (socket.id != room) {
        socket.leave(room);
      }
    }
    socket.join(room);
    socket.to(room).emit("roomJoined");
  });

  socket.on("leaveRoom", () => {
    for (let room of rooms) {
      if (socket.id != room) {
        socket.leave(room);
      }
    }
  });

  socket.on("broadcastSync", ({ data, room }) => {
    socket.to(room).emit("broadcastSync", data);
  });
});

app.use(bodyParser.json());

app.post("/publish", limiter, async (req, res) => {
  if (isValidNote(req.body)) {
    let id = await core.publishNote(req.body);

    if (id) {
      res.json({ id });
    } else {
      res.status(500).send("Publish failed!");
    }
  } else {
    res.status(403).send("Invalid body!");
  }
});

app.get("/get-note/:delorno/:id", async (req, res) => {
  let note = await core.getNote(req.params.id);
  if (note) {
    res.json(note);
    if (req.params.delorno === "del") await core.deleteNote(req.params.id);
  } else {
    res.status(404).send("There is no such note");
  }
});

app.use(express.static("dist"));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./dist", "index.html"));
});

core.connect().then(() =>
  server.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
  })
);
