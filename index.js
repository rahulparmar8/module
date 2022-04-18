import express from "express";

const app = express();
const port = 9000;

// Middleware //
const Middleware = (req, res, next) => {
  console.log("middleware");
  next();
};
// Middleware();

app.get("/", (req, res) => {
  res.send("home page");
});

app.use((req, res, next) => {
  console.log("middleware2");
  next();
});

app.get("/add/:id", Middleware, (req, res) => {
  res.send(req.params);
});

app.get("/about", (req, res) => {
  res.send("about page");
});

app.listen(port, () => {
  console.log("server is runing...9000");
});
