import * as sqlite3 from "sqlite3";
import { open } from "sqlite";

const insertData = async () => {
  const db = await open({
    filename: "./database.sqlite",
    driver: sqlite3.Database,
  });

  const paintings = [];
  for (let i = 1; i <= 43; i++) {
    paintings.push([
      `https://cdn.jsdelivr.net/gh/omzkiii/artfea-paintings@latest/painting${i}.jpg`,
      `Painting #${i}`,
      null,
    ]);
  }

  for (const [url, title, description] of paintings) {
    await db.run(
      "INSERT INTO images (url, title, description) VALUES (?, ?, ?)",
      [url, title, description],
    );
  }

  console.log("Data inserted!");
  await db.close();
};

insertData();
