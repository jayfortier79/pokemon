const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const Pokemon = require('./models/pokemon');


app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!');
  });

  app.get('/pokemon', (req, res) => {
    res.send(Pokemon);
  });









app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  });