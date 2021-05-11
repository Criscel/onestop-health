import React from 'react';
import { useEffect, useState } from "react";


function PatientList() {
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

    return (
        <div className="container">
            <h1> Patient List Page </h1>
            <div className="row">
                <div className="col-sm">
                    <h3>Last Name</h3>
                </div>
                <div className="col-sm">
                    <h3>First Name</h3>
                </div>
            </div>

            {lists.map(patients =>
                <div className="row">
                    <div className="col-sm">
                        {patients.lastname}
                    </div>
                    <div className="col-sm">
                        {patients.firstname}
                    </div>
                </div>
            )}
        </div>
    )

}

export default PatientList;