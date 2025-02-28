import * as sqlite3 from "sqlite3";
import { open } from "sqlite";

const initDB = async () => {
  const db = await open({
    filename: "./database.sqlite",
    driver: sqlite3.Database,
  });
  // await db.exec(`
  //   CREATE TABLE IF NOT EXISTS images (
  //     id INTEGER PRIMARY KEY AUTOINCREMENT,
  //     url TEXT NOT NULL,
  //     title TEXT,
  //     description TEXT
  //     );
  // `);
  return db;
};

export default initDB;
