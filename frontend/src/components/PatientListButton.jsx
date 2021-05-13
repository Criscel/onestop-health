import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

function PatientListButton() {

    let history = useHistory();

    return (
        <div className="col-sm">
            <Button variant="info">View</Button>

            <Button variant="warning" onClick={() => {
                history.push("/CreateConsultation")} }>Add Consultation</Button>
        </div>
    )

}

export default PatientListButton;