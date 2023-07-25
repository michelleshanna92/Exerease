import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/WorkoutDashboard';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import Goals from './pages/Goals';
import WorkoutDashboard from './pages/WorkoutDashboard';
import WorkoutHistory from './pages/WorkoutHistory';
import WorkoutPlan from './pages/WorkoutPlan';;


// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div
          style={{
            backgroundImage: 'url(/workout-background1.jpg)', 
            backgroundSize: 'cover',
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
          }}
        >
          <Header />
          <div style={{ flex: '1' }} className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/profiles/:profileId" element={<Profile />} />
              <Route path="/goals" element={<Goals />} />
              <Route path="/workoutdashboard" element={<WorkoutDashboard />} />
              <Route path="/WorkoutHistory" element={<WorkoutHistory />} />
              <Route path="/WorkoutPlan" element={<WorkoutPlan />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
