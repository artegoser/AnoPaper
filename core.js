// Copyright (c) 2023 artegoser (Artemy Egorov)
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program. If not, see <https://www.gnu.org/licenses/>.

const mongoClient = require("mongodb").MongoClient;
const sha3 = require("js-sha3").sha3_512;

class NotesCore {
  constructor() {}
  async connect() {
    let connection = await mongoClient.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
    });

    let db = connection.db(process.env.MONGO_DB);

    this.notes = db.collection("notes");
    this.stats = db.collection("stats");
  }

  async getNote(_id) {
    try {
      let note = await this.notes.findOne({ _id });
      if (note !== null) await this.incStats("receivedNotes");
      return note;
    } catch {
      return null;
    }
  }

  async getStats(_id) {
    try {
      return await this.stats.findOne({ _id });
    } catch {
      return null;
    }
  }

  async deleteNote(_id) {
    try {
      await this.incStats("deletedNotes");
      return await this.notes.deleteOne({ _id });
    } catch {
      return null;
    }
  }

  async publishNote(note) {
    try {
      note._id = sha3(JSON.stringify(note));
      note.time = Date.now();
      note.pub = true;
      await this.notes.updateOne(
        { _id: note._id },
        { $set: note },
        { upsert: true }
      );
      await this.incStats("sentNotes");
      return note._id;
    } catch {
      return null;
    }
  }

  async incStats(_id) {
    await this.stats.updateOne(
      { _id },
      { $inc: { value: 1 } },
      { upsert: true }
    );
  }
}

module.exports = {
  NotesCore,
};
