import bodyParser from "body-parser";
import express from "express";

const app = express();
const port = 1000;

app.use(bodyParser.json);

app.listen(port, () => {
  console.log("server is runing");
});
