import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom"
import { useAuth0 } from '@auth0/auth0-react';
import "./LoginNav.css"


function LoginNav() {

    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        !isAuthenticated && (
            <nav className="navbar bg-light container">
            <Router>
                <img src="../assets/logo.png" alt="logo" />
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/lists">Patient List</Link>
                <Link className="link" to="/create">Create Patient</Link>
                <Link className="link" to="/" onClick={() => loginWithRedirect()}>Login</Link>
            </Router>
            </nav>
        )
    )
}

export default LoginNav;