const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const Pokemon = require('./models/pokemon');

const jsxViewEngine = require('jsx-view-engine');

app.set('view engine', 'jsx');
app.set('views', './views');
app.engine('jsx', jsxViewEngine());

app.use(express.static('public'));



app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!');
  });

  app.get('/pokemon', (req, res) => {
    res.render('Index');
  });

  app.get('/pokemon/:id', (req, res) => {
    res.render('Show')
  });







app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  });