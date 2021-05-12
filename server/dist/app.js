"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 3001;
app.set("port", port);
app.get("/", (req, res) => {
    res.send("Hello world!");
});
app.listen(port, () => console.log("Listening on", port));
module.exports = app;
// const message: string = 'hello';
// const message1: string = 1;
