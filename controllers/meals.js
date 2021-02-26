const SavedMeal = require('../models/savedMeal');
const User = require('../models/user');
const ExpressError = require('../utils/ExpressError');


module.exports.index = (req, res) => {
  res.render('meals/index')
};

module.exports.renderSearch = async (req, res) => {
  const user = await User.findById(req.params.id);
  if(!user){
    res.render('meals/search')
  }
  res.render('meals/search', { user })
};

module.exports.saveMeal = async (req, res, next) => {
  if(!req.body.savedMeal) throw new ExpressError('Invalid Meal Data', 400);
  const savedMeal = new SavedMeal(req.body.savedMeal);
  const user = await User.findById(req.user._id);
  await savedMeal.save();
  user.meals.push(savedMeal._id);
  await user.save();
  req.flash('success', 'Meal Saved!')
};

module.exports.renderMyMeals = async (req, res, next) => {
  const user = await User.findById(req.user._id);
  const mealIds = user.meals;
  let meals = [];

  for(let mealId of mealIds){
    const savedMeal = await SavedMeal.findById(mealId);
    meals.push(savedMeal)
  }

  res.render('meals/myMeals', { meals })
};

module.exports.deleteMeal = async(req, res) => {
  const { id } = req.params
  const user = await User.findById(req.user._id);
  await user.updateOne({ $pull: { meals: id } })
  req.flash('success', 'Successfully removed meal');
  res.redirect('/myMeals')
}

module.exports.showMeal = async (req, res) => {
  const meal = await SavedMeal.findById(req.params.id)

  res.render('meals/show', { meal });
};

module.exports.addToMealPlan = async (req, res, next) => {
  try {
    const { day, mealtime } = req.body;
    const update = day+mealtime;
    const meal = req.params.id;
    const user = await User.findById(req.user._id);
    await user.update({$set: {[update]: meal}})
    console.log(user);
    req.flash('success', 'Meal Saved!')
    res.redirect('back')
  } catch(e){
    req.flash('error', e.message)
    res.redirect('meals/show')
  }
}


module.exports.renderMealPlan = async (req, res) => {
  const user = await User.findById(req.user._id);
  const sundayBreakfast = await SavedMeal.findById(user.sundaybreakfast);
  const sundayLunch = await SavedMeal.findById(user.sundaylunch);
  const sundayDinner = await SavedMeal.findById(user.sundaydinner);
  const mondayBreakfast = await SavedMeal.findById(user.mondaybreakfast);
  const mondayLunch = await SavedMeal.findById(user.mondaylunch);
  const mondayDinner = await SavedMeal.findById(user.mondaydinner);
  const tuesdayBreakfast = await SavedMeal.findById(user.tuesdaybreakfast);
  const tuesdayLunch = await SavedMeal.findById(user.tuesdaylunch);
  const tuesdayDinner = await SavedMeal.findById(user.tuesdaydinner);
  const wednesdayBreakfast = await SavedMeal.findById(user.wednesdaybreakfast);
  const wednesdayLunch = await SavedMeal.findById(user.wednesdaylunch);
  const wednesdayDinner = await SavedMeal.findById(user.wednesdaydinner);
  const thursdayBreakfast = await SavedMeal.findById(user.thursdaybreakfast);
  const thursdayLunch = await SavedMeal.findById(user.thursdaylunch);
  const thursdayDinner = await SavedMeal.findById(user.thursdaydinner);
  const fridayBreakfast = await SavedMeal.findById(user.fridaybreakfast);
  const fridayLunch = await SavedMeal.findById(user.fridaylunch);
  const fridayDinner = await SavedMeal.findById(user.fridaydinner);
  const saturdayBreakfast = await SavedMeal.findById(user.saturdaybreakfast);
  const saturdayLunch = await SavedMeal.findById(user.saturdaylunch);
  const saturdayDinner = await SavedMeal.findById(user.saturdaydinner);

  // res.send({ sundayBreakfast, sundayLunch, sundayDinner, mondayBreakfast, mondayLunch, mondayDinner, tuesdayBreakfast, tuesdayLunch, tuesdayDinner, wednesdayBreakfast, wednesdayLunch, wednesdayDinner, thursdayBreakfast, thursdayLunch, thursdayDinner, fridayBreakfast, fridayLunch, fridayDinner, saturdayBreakfast, saturdayLunch, saturdayDinner })


  res.render('meals/mealPlan', { sundayBreakfast, sundayLunch, sundayDinner, mondayBreakfast, mondayLunch, mondayDinner, tuesdayBreakfast, tuesdayLunch, tuesdayDinner, wednesdayBreakfast, wednesdayLunch, wednesdayDinner, thursdayBreakfast, thursdayLunch, thursdayDinner, fridayBreakfast, fridayLunch, fridayDinner, saturdayBreakfast, saturdayLunch, saturdayDinner })
};