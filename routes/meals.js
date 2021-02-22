const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync');
const { isLoggedIn } = require('../middleware');
const meals = require('../controllers/meals');


router.route('/index')
  .get(meals.index)

router.route('/search')
  .get(catchAsync(meals.renderSearch))
  .post( isLoggedIn, catchAsync(meals.saveMeal));

router.route('/myMeals')
  .get(isLoggedIn, catchAsync(meals.renderMyMeals))
  

router.route('/myMeals/:id')
  .get(catchAsync(meals.showMeal))
  .delete(catchAsync(meals.deleteMeal))
  .put(catchAsync(meals.addToMealPlan))

router.route('/mealPlan')
  .get(meals.renderMealPlan);

module.exports = router;