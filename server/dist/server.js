"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const database_1 = require("./database");
// import dotenv from "dotenv";
const app = express();
app.use(cors());
app.use(express.json());
app.use(cors({ origin: "*", credentials: true }));
(0, database_1.default)()
    .then((db) => {
    console.log("DB INIT");
    app.get("/images", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const images = yield db.all("SELECT * FROM images");
            res.json(images);
            console.log("SENT SUCCESS");
        }
        catch (error) {
            console.error("Error fetching images:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }));
    app.post("/image", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const body = req.body;
        try {
            const image = yield db.get("SELECT * FROM images WHERE id = ?", body.id);
            res.json(image);
        }
        catch (error) {
            console.error("Error fetching images:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }));
    app.get("/hello", (req, res) => {
        res.send("hi");
    });
    app.listen(8000, "0.0.0.0", () => {
        console.log("SERVER RUNNING on port 80");
    });
})
    .catch((error) => {
    console.error("Database initialization failed:", error);
    process.exit(1); // Exit process if DB fails
});
