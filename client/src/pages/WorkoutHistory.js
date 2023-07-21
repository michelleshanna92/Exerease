import React, { useState, useEffect } from "react";
import axios from "axios";

const data = {
  id: "",
  name: "",
  description: "",
  muscleType: "",
  duration: "",
  exercises: [
  { id: 1, name: "", sets: "", reps: "" },
  { id: 2, name: "", sets: "", reps: "" },
  { id: 3, name: "", sets: "", reps: "" },
  { id: 4, name: "", sets: "", reps: "" },
  { id: 5, name: "", sets: "", reps: "" },
  { id: 6, name: "", sets: "", reps: "" },
  { id: 7, name: "", sets: "", reps: "" },
  ],
  };
  
  const App = () => {
    const [selectedId, setSelectedId] = useState(data.exercises[0].id);
    const [selectedExercise, setSelectedExercise] = useState(data.exercises[0]);
    
    useEffect(() => {
    updateUI(selectedId);
    }, [selectedId]);

    const exerciseIdDropdownChangeHandler = (event) => {
      setSelectedId(event.target.value);
      };

      const updateUI = (selectedId) => {
        const selectedExercise = data.exercises.find(
        (exercise) => exercise.id === parseInt(selectedId, 10)
        );
        setSelectedExercise(selectedExercise);
        };

        return (
          <div>
          <h1>Workout Data</h1>
          <div>
          <label htmlFor="exerciseId">Exercise ID:</label>
          <select id="exerciseId" onChange={exerciseIdDropdownChangeHandler}>
          {data.exercises.map((exercise) => (
          <option key={exercise.id} value={exercise.id}>
          {exercise.id}
          </option>
          ))}
          </select>
          </div>
          <div>
          <label htmlFor="exerciseName">Exercise Name:</label>
          <input
          type="text"
          id="exerciseName"
          value={selectedExercise.name}
          readOnly
          />
          </div>
          <div>
          <label htmlFor="exerciseDescription">Exercise Description:</label>
          <input
          type="text"
          id="exerciseDescription"
          value={selectedExercise.description}
          readOnly
          />
          </div>
          <div>
          <label htmlFor="muscleType">Muscle Type:</label>
          <input
          type="text"
          id="muscleType"
          value={selectedExercise.muscleType}
          readOnly
          />
          </div>
<div>
<label htmlFor="exerciseDuration">Exercise Duration:</label>
<input
type="text"
id="exerciseDuration"
value={selectedExercise.duration}
readOnly
/>
</div>
<div>
<h3>Exercises:</h3>
<ul id="exercisesList">
{data.exercises.map((exercise) => (
<li key={exercise.id}>
{`ID: ${exercise.id}, Name: ${exercise.name}, Sets: ${exercise.sets}, Reps: ${exercise.reps}`}
</li>
))}
</ul>
</div>
</div>
);
};

export default App;