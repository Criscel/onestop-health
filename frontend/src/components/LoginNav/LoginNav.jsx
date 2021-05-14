import React from "react";
import {Link} from "react-router-dom"
import "./LoginNav.css"


function LoginNav() {
    return <nav className="navbar bg-light container">
        <img src="../assets/logo.png" alt="logo" />
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/lists">Patient List</Link>
        <Link className="link" to="/create">Create Patient</Link>
        <Link className="link" to="/login">Login</Link>
    </nav>
} 

export default LoginNav; 