import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

function WorkoutHistory() {
  const [workoutHistory, setWorkoutHistory] = useState([]);
  const [selectedWorkout, setSelectedWorkout] = useState(null);

  useEffect(() => {
    
    const WorkoutHistory = [
      {
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
      },
    ];

    setWorkoutHistory(WorkoutHistory);
  }, []);

  const handleSelectWorkoutHistory = (selectedWorkout) => {
    setSelectedWorkout(selectedWorkout);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: "2rem" }}>
      <h1>Workout History</h1>
      <div>
        {workoutHistory.map((workout) => (
          <div
            key={workout.id}
            onClick={() => handleSelectWorkoutHistory(workout)}
            style={{
              background: "#f4f4f4",
              padding: "1rem",
              marginBottom: "1rem",
              cursor: "pointer",
            }}
          >
            <p style={{ fontWeight: "bold" }}>{workout.name}</p>
            <p>{workout.description}</p>
            <p>Muscle Type: {workout.muscleType}</p>
            <p>Duration: {workout.duration}</p>
          </div>
        ))}
      </div>
      {selectedWorkout && (
        <div>
          <h2>Selected Workout</h2>
          <p style={{ fontWeight: "bold" }}>{selectedWorkout.name}</p>
          <p>{selectedWorkout.description}</p>
          <p>Muscle Type: {selectedWorkout.muscleType}</p>
          <p>Duration: {selectedWorkout.duration}</p>
        </div>
      )}
    </div>
  );
}

export default WorkoutHistory;
