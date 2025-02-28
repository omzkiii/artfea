import express, { Request, Response } from "express";
import cors from "cors";
import initDB from "./database";
// import dotenv from "dotenv";

const app = express();
app.use(cors());
app.use(express.json());
app.use(cors({ origin: "*", credentials: true }));

initDB()
  .then((db) => {
    console.log("DB INIT");

    app.get("/images", async (req: Request, res: Response) => {
      try {
        const images = await db.all("SELECT * FROM images");
        res.json(images);
        console.log("SENT SUCCESS");
      } catch (error) {
        console.error("Error fetching images:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    });

    app.post("/image", async (req: Request, res: Response) => {
      const body = req.body;
      try {
        const image = await db.get(
          "SELECT * FROM images WHERE id = ?",
          body.id,
        );
        res.json(image);
      } catch (error) {
        console.error("Error fetching images:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    });

    app.get("/hello", (req: Request, res: Response) => {
      res.send("hi");
    });

    app.listen(3000, "0.0.0.0", () => {
      console.log("SERVER RUNNING on port 80");
    });
  })
  .catch((error) => {
    console.error("Database initialization failed:", error);
    process.exit(1); // Exit process if DB fails
  });
