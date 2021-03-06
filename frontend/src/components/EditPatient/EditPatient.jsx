import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import "./EditPatient.css";
import Navbar from '../Navbar/Navbar';

function EditPatient() {
    const { isAuthenticated } = useAuth0();

    const [diabetic, setDiabetic] = useState(false);

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

    const { id } = useParams();

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

    useEffect(() => {
        loadPatient();
    }, []);

    function handleClick(event) {
        event.preventDefault();
        console.log(input);

        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        const formattedDate = date.getDate() + ' ' + monthNames[date.getMonth()] + ' ' + date.getFullYear();

        const updatedPatient = {
            title: input.title,
            lastname: input.lastname,
            firstname: input.firstname,
            gender: input.gender,
            mobile: input.mobile,
            allergies: input.allergies,
            dob: formattedDate,
            diabetic: diabetic
        }

        axios.put(`http://localhost:3001/update/${id}`, updatedPatient)
        alert('Patient '+ input.title + ' ' +input.firstname + ' ' +input.lastname +' is Updated!')
        console.log(updatedPatient,"updated patient");
    }

    const loadPatient = async () => {
        const result = await axios.get(`http://localhost:3001/${id}`);
        setInput(result.data)
        console.log(result)
    };

    return (
        isAuthenticated && (

            <div className="container">
                <Navbar />
                <h3> Edit Patient Page </h3>

                <Form>
                    <Row>
                        <Col xs={1} className='form-group' id="title">
                            <label>Title</label>
                            <input onChange={handleChange} name="title" value={input.title} autoComplete="off" className='form-control' placeholder="Title"></input>
                        </Col>

                        <Col className='form-group' id="dob">
                            <label>Date of Birth</label>
                            <DatePicker name="" dateFormat='dd MMM yyyy' showYearDropdown scrollableYearDropdown selected={date}
                                onChange={date => setDate(date)} value={date} />
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
                            <p>Diabetic: {diabetic ? "Yes" : "No"}</p>
                            <input type="checkbox" checked={diabetic} onChange={(event) => {setDiabetic(event.target.checked)}}></input>
                            <label> Yes</label>
                            {console.log(diabetic)}

                            <Button onClick={handleClick} variant="danger">UPDATE</Button>

                        </Col>
                    </Row>
                </Form>
            </div>
        )
    )
}

export default EditPatient;