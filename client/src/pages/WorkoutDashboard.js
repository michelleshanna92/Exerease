import React, {useState} from 'react';
import { useQuery } from '@apollo/client';

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

import { GET_WORKOUT_HISTORY } from '../utils/queries'; 
import { GET_WORKOUT_GOAL } from '../utils/queries';

// Workout History data with Calendar
function WorkoutDashboard() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (info) => {
    setSelectedDate(info.date);
  };

  const { loading, error, data } = useQuery(GET_WORKOUT_HISTORY, {
    variables: { selectedDate: selectedDate?.toISOString() },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const card = {
    width: '20rem',
    color: 'white',
    backgroundColor: '#292929',
    margin: '20px',
    padding: '20px',
    border: '1px solid #ccc',
  
  }
 // Return Calendar with workouthistory data and dates
  return (
    <div className="card text-center">
    <div className="card">
      <h2>"Your WorkOut History!"</h2>

      <div>
        <h3>Calendar</h3>
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          weekends={true}
          events={
            [
              // Your workout events data
            ]
          }
          dateClick={handleDateClick}
        />
      </div>

      {selectedDate && (
        <div>
          <h2>Selected Date: {selectedDate.toISOString()}</h2>
          <h2>Workout History</h2>
          {/* Display past workout history based on the selected date */}
          {data && data.workoutHistory && (
            <ul>
              {data.workoutHistory.map((workout) => (
                <li key={workout.id}>
                  {workout.name} - Duration: {workout.duration} minutes
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  </div>
  );

 
  
};

 // return Profile card
const Profile = ({ user }) => {

  const { loading, error, data } = useQuery(GET_WORKOUT_GOAL, {
   // variables: { selectedDate: selectedDate?.toISOString() },
  });

  const cardTwo = {
    width: '20rem',
    color: 'white',
    backgroundColor: '#292929'
  };



  return (
    <><div className="card-hearder bg-primary text-white">
      <h1>Welcome, {user.name}!</h1>
    </div>
    <div className="cardTwo-body">

        <h2>Your Profile:</h2>
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Height:</strong> {user.height} cm
        </p>
        <p>
          <strong>Weight:</strong> {user.weight} kg
        </p>
        <p>
          <strong>Workout Goal:</strong> {user.workoutGoal}
        </p>
      </div>
      <div>
        <h3>Your Workout History:</h3>
        {<Calendar value={user.workoutHistory.map((workout) => new Date(workout.date))} />}

      </div></>
  
  
  );
}








export default WorkoutDashboard;