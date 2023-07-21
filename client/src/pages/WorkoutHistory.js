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