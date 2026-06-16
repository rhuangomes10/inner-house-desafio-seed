require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;


app.get('/', (req, res) => {
  res.send('Olá, mundo! Projeto Node.js rodando.');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});