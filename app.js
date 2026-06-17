require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const path = require("path");

app.use(express.static("public"));

app.use("/", require("./api/routes/index"));
app.use("/blog", require("./api/routes/blog"));
app.use("/solucao", require("./api/routes/solucao"));

app.use((req, res) => {
  res.status(404).send("Página não encontrada");
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
