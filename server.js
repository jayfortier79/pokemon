require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const Pokemon = require('./models/pokemon');
const mongoose = require('mongoose');
const jsxViewEngine = require('jsx-view-engine');
const methodOverride = require('method-override');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once('open', () => {
  console.log('connected to mongo');
});

app.set('view engine', 'jsx');
app.set('views', './views');
app.engine('jsx', jsxViewEngine());

app.use(express.static('public'));

// Middleware;
app.use((req, res, next) => {
  console.log('Middleware: I run for all routes, 1');
  next();
});
// By implementing the line below, we now have access to the req.body. Which is the parsed formData from the form request.
app.use(express.urlencoded({ extended: false }));

//after app has been defined
//use methodOverride.  We'll be adding a query parameter to our delete form named _method
app.use(methodOverride('_method'));



app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!');
  });

  app.get('/pokemon/', async(req, res) => {
    try {
      const foundPokemon = await Pokemon.find({});
      console.log(foundPokemon);
      res.status(200).render('Index', {
        pokemons: foundPokemon,
      });
    } catch (err) {
      res.status(400).send(err);
    }

  });



      // New
      app.get('/pokemon/new', (req, res) => {
        console.log('New controller');
        res.render('new');
      });
    

// Create
app.post('/pokemon', async (req, res) => {
  try {
    // if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
    //   req.body.readyToEat = true; //do some data correction
    // } else { //if not checked, req.body.readyToEat is undefined
    //   req.body.readyToEat = false; //do some data correction
    // }
    req.body.evolved = req.body.evolved === 'on';

    const createdFruit = await Pokemon.create(req.body);

    res.status(201).redirect('/pokemon');
  } catch (err) {
    res.status(400).send(err);
  }
});
    
// Show
app.get('/pokemon/:id', async (req, res) => {
  try {
    const foundPokemon = await Pokemon.findById(req.params.id);

    //second param of the render method must be an object
    res.render('Show', {
      //there will be a variable available inside the jsx file called fruit, its value is fruits[req.params.indexOfFruitsArray]
      Pman: foundPokemon,
    });
  } catch (err) {
    res.status(400).send(err);
  }
});



 
 


app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  });