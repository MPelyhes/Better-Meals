const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');

const jsonTest = require('./recipe/breakfast.json')

mongoose.connect('mongodb://localhost:27017/better-meals', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const app = express();

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')))

app.get('/index', (req, res) => {
  console.log(jsonTest.hits[0].recipe.image)
  res.render('meals/index')
})

app.get('/search', (req, res) => {
  // const jsonObj = jsonTest.hits;
  res.render('meals/search')
})

app.get('/myMeals', (req, res) => {
  res.render('meals/myMeals')
})

app.get('/mealPlan', (req, res) => {
  res.render('meals/mealPlan')
})


app.get('/users/register', (req, res) => {
  res.render('users/register')
})

app.get('/users/login', (req, res) => {
  res.render('users/login')
})


app.listen(3000, () => {
  console.log('Serving on port 3000')
})