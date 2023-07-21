// const mongoose = require("mongoose");
// const WorkoutHistory = require("../models/WorkoutHistory");

// mongoose.connect("mongodb://localhost/exereaseDB", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const workoutHistorySeed = [
//   {
//     date: new Date(),
//     type: "Running",
//     duration: 60,
//     calories: 500,
//   },
// ];

// const workoutData = [
//     {
//       id: "workout1",
//       name: "Full Body Blast",
//       description: "A high-intensity full-body workout.",
//       muscleType: "Full Body",
//       duration: "45",
//       exercises: [
//         { id: 1, name: "Squat", sets: "4", reps: "12" },
//         { id: 2, name: "Push-ups", sets: "3", reps: "10" },
//         { id: 3, name: "Deadlift", sets: "4", reps: "8" },
//         { id: 4, name: "Bent-over Rows", sets: "3", reps: "10" },
//         { id: 5, name: "Plank", sets: "3", reps: "30 sec" },
//         { id: 6, name: "Lunges", sets: "3", reps: "10 each leg" },
//         { id: 7, name: "Dumbbell Shoulder Press", sets: "3", reps: "10" },
//       ],
//     },
//     {
//       id: "workout2",
//       name: "Upper Body Sculpt",
//       description: "Target your upper body muscles.",
//       muscleType: "Upper Body",
//       duration: "60",
//       exercises: [
//         { id: 1, name: "Bench Press", sets: "4", reps: "8" },
//         { id: 2, name: "Pull-ups", sets: "3", reps: "6" },
//         { id: 3, name: "Bicep Curls", sets: "3", reps: "12" },
//         { id: 4, name: "Tricep Dips", sets: "3", reps: "10" },
//         { id: 5, name: "Shoulder Flyes", sets: "3", reps: "10" },
//         { id: 6, name: "Hammer Curls", sets: "3", reps: "10" },
//         { id: 7, name: "Reverse Flyes", sets: "3", reps: "12" },
//       ],
//     },
//     {
//       id: "workout3",
//       name: "Leg Day Burnout",
//       description: "Intense lower body workout.",
//       muscleType: "Lower Body",
//       duration: "75",
//       exercises: [
//         { id: 1, name: "Barbell Squats", sets: "5", reps: "8" },
//         { id: 2, name: "Romanian Deadlifts", sets: "4", reps: "10" },
//         { id: 3, name: "Lunges with Weights", sets: "4", reps: "10 each leg" },
//         { id: 4, name: "Leg Press", sets: "3", reps: "12" },
//         { id: 5, name: "Calf Raises", sets: "3", reps: "15" },
//         { id: 6, name: "Hip Thrusts", sets: "4", reps: "10" },
//         { id: 7, name: "Hamstring Curls", sets: "3", reps: "12" },
//       ],
//     },
//     {
//       id: "workout4",
//       name: "Cardio Blast",
//       description: "High-intensity cardio session.",
//       muscleType: "Cardio",
//       duration: "30",
//       exercises: [
//         { id: 1, name: "Jumping Jacks", sets: "3", reps: "30 sec" },
//         { id: 2, name: "Burpees", sets: "4", reps: "10" },
//         { id: 3, name: "Mountain Climbers", sets: "3", reps: "30 sec" },
//         { id: 4, name: "High Knees", sets: "3", reps: "30 sec" },
//         { id: 5, name: "Jump Rope", sets: "4", reps: "1 min" },
//         { id: 6, name: "Sprints", sets: "8", reps: "20 sec" },
//         { id: 7, name: "Box Jumps", sets: "4", reps: "10" },
//       ],
//     },
//     {
//       id: "workout5",
//       name: "Core Strengthening",
//       description: "Focus on building a strong core.",
//       muscleType: "Core",
//       duration: "90",
//       exercises: [
//         { id: 1, name: "Plank", sets: "3", reps: "1 min" },
//         { id: 2, name: "Russian Twists", sets: "3", reps: "20 each side" },
//         { id: 3, name: "Hanging Leg Raises", sets: "4", reps: "12" },
//         { id: 4, name: "Crunches", sets: "3", reps: "15" },
//         { id: 5, name: "Bicycle Crunches", sets: "3", reps: "20 each side" },
//         { id: 6, name: "Plank with Leg Lifts", sets: "3", reps: "12 each leg" },
//         { id: 7, name: "Side Plank", sets: "3", reps: "30 sec each side" },
//       ],
//     },
//   ];
  
