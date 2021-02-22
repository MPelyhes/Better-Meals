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
  mealplan: [{
    sunday: [{
      breakfast: [{   
        type: Schema.Types.ObjectId,
        ref: 'savedMeal'
      }],
      lunch: [{   
        type: Schema.Types.ObjectId,
        ref: 'savedMeal'
      }],
      dinner: [{   
        type: Schema.Types.ObjectId,
        ref: 'savedMeal'
      }],  
    }],
    monday: [{
      breakfast: [{   
        type: Schema.Types.ObjectId,
        ref: 'savedMeal'
      }],
      lunch: [{   
        type: Schema.Types.ObjectId,
        ref: 'savedMeal'
      }],
      dinner: [{   
        type: Schema.Types.ObjectId,
        ref: 'savedMeal'
      }],  
    }],
    tuesday: [{
      breakfast: [{   
        type: Schema.Types.ObjectId,
        ref: 'savedMeal'
      }],
      lunch: [{   
        type: Schema.Types.ObjectId,
        ref: 'savedMeal'
      }],
      dinner: [{   
        type: Schema.Types.ObjectId,
        ref: 'savedMeal'
      }],  
    }],
    wednesday: [{
      breakfast: [{   
        type: Schema.Types.ObjectId,
        ref: 'savedMeal'
      }],
      lunch: [{   
        type: Schema.Types.ObjectId,
        ref: 'savedMeal'
      }],
      dinner: [{   
        type: Schema.Types.ObjectId,
        ref: 'savedMeal'
      }],  
    }],
    thursday: [{
      breakfast: [{   
        type: Schema.Types.ObjectId,
        ref: 'savedMeal'
      }],
      lunch: [{   
        type: Schema.Types.ObjectId,
        ref: 'savedMeal'
      }],
      dinner: [{   
        type: Schema.Types.ObjectId,
        ref: 'savedMeal'
      }],  
    }],
    friday: [{
      breakfast: [{   
        type: Schema.Types.ObjectId,
        ref: 'savedMeal'
      }],
      lunch: [{   
        type: Schema.Types.ObjectId,
        ref: 'savedMeal'
      }],
      dinner: [{   
        type: Schema.Types.ObjectId,
        ref: 'savedMeal'
      }],  
    }],
    saturday: [{
      breakfast: [{   
        type: Schema.Types.ObjectId,
        ref: 'savedMeal'
      }],
      lunch: [{   
        type: Schema.Types.ObjectId,
        ref: 'savedMeal'
      }],
      dinner: [{   
        type: Schema.Types.ObjectId,
        ref: 'savedMeal'
      }],  
    }],
  }]
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);

