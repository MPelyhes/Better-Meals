const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const MealPlanSchema = new Schema({
  sundaybreakfast: {
    type: Schema.Types.ObjectId,
    ref: 'savedMeal',
  },
  sundaylunch: {
    type: Schema.Types.ObjectId,
    ref: 'savedMeal',
  },
  sundaydinner: {
    type: Schema.Types.ObjectId,
    ref: 'savedMeal',
  },
  mondaybreakfast: {
    type: Schema.Types.ObjectId,
    ref: 'savedMeal',
  },
  mondaylunch: {
    type: Schema.Types.ObjectId,
    ref: 'savedMeal',
  },
  mondaydinner: {
    type: Schema.Types.ObjectId,
    ref: 'savedMeal',
  },
  tuesdaybreakfast: {
    type: Schema.Types.ObjectId,
    ref: 'savedMeal',
  },
  tuesdaylunch: {
    type: Schema.Types.ObjectId,
    ref: 'savedMeal',
  },
  tuesdaydinner: {
    type: Schema.Types.ObjectId,
    ref: 'savedMeal',
  },
  wednesdaybreakfast: {
    type: Schema.Types.ObjectId,
    ref: 'savedMeal',
  },
  wednesdaylunch: {
    type: Schema.Types.ObjectId,
    ref: 'savedMeal',
  },
  wednesdaydinner: {
    type: Schema.Types.ObjectId,
    ref: 'savedMeal',
  },
  thursdaybreakfast: {
    type: Schema.Types.ObjectId,
    ref: 'savedMeal',
  },
  thursdaylunch: {
    type: Schema.Types.ObjectId,
    ref: 'savedMeal',
  },
  thursdaydinner: {
    type: Schema.Types.ObjectId,
    ref: 'savedMeal',
  },
  fridaybreakfast: {
    type: Schema.Types.ObjectId,
    ref: 'savedMeal',
  },
  fridaylunch: {
    type: Schema.Types.ObjectId,
    ref: 'savedMeal',
  },
  fridaydinner: {
    type: Schema.Types.ObjectId,
    ref: 'savedMeal',
  },
  saturdaybreakfast: {
    type: Schema.Types.ObjectId,
    ref: 'savedMeal',
  },
  saturdaylunch: {
    type: Schema.Types.ObjectId,
    ref: 'savedMeal',
  },
  saturdaydinner: {
    type: Schema.Types.ObjectId,
    ref: 'savedMeal',
  },
});

// const MealPlanSchema = new Schema({
//   sunday: [{
//     breakfast: {   
//       type: Schema.Types.ObjectId,
//       ref: 'savedMeal',
//       default: 'Nothing found'
//     },
//     lunch: {   
//       type: Schema.Types.ObjectId,
//       ref: 'savedMeal',
//       default: 'Nothing found'
//     },
//     dinner: {   
//       type: Schema.Types.ObjectId,
//       ref: 'savedMeal',
//       default: 'Nothing found'
//     },  
//   }],
//   monday: [{
//     breakfast: {   
//       type: Schema.Types.ObjectId,
//       ref: 'savedMeal',
//       default: 'Nothing found'
//     },
//     lunch: {   
//       type: Schema.Types.ObjectId,
//       ref: 'savedMeal',
//       default: 'Nothing found'
//     },
//     dinner: {   
//       type: Schema.Types.ObjectId,
//       ref: 'savedMeal',
//       default: 'Nothing found'
//     },  
//   }],
//   tuesday: [{
//     breakfast: {   
//       type: Schema.Types.ObjectId,
//       ref: 'savedMeal',
//       default: 'Nothing found'
//     },
//     lunch: {   
//       type: Schema.Types.ObjectId,
//       ref: 'savedMeal',
//       default: 'Nothing found'
//     },
//     dinner: {   
//       type: Schema.Types.ObjectId,
//       ref: 'savedMeal',
//       default: 'Nothing found'
//     },  
//   }],
//   wednesday: [{
//     breakfast: {   
//       type: Schema.Types.ObjectId,
//       ref: 'savedMeal',
//       default: 'Nothing found'
//     },
//     lunch: {   
//       type: Schema.Types.ObjectId,
//       ref: 'savedMeal',
//       default: 'Nothing found'
//     },
//     dinner: {   
//       type: Schema.Types.ObjectId,
//       ref: 'savedMeal',
//       default: 'Nothing found'
//     },  
//   }],
//   thursday: [{
//     breakfast: {   
//       type: Schema.Types.ObjectId,
//       ref: 'savedMeal',
//       default: 'Nothing found'
//     },
//     lunch: {   
//       type: Schema.Types.ObjectId,
//       ref: 'savedMeal',
//       default: 'Nothing found'
//     },
//     dinner: {   
//       type: Schema.Types.ObjectId,
//       ref: 'savedMeal',
//       default: 'Nothing found'
//     },  
//   }],
//   friday: [{
//     breakfast: {   
//       type: Schema.Types.ObjectId,
//       ref: 'savedMeal',
//       default: 'Nothing found'
//     },
//     lunch: {   
//       type: Schema.Types.ObjectId,
//       ref: 'savedMeal',
//       default: 'Nothing found'
//     },
//     dinner: {   
//       type: Schema.Types.ObjectId,
//       ref: 'savedMeal',
//       default: 'Nothing found'
//     },  
//   }],
//   saturday: [{
//     breakfast: {   
//       type: Schema.Types.ObjectId,
//       ref: 'savedMeal',
//       default: 'Nothing found'
//     },
//     lunch: {   
//       type: Schema.Types.ObjectId,
//       ref: 'savedMeal',
//       default: 'Nothing found'
//     },
//     dinner: {   
//       type: Schema.Types.ObjectId,
//       ref: 'savedMeal',
//       default: 'Nothing found'
//     },  
//   }],
// })

module.exports = mongoose.model('MealPlan', MealPlanSchema);