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

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);

