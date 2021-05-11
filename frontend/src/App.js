import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Router>
        <Navbar />

        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/lists">
          PATIENT LIST
        </Route>

        <Route path="/create">
          CREATE PATIENT
        </Route>

      </Router>
    </div>
  );
}

export default App;
