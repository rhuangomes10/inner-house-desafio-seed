require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;
const path = require('path')

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "/public/home/index.html"));
});

app.get('/blog', (req,res) =>{
    res.sendFile(path.join(__dirname, "/public/blog/blog.html"))
})
app.get('/solucao', (req,res) =>{
    res.sendFile(path.join(__dirname, "/public/solution/solution.html"))
})

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});