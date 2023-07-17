import Dexie from "dexie";

class FilmDatabase extends Dexie {
  constructor() {
    Dexie.delete();
    super("film");
    // this.delete();

    this.version(1).stores({
      raindrops: "++id",
    });

    let arr = [];
    for (var j = 0; j < 200; ++j) {
      arr.push({
        id: j,
        position: [Math.random(), Math.random(), Math.random()],
        a: j * 2,
        b: "hello",
        c: Math.random(),
      });
    }
    let t = Date.now();
    console.log("time start", t);
    this.raindrops.bulkPut(arr).then((lastKey) => {
      console.log(lastKey, Date.now() - t);
    });

    window.q = this;
  }
}

export default FilmDatabase;
