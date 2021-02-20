const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync');
const { isLoggedIn } = require('../middleware');
const meals = require('../controllers/meals');
const SavedMeal = require('../models/savedMeal');
const User = require('../models/user');
const ExpressError = require('../utils/ExpressError');

router.route('/index')
.get(meals.index)

router.get('/search', catchAsync(async (req, res) => {
  const user = await User.findById(req.params.id);
  if(!user){
    res.render('meals/search')
  }
  res.render('meals/search', { user })
}))

router.post('/search', isLoggedIn, catchAsync(async (req, res, next) => {
  if(!req.body.savedMeal) throw new ExpressError('Invalid Meal Data', 400);
  const savedMeal = new SavedMeal(req.body.savedMeal);
  const user = await User.findById(req.user._id);
  await savedMeal.save();
  user.meals.push(savedMeal._id);
  await user.save();
  req.flash('success', 'Meal Saved!')
}));

router.get('/myMeals', isLoggedIn, catchAsync(async (req, res, next) => {
  const user = await User.findById(req.user._id);
  const mealIds = user.meals;
  let meals = [];

  for(let mealId of mealIds){
    const savedMeal = await SavedMeal.findById(mealId);
    meals.push(savedMeal)
  }

  res.render('meals/myMeals', { meals })
}));

router.get('/myMeals/:id', catchAsync(async (req, res) => {
  const meal = await SavedMeal.findById(req.params.id)

  res.render('meals/show', { meal });
}));

router.get('/mealPlan', (req, res) => {
  res.render('meals/mealPlan')
});

module.exports = router;