import express from "express";
import cors from "cors";
import movies from "./movie.json" assert { type: "json" };

const app = express();
const port = 3000;

app.use(cors());
app.use(express.static("dist"));

const getFilteredMovies = (query) => {
  return movies.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );
};

app.get("/api/search", (req, res) => {
  res.json(getFilteredMovies(req.query.query));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
