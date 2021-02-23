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
    default: '603432126ed81f4e881fc183'
  },
  sundaylunch: {
    type: Schema.Types.ObjectId,
    ref: 'savedMeal',
    default: '603432126ed81f4e881fc183'
  },
  sundaydinner: {
    type: Schema.Types.ObjectId,
    ref: 'savedMeal',
    default: '603432126ed81f4e881fc183'
  },
  mondaybreakfast: {
    type: Schema.Types.ObjectId,
    ref: 'savedMeal',
    default: '603432126ed81f4e881fc183'
  },
  mondaylunch: {
    type: Schema.Types.ObjectId,
    ref: 'savedMeal',
    default: '603432126ed81f4e881fc183'
  },
  mondaydinner: {
    type: Schema.Types.ObjectId,
    ref: 'savedMeal',
    default: '603432126ed81f4e881fc183'
  },
  tuesdaybreakfast: {
    type: Schema.Types.ObjectId,
    ref: 'savedMeal',
    default: '603432126ed81f4e881fc183'
  },
  tuesdaylunch: {
    type: Schema.Types.ObjectId,
    ref: 'savedMeal',
    default: '603432126ed81f4e881fc183'
  },
  tuesdaydinner: {
    type: Schema.Types.ObjectId,
    ref: 'savedMeal',
    default: '603432126ed81f4e881fc183'
  },
  wednesdaybreakfast: {
    type: Schema.Types.ObjectId,
    ref: 'savedMeal',
    default: '603432126ed81f4e881fc183'
  },
  wednesdaylunch: {
    type: Schema.Types.ObjectId,
    ref: 'savedMeal',
    default: '603432126ed81f4e881fc183'
  },
  wednesdaydinner: {
    type: Schema.Types.ObjectId,
    ref: 'savedMeal',
    default: '603432126ed81f4e881fc183'
  },
  thursdaybreakfast: {
    type: Schema.Types.ObjectId,
    ref: 'savedMeal',
    default: '603432126ed81f4e881fc183'
  },
  thursdaylunch: {
    type: Schema.Types.ObjectId,
    ref: 'savedMeal',
    default: '603432126ed81f4e881fc183'
  },
  thursdaydinner: {
    type: Schema.Types.ObjectId,
    ref: 'savedMeal',
    default: '603432126ed81f4e881fc183'
  },
  fridaybreakfast: {
    type: Schema.Types.ObjectId,
    ref: 'savedMeal',
    default: '603432126ed81f4e881fc183'
  },
  fridaylunch: {
    type: Schema.Types.ObjectId,
    ref: 'savedMeal',
    default: '603432126ed81f4e881fc183'
  },
  fridaydinner: {
    type: Schema.Types.ObjectId,
    ref: 'savedMeal',
    default: '603432126ed81f4e881fc183'
  },
  saturdaybreakfast: {
    type: Schema.Types.ObjectId,
    ref: 'savedMeal',
    default: '603432126ed81f4e881fc183'
  },
  saturdaylunch: {
    type: Schema.Types.ObjectId,
    ref: 'savedMeal',
    default: '603432126ed81f4e881fc183'
  },
  saturdaydinner: {
    type: Schema.Types.ObjectId,
    ref: 'savedMeal',
    default: '603432126ed81f4e881fc183'
  },
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);

