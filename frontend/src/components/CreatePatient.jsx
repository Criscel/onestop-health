import React, { useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

function CreatePatient() {
    const [input, setInput] = useState({
        title: '',
        lastname: '',
        firstname: ''
    })

    function handleChange(event) {
        // console.log(event.target)
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

        const newPatient = {
            title: input.title,
            lastname: input.lastname,
            firstname: input.firstname
        }

        axios.post('http://localhost:3001/create', newPatient)
    }
    return (
        <div className= "container">
        <h1> Create Patient Page </h1>
        <br></br>
        <form>
            <div className="row">
                <div className="col-sm">
                    <div className='form-group'>
                        <input onChange={handleChange} name="title" value={input.title} autoComplete="off" className='form-control' placeholder="Title"></input>
                    </div>
                    <div className='form-group'>
                        <input onChange={handleChange} name="lastname" value={input.lastname} autoComplete="off" className='form-control' placeholder="Last Name"></input>
                    </div>

                    <div className='form-group'>
                        <input onChange={handleChange} name="firstname" value={input.firstname} autoComplete="off" className='form-control' placeholder="First Name"></input>
                    </div>
                </div>
            </div>
            <Button onClick={handleClick} variant="danger">SAVE</Button>

        </form>
        </div>
    )
}

export default CreatePatient;