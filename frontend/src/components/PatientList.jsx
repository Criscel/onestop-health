import React from 'react';
import { useEffect, useState } from "react";
import PatientHeader from './PatientHeader';
import PatientListButton from './PatientListButton';


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
            <PatientHeader />

            {lists.map(patients =>
                <div className="row">
                    <div className="col-sm">
                        {patients.lastname}
                    </div>
                    <div className="col-sm">
                        {patients.firstname}
                    </div>

                    <PatientListButton />
                </div>
            )}
        </div>
    )

}

export default PatientList;