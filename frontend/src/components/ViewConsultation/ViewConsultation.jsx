import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuth0 } from '@auth0/auth0-react';
import { useParams } from "react-router";
import Navbar from "../Navbar/Navbar";
import "./ViewConsultation.css"


function ViewPatient() {

    const { isAuthenticated } = useAuth0();

    const { id } = useParams();
    console.log({ id });

    const [consult, setConsult] = useState({
        date: '',
        patientId: '',
        lastname: '',
        firstname: '',
        illness: '',
        diagnosis: '',
        consultant: ''
    })

    useEffect(() => {
        loadConsultation();
    }, []);


    const loadConsultation = async () => {
        const consult = await axios.get(`http://localhost:3001/consults`);

        setConsult(consult.data);
    };
    console.log(consult, "Patients Consultation Retrieved")
    console.log(consult.patientId, "Patients ID Retrieved")

    const ArrayConsult = Array.from(consult);

    return (
        isAuthenticated && (
            <div className="header-consult">
                <Navbar />
                <h3>CONSULTATION HISTORY</h3>
                <div className="container-header">
                    <div className="row">
                        <div className="col-sm"><strong>
                            Date
                            </strong>
                        </div>
                        <div className="col-sm">
                            <strong>Presenting Illness</strong>
                        </div>
                        <div className="col-sm">
                        <strong>Diagnosis</strong>
                        </div>
                        <div className="col-sm">
                        <strong>Consultant</strong>
                        </div>
                    </div>
                </div>

                {ArrayConsult.map(consults =>
                    consults.patientId === `${id}` ?
                        <div className="container-consult">
                            <div className="row">
                                <div className="col-sm">
                                    {consults.date}
                                </div>
                                <div className="col-sm">
                                    {consults.illness}
                                </div>
                                <div className="col-sm">
                                    {consults.diagnosis}
                                </div>
                                <div className="col-sm">
                                    {consults.consultant}
                                </div>
                            </div>
                        </div>
                        :
                        <div className="col-sm">
                        </div>
                )}
                {console.log(ArrayConsult.patientId, "patientId")}
            </div>

        )
    )
}

export default ViewPatient;