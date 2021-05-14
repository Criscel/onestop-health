import React from 'react';
import "./PatientHeader.css";

function PatientHeader() {
    return (
        <div>
            <h3> Patient List Page </h3>
            <div className="row">
                <div className="col-sm">
                    <p>Last Name</p>
                </div>
                <div className="col-sm">
                    <p>First Name</p>
                </div>
                <div className="col-sm">
                </div>
                <div className="col-sm">
                </div>
            </div>
        </div>
    )
}

export default PatientHeader;