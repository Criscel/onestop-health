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
        <div className="col-sm">
            {/* <Button variant="info" onClick={handleViewCLick}>View</Button> */}


            <Button variant="warning" onClick={() => {
                history.push("/createConsultation")} }>Add Consultation</Button>
        </div>
    )

}

export default PatientListButton;