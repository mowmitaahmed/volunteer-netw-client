import React, { createContext, useState } from 'react';
import './App.css';
import Home from './components/Home/Home';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './components/Login/Login';
import VolunteerRegister from './components/VolunteerRegister/VolunteerRegister';
import EventTasks from './components/EventTasks/EventTasks';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AdminHome from './components/AdminHome/AdminHome';
import AdminEvent from './components/AdminEvent/AdminEvent';

export const selectedEventTasks = createContext();
function App() {
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    photo: '',
    error: '',
    success: false
  })
  const [selectedEvent, setSelectedEvent] = useState({
    name: 'Organize books at the library.'
  })
  const [eventList, setEventList] = useState([]);
  const [regData, setRegData] = useState({});
  return (
    <selectedEventTasks.Provider value={[user, setUser, selectedEvent, setSelectedEvent,eventList, setEventList,regData, setRegData]}>
      <Router>
        <Switch>
          <Route exact path="/">
              <Home />
          </Route>
          <Route path="/home">
              <Home></Home>
          </Route>
          <Route path="/login">
              <Login></Login>
          </Route>
          <Route path="/admin">
              <AdminHome></AdminHome>
          </Route>
          <Route path="/adminevent">
              <AdminEvent></AdminEvent>
          </Route>
          <PrivateRoute path="/vreg">
              <VolunteerRegister></VolunteerRegister>
          </PrivateRoute>
          <PrivateRoute path="/eventtasks">
            <EventTasks></EventTasks>
          </PrivateRoute>
        </Switch>
      </Router>
    </selectedEventTasks.Provider>
  );
}

export default App;
