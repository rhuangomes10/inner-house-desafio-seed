const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;
const PUBLIC_DIR = path.join(__dirname, "public");

const routes = {
  "/": "home/index.html",
  "/blog": "blog/blog.html",
  "/salaEstar": "salaEstar/salaEstar.html",
  "/contato": "contato/contato.html",
};

const server = http.createServer((req, res) => {
  let url = req.url.split("?")[0];
  if (url.length > 1 && url.endsWith("/")) url = url.slice(0, -1);

  const filePath = path.join(PUBLIC_DIR, routes[url] || url);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Página não encontrada");
      return;
    }
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});