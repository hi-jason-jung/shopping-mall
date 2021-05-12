import express, { Application, Request, Response } from 'express';
const app:Application = express();
const cors = require('cors');
const port:number = 3001;

// CORS 허용
let corsOption = {
  origin: 'http://localhost:3000', // 허락하는 요청 주소
  credentials: true // true로 하면 설정한 내용을 response 헤더에 추가 해줌.
} 

app.use(cors(corsOption)); // CORS 미들웨어 추가

app.set("port", port);

app.get("/", (req: Request, res: Response) => {
  res.send(`Hello ${req.query.name}, Welcome!`);
});

app.listen(port, () => console.log("Listening on", port));

module.exports = app;