import React from "react";
import { useAuth0 } from '@auth0/auth0-react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import CreatePatient from "./components/CreatePatient/CreatePatient";
import PatientList from "./components/PatientList/PatientList";
import CreateConsultation from "./components/CreateConsultation/CreateConsultation";
import ViewPatient from "./components/ViewPatient/ViewPatient";
import Login from "./components/Login/Login";
import EditPatient from "./components/EditPatient/EditPatient";

function App() {
  const { isLoading } = useAuth0();  

  if (isLoading) return <div>Loading... </div>

  return (
    <div>
      <Router>
        <div>
        <Switch>
      <Route path="/" exact>
          <Login />
        </Route>

        <Route path="/lists">
          <PatientList />
        </Route>

        <Route path="/create">
          <CreatePatient />
        </Route>

        <Route path="/createConsultation/:id">
          <CreateConsultation />
        </Route>

        <Route path="/viewPatient/:id">
          <ViewPatient />
        </Route>

        <Route path="/editPatient/:id">
          <EditPatient />
        </Route>
        </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
