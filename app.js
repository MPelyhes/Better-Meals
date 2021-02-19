const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const catchAsync = require('./utils/catchAsync');
const ExpressError = require('./utils/ExpressError');
const session = require('express-session');
const flash = require('connect-flash');
const methodOverride = require('method-override');
const SavedMeal = require('./models/savedMeal');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/user');
const { isLoggedIn } = require('./middleware');


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

const sessionConfig = {
  secret: 'dragonsarereal',
  resave: false,
  saveUninitialized: true,
  // Set up mongo store when ready to deploy!
  cookie: {
    httpOnly: true,
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7, // expires in one week
    maxAge: 1000 * 60 * 60 * 24 * 7 // one week
  }

}
app.use(session(sessionConfig))
app.use(flash());

app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  res.locals.success = req.flash('success');
  res.locals.error = req.flash('error');
  next();
})

app.use(passport.initialize());
app.use(passport.session()); //Set up sessions! Sessions must come before this line!!!!
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get('/index', (req, res) => {
  res.render('meals/index')
})

app.get('/search', catchAsync(async (req, res) => {
  const user = await User.findById(req.params.id);
  if(!user){
    res.render('meals/search')
  }
  res.render('meals/search', { user })
}))

app.post('/search', isLoggedIn, catchAsync(async (req, res, next) => {
  if(!req.body.savedMeal) throw new ExpressError('Invalid Meal Data', 400);
  const savedMeal = new SavedMeal(req.body.savedMeal);
  const user = await User.findById(req.user._id);
  console.log(user);
  await savedMeal.save();
  user.meals.push(savedMeal._id);
  await user.save();
  req.flash('success', 'Meal Saved!')
}));

app.get('/myMeals', isLoggedIn, catchAsync(async (req, res, next) => {
  // const savedMeal = await SavedMeal.find({});
  const user = await User.findById(req.user._id);
  const mealIds = user.meals;
  let meals = [];

  for(let mealId of mealIds){
    const savedMeal = await SavedMeal.findById(mealId);
    meals.push(savedMeal)
  }
 console.log(meals)
  res.render('meals/myMeals', { meals })
}));

app.get('/mealPlan', (req, res) => {
  res.render('meals/mealPlan')
})

// User Routes //////////////////////////////////////////////
app.get('/register', (req, res) => {
  res.render('users/register')
})

app.post('/register', catchAsync( async (req, res, next) => {
  try {
    const { email, username, password } = req.body;
    const user = new User({ email, username });
    const registeredUser = await User.register(user, password);
    req.login(registeredUser, err => {
      if(err) return next(err);
      req.flash('success', 'Welcome to BetterMeals!');
      res.redirect('/index');
    })
  } catch(e){
      req.flash('error', e.message)
      res.redirect('register')
  }
}))

app.get('/login', (req, res) => {
  res.render('users/login')
})

app.post('/login', passport.authenticate('local', { failureFlash: true, failureRedirect: '/login'}), (req, res) => {
  req.flash('success', 'Welcome back!');
  const redirectUrl = req.session.returnTo || '/index';
  delete req.session.returnTo;
  res.redirect(redirectUrl);
})

app.get('/logout', (req, res) => {
  req.logout();
  req.flash('success', 'Goodbye!')
  res.redirect('/index');
})

//////////////////////////////////////////////////////////////

app.all('*', (req, res, next) => {
  next(new ExpressError('Page Not Found', 404))
})

app.use((err, req, res, next) => {
  const { statusCode = 500, message = 'Something went wrong' } = err;

  if(!err.message) err.message = 'Oh no! Something went wrong!'
  res.status(statusCode).render('error', { err }) // Add this back in when flash is set up
})

app.listen(3000, () => {
  console.log('Serving on port 3000')
})