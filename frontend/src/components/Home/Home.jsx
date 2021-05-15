import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import "./Home.css";
import Navbar from "../Navbar/Navbar"

const Home = () => {
    const { user, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
        <div>
            <Navbar />
            <div className="user">
                <h1> Welcome </h1>
                <h4> {user.name} </h4>
                <img src={user.picture} alt={user.give_name} />
            </div>
            <div className="background">

            </div>
            
        </div>
        )
    )
}

export default Home;