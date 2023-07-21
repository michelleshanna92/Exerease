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
  