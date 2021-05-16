import React from 'react';
import { useEffect, useState } from "react";
import { useAuth0 } from '@auth0/auth0-react';
import PatientHeader from '../PatientHeader/PatientHeader';
// import { Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

import "./PatientList.css";
import Navbar from '../Navbar/Navbar';
import axios from 'axios';


function PatientList() {
    const { isAuthenticated } = useAuth0();

    let history = useHistory();

    // const [lists, setLists] = useState([{
    //     lastname: '',
    //     firstname: '',
    //     mobile: '',
    //     gender: '',
    //     dob: ''
    // }])

    // useEffect(() => {
    //     fetch("/lists").then(res => {
    //         if (res.ok) {
    //             // console.log(res);
    //             return res.json()
    //         }
    //     }).then(jsonRes => setLists(jsonRes));
    // })

    const [lists, setLists] = useState([]);

    useEffect(() => {
        loadPatients();
      }, []);

      const loadPatients = async () => {
        const result = await axios.get("http://localhost:3001/lists");
        setLists(result.data);
      };

    return (
        isAuthenticated && (
            <div className="container">
                <Navbar />
                <PatientHeader />

                {lists.map(patients =>
                    <div className="row" id="list">
                        <div className="col-sm">
                            {patients.lastname}
                        </div>
                        <div className="col-sm">
                            {patients.firstname}
                        </div>
                        <div className="col-sm">
                            {patients.dob}
                        </div>
                        <div className="col-sm">
                            {patients.gender}
                        </div>
                        <div className="col-sm">
                            {patients.mobile}
                        </div>

                        <div className="col-sm">
                                <p type="button" className="view" onClick={() => {
                                    history.push(`/viewPatient/${patients._id}`)
                                }}>View</p> 
                        </div>

                        <div className="col-sm">
                            <p type="button" className="consult" onClick={() => {
                                history.push("/createConsultation")
                            }}>Add Consult</p>
                        </div>

                    </div>
                )}
            </div>
        )
    )
}

export default PatientList;