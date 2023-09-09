const express = require('express');
const app = express();
const port = 5000;

app.get('/tc1', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server đang chạy`)
});

app.get('/c1', (req, res) => {
  res.send('Hello World!');
});