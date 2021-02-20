const SavedMeal = require('../models/savedMeal');

module.exports.index = (req, res) => {
  res.render('meals/index')
};