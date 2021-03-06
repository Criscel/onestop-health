import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuth0 } from '@auth0/auth0-react';
import Navbar from "../Navbar/Navbar";
import { useParams } from "react-router";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";


import "./ViewPatient.css";

function ViewPatient() {

    const { isAuthenticated } = useAuth0();

    let history = useHistory();

    const { id } = useParams();
    console.log({ id });

    const [patient, setPatient] = useState({
        title: '',
        lastname: '',
        firstname: '',
        gender: '',
        mobile: '',
        allergies: '',
        dob: '',
        diabetic: ''
    })


    useEffect(() => {
        loadPatient();
    }, []);

    const loadPatient = async () => {
        const result = await axios.get(`http://localhost:3001/${id}`);
        setPatient(result.data)
        console.log(result, "Patient Data Retrieved")
    };

    const deletePatient = async () => {
        await axios.delete(`http://localhost:3001/${id}`);
        history.push("/lists")
    }


    return (
        isAuthenticated && (
            <div className="container-view">
                <Navbar />
                <div className="header">
                    <h3>PATIENT DATA</h3>
                    <div className="container-view">
                        <Form>
                            <Row className="patient">
                                <Col xs={3}>
                                    <label>Patient Id:</label>
                                    <input className='form-control' value={id} placeholder={id} readOnly></input>
                                </Col>
                            </Row>

                            <Row className="patient">
                                <Col>
                                    <label>Title: </label>
                                    <input className='form-control' value={patient.title} placeholder={patient.title} readOnly></input>
                                </Col>
                                <Col>
                                    <label>Last Name: </label>
                                    <input className='form-control' value={patient.lastname} placeholder={patient.lastname} readOnly></input>
                                </Col>
                                <Col>
                                    <label>First Name: </label>
                                    <input className='form-control' value={patient.firstname} placeholder={patient.firstname} readOnly></input>
                                </Col>
                            </Row>

                            <Row className="patient">
                                <Col>
                                    <label>Date of Birth: </label>
                                    <input className='form-control' value={patient.dob} placeholder={patient.dob} readOnly></input>
                                </Col>
                                <Col>
                                    <label>Gender: </label>
                                    <input className='form-control' value={patient.gender} placeholder={patient.gender} readOnly></input>
                                </Col>
                                <Col>
                                    <label>Mobile: </label>
                                    <input className='form-control' value={patient.mobile} placeholder={patient.mobile} readOnly></input>
                                </Col>
                            </Row>

                            <Row className="patient">
                                <Col>
                                    <label>Allergies: </label>
                                    <input className='form-control' value={patient.allergies} placeholder={patient.allergies} readOnly></input>
                                </Col>
                                <Col xs={3}>
                                    <label>Diabetic: </label>
                                    <input className='form-control' value={patient.diabetic} placeholder={patient.diabetic} readOnly></input>
                                </Col>
                            </Row>

                            <Button className="patientBtn" variant="danger" onClick={deletePatient} >DELETE</Button>

                            <Button className="patientBtn" variant="warning" onClick={() => {
                                history.push(`/editPatient/${id}`)
                            }}>EDIT</Button>

                            <Button className="patientBtn" variant="success" onClick={() => {
                                history.push(`/viewConsultation/${id}`)
                            }}>VIEW CONSULTATIONS</Button>

                        </Form>
                    </div>
                </div>
            </div>
        )
    )
}

export default ViewPatient;