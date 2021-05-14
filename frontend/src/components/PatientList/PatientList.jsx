import React from 'react';
import { useEffect, useState } from "react";
import PatientHeader from '../PatientHeader/PatientHeader';
// import PatientListButton from '../PatientListButton';
// import { Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

import "./PatientList.css";


function PatientList() {
    let history = useHistory();

    const [lists, setLists] = useState([{
        lastname: '',
        firstname: ''
    }])

    useEffect(() => {
        fetch("/lists").then(res => {
            if (res.ok) {
                // console.log(res);
                return res.json()
            }
        }).then(jsonRes => setLists(jsonRes));
    })

    //  handleViewClick = (event) => {
    //      event.preventDefault();
    //     // const { name } = event.target;
    //     console.log(event.target.name, 'handle view click',);
    // }

    return (
        <div className="container-list">
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

                    {/* <Button>
                    View
                    </Button> */}

                    <div className="col-sm">
                        <p type="button" className="view">View</p>
                    </div>

                    <div className="col-sm">
                        <p type="button" className="consult" onClick={() => {
                            history.push("/createConsultation")
                        }}>Add Consult</p>
                    </div>

                    {/* <PatientListButton /> */}
                </div>
            )}
        </div>
    )

}

export default PatientList;