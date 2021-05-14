import React from "react";
import LoginNav from "../LoginNav/LoginNav";
import "./Login.css";

function Login() {
    return (
        <div className="container">
            <LoginNav />
        <div className="pitch">
            <h1>Patient Management</h1>
            <h1>that works for you</h1>

            <button type="button" to="/login">Login</button>
        </div>
        <div className="bg">
            
        </div>
        </div>
    )
}

export default Login;