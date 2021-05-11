import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CreatePatient from "./components/CreatePatient";
import PatientList from "./components/PatientList";

function App() {
  return (
    <div>
      <Router>
        <Navbar />

        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/lists">
          <PatientList />
        </Route>

        <Route path="/create">
          <CreatePatient />
        </Route>

      </Router>
    </div>
  );
}

export default App;
