import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home";
import CreatePatient from "./components/CreatePatient/CreatePatient";
import PatientList from "./components/PatientList/PatientList";
import CreateConsultation from "./components/CreateConsultation";
import ViewPatient from "./components/ViewPatient";

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

        <Route path="/createConsultation">
          <CreateConsultation />
        </Route>

        <Route path="/viewPatient">
          <ViewPatient />
        </Route>

      </Router>
    </div>
  );
}

export default App;
