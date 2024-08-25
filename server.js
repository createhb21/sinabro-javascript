// express => Fast, unopinionated, minimalist web framework for node

import express from "express";
const app = express();
const port = 3000;

const handler1 = (req, res, next) => {
  // .....

  console.log("handler1");
  next();
};

const handler2 = (req, res) => {
  console.log("handler2");
  res.send("Hello World from express!");
};

app.get("/", handler1, handler2);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
