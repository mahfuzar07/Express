const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
//express  server
const PORT = process.env.PORT;
const HOST = process.env.HOST;
app.listen(PORT, () => {
  console.log(`server is running successfully at http://${HOST}:${PORT}`);
});
//others route get methode
app.get('/about', (req, res) => {
  res.send('<h1>this is about route page</h1>');
});

//express 1st route get methode (root route always under other route)
app.get('/', (req, res) => {
  res.send('<h1>First route html response </h1>');
});
