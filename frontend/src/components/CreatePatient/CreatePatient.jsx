import React, { useState } from 'react';
import axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Col, Form, Row } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import "./CreatePatient.css";
import Navbar from '../Navbar/Navbar';

function CreatePatient() {
    const { isAuthenticated } = useAuth0();

    const [date, setDate] = useState();
    
    const [input, setInput] = useState({
        title: '',
        lastname: '',
        firstname: '',
        gender: '',
        mobile: '',
        allergies: '',
        dob: '',
        diabetic: ''
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

        // setDate(prevInput => {
        //     return {
        //         ...prevInput,
        //         [name]: value
        //     }
        // })
    }


    function handleTickYes(event){
        event.preventDefault();
        const diabetic = "Yes"
        console.log(diabetic, 'yes');
    }

    function handleTickNo(event){
        event.preventDefault();
        const diabetic = "No"
        console.log(diabetic, 'no');
    }

    function handleClick(event) {
        event.preventDefault();
        console.log(input);

        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        const formattedDate = date.getDate()+' '+monthNames[date.getMonth() + 1]+' '+date.getFullYear();

        const newPatient = {
            title: input.title,
            lastname: input.lastname,
            firstname: input.firstname,
            gender: input.gender,
            mobile: input.mobile,
            allergies: input.allergies,
            dob: formattedDate,
            diabetic: input.diabetic
        }

        axios.post('http://localhost:3001/create', newPatient)
    }
    return (
        isAuthenticated && (

        <div className="container">
            <Navbar />
            <h3> Create Patient Page </h3>

            <Form>
                <Row>
                    <Col xs={1} className='form-group' id="title">
                        <label>Title</label>
                        <input onChange={handleChange} name="title" value={input.title} autoComplete="off" className='form-control' placeholder="Title"></input>
                    </Col>

                    <Col className='form-group' id="dob">
                        <label>Date of Birth</label>
                        <DatePicker name="" dateFormat='dd MMM yyyy' showYearDropdown scrollableYearDropdown selected={date}
                        onChange={date => setDate(date)} value={date}/>
                        {console.log(date)}
                    </Col>
                </Row>

                <Row>
                    <Col xs={5} className='form-group' id="lastname">
                        <input onChange={handleChange} name="lastname" value={input.lastname} autoComplete="off" className='form-control' placeholder="Last Name"></input>
                    </Col>

                    <Col className='form-group' id="gender">
                        <input onChange={handleChange} name="gender" value={input.gender} autoComplete="off" className='form-control' placeholder="Gender"></input>
                    </Col>
                </Row>

                <Row>
                    <Col xs={5} className='form-group' id="firstname">
                        <input onChange={handleChange} name="firstname" value={input.firstname} autoComplete="off" className='form-control' placeholder="First Name"></input>
                    </Col>
                    <Col className='form-group' id="mobile">
                        <input onChange={handleChange} name="mobile" value={input.mobile} autoComplete="off" className='form-control' placeholder="Mobile"></input>
                    </Col>
                </Row>

                <Row>
                    <Col className='form-group' id="allergies">
                        <input onChange={handleChange} name="allergies" value={input.allergies} autoComplete="off" className='form-control' placeholder="Allergies"></input>
                    </Col>
                </Row>

                <Row>
                    <Col className='form-group' id="diabetic">
                        <p>Diabetic:</p>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="yes" onChange={handleTickYes}/>
                            <label className="form-check-label">Yes</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="no" onChange={handleTickNo}/>
                            <label className="form-check-label">No</label>
                        </div>

                                <Button onClick={handleClick} variant="danger">SAVE</Button>
                    </Col>
                </Row>
            </Form>
        </div>
        )
    )
}

export default CreatePatient;