import React from 'react';
import "./PatientHeader.css";

function PatientHeader() {
    return (
        <div>
            <h3> Patient List Page </h3>
            <div className="row" id="header">
                <div className="col-sm">
                    <strong><p>Last Name</p></strong>
                </div>
                <div className="col-sm">
                    <strong><p>First Name</p></strong>
                </div>
                <div className="col-sm">
                    <strong><p>Date of Birth</p></strong>
                </div>
                <div className="col-sm">
                    <strong><p>Gender</p></strong>
                </div>
                <div className="col-sm">
                    <strong><p>Mobile</p></strong>
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