import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

function PatientListButton() {

    let history = useHistory();

    // function handleViewCLick(event) {
        
    //     event.preventDefault();
        
    //     const value = event.target.value;
    //     console.log(value);

    //     history.push("/viewPatient")
    // }

    return (
    <div>
        <div className="col-sm">
            <Button variant="info">View</Button>
        </div>

        <div className="col-sm">
            <Button variant="warning" onClick={() => {
                history.push("/createConsultation")} }>Add Consultation</Button>
        </div>

    </div>
    )

}

export default PatientListButton;