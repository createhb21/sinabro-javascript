// express => Fast, unopinionated, minimalist web framework for node

import express from "express";
import cors from "cors";
const app = express();
const port = 3000;

// serving static files in Express
// app.use(express.static("public"));
app.use("/static", express.static("public"));
app.use(cors());

// app.use((req, res, next) => {
//   console.log("hello");
//   next();
// });

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

app.get("/api/test", (req, res) => {
  res.json({
    name: "createhb21",
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
