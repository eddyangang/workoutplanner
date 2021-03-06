const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  
  exercises: [{
    type: {
      type: String,
      trim: true,
      required: "Workout type is required"
    },
  
    name: {
      type: String,
      trim: true,
      required: "workout name is Required"
    },
  
    duration: {
      type: Number
    },

    distance: {
      type: Number
    },
  
    weight: {
      type: Number
    },
  
    reps: {
      type: Number
    },
    
    sets: {
      type: Number
    }
  }]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
