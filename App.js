// src/App.js
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import React from "react";
import './App.css';
import SearchBar from "./component/SearchBar";
import Events from "./component/Events";
import EventDetails from "./EventDetails";
import Login from "./component/Login";
import Home from "./component/Home";
import Signup from "./component/SignUp";
import Dashboard from "./component/Dashboard";
import Teams from "./component/Teams"; 
import Header from "./component/Header";
import Match from "./component/Match";
import Schedule from "./component/Schedule";
import RCBPlayers from "./component/RCBPlayers";
import LSGPlayers from "./component/LSGPlayers";
import DCPlayers from "./component/DCPlayers";
import MIPlayers from "./component/MIPlayers";
import CSKPlayers from "./component/CSKPlayers";



const App = () => {
  return (
    <div className="App">
      <h1>INDIAN PREMIER LEAGUE</h1>
        
      <Router>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/EventDetails" element={<EventDetails />} />
          <Route path="/Teams" element={<Teams />} />
          <Route path="/Header" element={<Header />} />
          <Route path="/SearchBar" element={<SearchBar />} />
          <Route path="/Schedule" element={<Schedule />} />
          <Route path="/Match" element={<Match />} />
          <Route path="/RCBPlayers" element={<RCBPlayers />} />
          <Route path="/LSGPlayers" element={<LSGPlayers />} />
          <Route path="/DCPlayers" element={<DCPlayers />} />
          <Route path="/MIPlayers" element={<MIPlayers />} />
          <Route path="/CSKPlayers" element={<CSKPlayers />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
