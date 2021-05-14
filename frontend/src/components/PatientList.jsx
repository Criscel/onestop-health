import React from 'react';
import { useEffect, useState } from "react";
import PatientHeader from './PatientHeader/PatientHeader';
import PatientListButton from './PatientListButton';
import { Button } from 'react-bootstrap';


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

    //  handleViewClick = (event) => {
    //      event.preventDefault();
    //     // const { name } = event.target;
    //     console.log(event.target.name, 'handle view click',);
    // }

    return (
        <div className="container">
            <PatientHeader />

            {lists.map(patients =>
                <div className="row">
                    <div className="col-sm" name="lastname">
                        {patients.lastname}
                    </div>
                    <div className="col-sm" name="firstname">
                        {patients.firstname}
                    </div>
                    
                    <Button>
                    View
                    </Button>
                    
                    <PatientListButton />
                </div>
            )}
        </div>
    )

}

export default PatientList;