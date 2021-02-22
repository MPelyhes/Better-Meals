const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose')

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  meals: [{
    type: Schema.Types.ObjectId,
    ref: 'savedMeal'
  }],
  mealplan: [MealPlanSchema]d
});

const MealPlanSchema = new Schema({
  sunday: [{
    breakfast: {   
      type: Schema.Types.ObjectId,
      ref: 'savedMeal',
      default: 'Nothing found'
    },
    lunch: {   
      type: Schema.Types.ObjectId,
      ref: 'savedMeal',
      default: 'Nothing found'
    },
    dinner: {   
      type: Schema.Types.ObjectId,
      ref: 'savedMeal',
      default: 'Nothing found'
    },  
  }],
  monday: [{
    breakfast: {   
      type: Schema.Types.ObjectId,
      ref: 'savedMeal',
      default: 'Nothing found'
    },
    lunch: {   
      type: Schema.Types.ObjectId,
      ref: 'savedMeal',
      default: 'Nothing found'
    },
    dinner: {   
      type: Schema.Types.ObjectId,
      ref: 'savedMeal',
      default: 'Nothing found'
    },  
  }],
  tuesday: [{
    breakfast: {   
      type: Schema.Types.ObjectId,
      ref: 'savedMeal',
      default: 'Nothing found'
    },
    lunch: {   
      type: Schema.Types.ObjectId,
      ref: 'savedMeal',
      default: 'Nothing found'
    },
    dinner: {   
      type: Schema.Types.ObjectId,
      ref: 'savedMeal',
      default: 'Nothing found'
    },  
  }],
  wednesday: [{
    breakfast: {   
      type: Schema.Types.ObjectId,
      ref: 'savedMeal',
      default: 'Nothing found'
    },
    lunch: {   
      type: Schema.Types.ObjectId,
      ref: 'savedMeal',
      default: 'Nothing found'
    },
    dinner: {   
      type: Schema.Types.ObjectId,
      ref: 'savedMeal',
      default: 'Nothing found'
    },  
  }],
  thursday: [{
    breakfast: {   
      type: Schema.Types.ObjectId,
      ref: 'savedMeal',
      default: 'Nothing found'
    },
    lunch: {   
      type: Schema.Types.ObjectId,
      ref: 'savedMeal',
      default: 'Nothing found'
    },
    dinner: {   
      type: Schema.Types.ObjectId,
      ref: 'savedMeal',
      default: 'Nothing found'
    },  
  }],
  friday: [{
    breakfast: {   
      type: Schema.Types.ObjectId,
      ref: 'savedMeal',
      default: 'Nothing found'
    },
    lunch: {   
      type: Schema.Types.ObjectId,
      ref: 'savedMeal',
      default: 'Nothing found'
    },
    dinner: {   
      type: Schema.Types.ObjectId,
      ref: 'savedMeal',
      default: 'Nothing found'
    },  
  }],
  saturday: [{
    breakfast: {   
      type: Schema.Types.ObjectId,
      ref: 'savedMeal',
      default: 'Nothing found'
    },
    lunch: {   
      type: Schema.Types.ObjectId,
      ref: 'savedMeal',
      default: 'Nothing found'
    },
    dinner: {   
      type: Schema.Types.ObjectId,
      ref: 'savedMeal',
      default: 'Nothing found'
    },  
  }],
})
UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);

