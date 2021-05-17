import React from "react";
import { Link  } from "react-router-dom"
import { useAuth0 } from '@auth0/auth0-react';
import "./Navbar.css"



function Navbar() {

    const { logout, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <nav className="navbar bg-light container">
                <img src="../assets/logo.png" alt="logo" />

                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/lists">Patient List</Link>
                <Link className="link" to="/create">Create Patient</Link>
                <Link className="link" to="/" onClick={() => logout()}>Logout</Link>

            </nav>
        )
    )
}

export default Navbar;