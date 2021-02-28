const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync');
const { isLoggedIn } = require('../middleware');
const meals = require('../controllers/meals');


router.route('/home')
  .get(meals.home)

router.route('/search')
  .get(catchAsync(meals.renderSearch))
  .post( isLoggedIn, catchAsync(meals.saveMeal));

router.route('/myMeals')
  .get(isLoggedIn, catchAsync(meals.renderMyMeals))
  

router.route('/myMeals/:id')
  .get(isLoggedIn, catchAsync(meals.showMeal))
  .delete(isLoggedIn, catchAsync(meals.deleteMeal))
  .put(isLoggedIn, catchAsync(meals.addToMealPlan))

router.route('/mealPlan')
  .get(isLoggedIn, catchAsync(meals.renderMealPlan));

module.exports = router;