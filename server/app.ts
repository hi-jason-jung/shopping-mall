import express, { Application, Request, Response } from 'express';
const app:Application = express();
const port:number = 3001;

app.set("port", port);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello world!!");
});

app.listen(port, () => console.log("Listening on", port));

module.exports = app;