import React, { useState } from "react";
import axios from 'axios';
import { Button } from 'react-bootstrap';

function CreateConsultation() {

    const showdate = new Date();
        const date = showdate.getDate() + '/' + (showdate.getMonth()+1) + '/' + showdate.getFullYear();

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
        <div className="container">
            <h1>CONSULTATION</h1>
            <div>
            <input type="text" name="date" value={input.date} placeholder={date}></input>
            </div>
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