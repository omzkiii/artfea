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
const sqlite3 = require("sqlite3");
const sqlite_1 = require("sqlite");
const insertData = () => __awaiter(void 0, void 0, void 0, function* () {
    const db = yield (0, sqlite_1.open)({
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
        yield db.run("INSERT INTO images (url, title, description) VALUES (?, ?, ?)", [url, title, description]);
    }
    console.log("Data inserted!");
    yield db.close();
});
insertData();
