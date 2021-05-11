import React from "react";
import {Link} from "react-router-dom"
import "./Navbar.css"


function Navbar() {
    return <nav className="navbar bg-light container">
        <h4><Link className="link" to="/">Home</Link></h4>
        <h4><Link className="link" to="/lists">Patient List</Link></h4>
        <h4><Link className="link" to="/create">Create Patient</Link></h4>
    </nav>
} 

export default Navbar; 