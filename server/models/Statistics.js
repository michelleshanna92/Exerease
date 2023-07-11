const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const workoutStatistics = new Schema({
    workoutId: { 
        type: Schema.Types.ObjectId, 
        ref: 'Exercises' ,
        
    },
    userId: {
         type: Schema.Types.ObjectId, 
         ref: 'User' ,

    },
    age: {
        type: Number,
        ref: 'User',
    },
    weight: {
        type: Number,
        required: true
    },
    duration: { 
        type: Number, 
        required: true 
    },
    caloriesBurned: { 
        type: Number, 
        required: true 
    },
    date: {
         type: Date,
          default: Date.now 
    },
  });
  
  const WorkoutStatistics = mongoose.model('WorkoutStatistics', workoutStatistics);

  module.exports = WorkoutStatistics
  