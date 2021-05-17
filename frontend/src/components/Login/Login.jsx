import React from "react";
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';
import LoginNav from "../LoginNav/LoginNav";
import Navbar from "../Navbar/Navbar"
import "./Login.css";

function Login() {

    const { user, loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        !isAuthenticated ? (
            <div className="container">
                <LoginNav />
                <div className="pitch">
                    <h1>Patient Management</h1>
                    <h1>that works for you</h1>

                    <Button className="loginBtn" onClick={() => loginWithRedirect()}>
                        Log In
                    </Button>

                </div>
                <div className="bg">

                </div>
            </div>
        )
        :
        (<div>
        <Navbar />
        <div className="user">
            <h1> Welcome </h1>
            <h4> {user.name} </h4>
            <img src={user.picture} alt={user.give_name} />
        </div>
        <div className="background">

        </div>
        
    </div>)
    )
}

export default Login;