import Dexie from "dexie";
import { DB } from "../configs/db-config";

class DBManager {
  constructor() {
    Dexie.delete(DB.database);
    const db = new Dexie(DB.database);
    // db.delete();
    db.version(1).stores({
      friends: "++id, name, age, isCloseFriend",
      notes: "++id, title, date, *items",
    });
    this.db = db;
  }

  async query() {
    const { db } = this;
    db.transaction("rw", db.friends, db.notes, function* () {
      // Let's add some data to db:
      var friend1Id = yield db.friends.add({
        name: "Camilla",
        age: 25,
        isCloseFriend: 1,
      });
      var friend2Id = yield db.friends.add({
        name: "Ban Ki-moon",
        age: 70,
        isCloseFriend: 0,
      });

      var noteId = yield db.notes.add({
        title: "Shop tomorrow",
        date: new Date(),
        items: ["milk", "butter"],
      });

      // Let's query the db
      var closeFriends = yield db.friends
        .where("isCloseFriend")
        .equals(1)
        .toArray();

      console.log("Close friends:" + closeFriends.map((f) => f.name));

      var toShop = yield db.notes
        .where("title")
        .startsWithIgnoreCase("shop")
        .toArray();

      console.log("Shopping list: " + toShop.map((note) => note.items));
    }).catch(function (err) {
      // Catch any error event or exception and log it:
      console.error(err.stack || err);
    });
  }
}

export default DBManager;
