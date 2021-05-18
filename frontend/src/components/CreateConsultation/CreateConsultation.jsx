import React, { useState, useEffect } from "react";
import { useHistory,useParams } from "react-router";
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';
import "./CreateConsultation.css";
import Navbar from "../Navbar/Navbar";

function CreateConsultation() {
    const { user, isAuthenticated } = useAuth0();

    let history = useHistory();

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const showdate = new Date();
    const date = showdate.getDate() + ' ' + monthNames[showdate.getMonth()] + ' ' + showdate.getFullYear();

    const { id } = useParams();
    console.log(`${id}`)

    const [patient, setPatient] = useState({
        lastname: '',
        firstname: ''
    })

    useEffect(() => {
        loadPatient();
    }, [patient]);

    const loadPatient = async () => {
        const result = await axios.get(`http://localhost:3001/${id}`);
        setPatient(result.data)
        console.log(result)

    };

    const [input, setInput] = useState({
        date: date,
        patientId: {id},
        lastname: patient.lastname,
        firstname: patient.firstname,
        illness: '',
        diagnosis: '',
        consultant: ''
    })

    //Saving to Consultation table
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
            patientId: `${id}`,
            lastname: patient.lastname,
            firstname: patient.firstname,
            illness: input.illness,
            diagnosis: input.diagnosis,
            consultant: user.name
        }
        console.log(input);

        axios.post('http://localhost:3001/createConsultation', newConsultation)
        history.push(`/viewPatient/${id}`)
    }

    return (
        isAuthenticated && (
            <div className="container">
                <Navbar />
                <h3>CONSULTATION</h3>

                <form>
                    <div className="row-consult">
                        <div className="col-sm">
                            <div className='form-group'>
                                <p>{date}</p>
                                <label>Last Name:</label>
                                <input readOnly className='form-control' placeholder={patient.lastname}></input>
                            </div>
                            <div className='form-group'>
                                <label>First Name:</label>
                                <input readOnly className='form-control' placeholder={patient.firstname}></input>
                            </div>
                            <div className='form-group'>
                                <label>Presenting Illness: </label>
                                <input onChange={handleChange} name="illness" value={input.illness} autoComplete="off" className='form-control' placeholder="Presenting Illness"></input>
                            </div>
                            <div className='form-group'>
                                <label>Diagnosis: </label>
                                <input onChange={handleChange} name="diagnosis" value={input.diagnosis} autoComplete="off" className='form-control' placeholder="Diagnosis"></input>
                            </div>
                            <div className='form-group'>
                                <Button onClick={handleClick} variant="danger">SAVE</Button>
                            </div>
                            <div className='form-group'>
                                <label className="consultant">Consultant: </label>
                                <input readOnly id="consultant" className='form-control' name="consultant" value={user.name} placeholder={user.name}></input>

                            </div>

                        </div>
                    </div>

                </form>

            </div>
        )
    )
}

export default CreateConsultation;