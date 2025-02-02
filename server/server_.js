import http from "http";
const hostname = "localhost";
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/users" && req.method === "GET") {
    // ..... fetch user list and return them
  } else if (req.url === "/users" && req.method === "POST") {
    // ..... get the payload, and create a new user
  }
  console.log("💡 req", {
    url: req.url,
    method: req.method,
  });
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello, World!");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
