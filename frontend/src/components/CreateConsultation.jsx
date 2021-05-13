import React, { useState } from "react";
import axios from 'axios';
import { Button } from 'react-bootstrap';
import CurrentDate from "./CurrentDate";

function CreateConsultation() {
    const [input, setInput] = useState({
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
        console.log(input);

        const newConsultation = {
            illness: input.illness,
            diagnosis: input.diagnosis
        }

        axios.post('http://localhost:3001/createConsultation', newConsultation)
    }

    return (
        <div className="container">
            <h1>CONSULTATION</h1>
            <CurrentDate />
            <form>
                <div className="row">
                    <div className="col-sm">
                        <div className='form-group'>
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
                        </div>
                    </div>
                </div>
                <Button onClick={handleClick} variant="danger">SAVE</Button>
            </form>

        </div>
    )
}

export default CreateConsultation;