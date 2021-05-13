import React from 'react';

function PatientListButton() {
    return (
        <div className="col-sm">
            <button type="button" className="btn btn-info">View</button>

            <button type="button" className="btn btn-warning">Add Consultation</button>
        </div>
    )

}

export default PatientListButton;