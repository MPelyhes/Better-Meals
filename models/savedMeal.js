const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SavedMealSchema = new Schema({
  label: String,
  image: String,
  source: String,
  sourceURL: String,
  servings: Number,
  ingredients: [String],
  calories: Number,
  // nutrition: [{   //Temporarily removed until I learn how to send objects with a POST request
  //   nutrient: String,
  //   quantity: Number
  // }]
});

module.exports = mongoose.model('SavedMeal', SavedMealSchema);