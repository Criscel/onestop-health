import React, { useState } from "react";
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';
import "./CreateConsultation.css";

function CreateConsultation() {
    const { isAuthenticated } = useAuth0();

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const showdate = new Date();
    const date = showdate.getDate() + ' ' + monthNames[showdate.getMonth() + 1] + ' ' + showdate.getFullYear();

    const [input, setInput] = useState({
        date: date,
        illness: '',
        diagnosis: ''
    })

    function handleChange(event) {
        const { name, value } = event.target;

        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleClick(event) {
        event.preventDefault();



        const newConsultation = {
            date: input.date,
            illness: input.illness,
            diagnosis: input.diagnosis
        }
        console.log(input);

        axios.post('http://localhost:3001/createConsultation', newConsultation)
    }

    return (
        isAuthenticated && (
            <div className="container">
                <h3>CONSULTATION</h3>

                <form>
                    <div className="row-consult">
                        <div className="col-sm">
                            <div className='form-group'>
                                <p>{date}</p>
                                <input readOnly className='form-control' placeholder="Patient's Last Name"></input>
                            </div>
                            <div className='form-group'>
                                <input readOnly className='form-control' placeholder="Patient's First Name"></input>
                            </div>
                            <div className='form-group'>
                                <input onChange={handleChange} name="illness" value={input.illness} autoComplete="off" className='form-control' placeholder="Presenting Illness"></input>
                            </div>
                            <div className='form-group'>
                                <input onChange={handleChange} name="diagnosis" value={input.diagnosis} autoComplete="off" className='form-control' placeholder="Diagnosis"></input>

                                <Button onClick={handleClick} variant="danger">SAVE</Button>
                            </div>

                        </div>
                    </div>

                </form>

            </div>
        )
    )
}

export default CreateConsultation;