import React from "react";
import { useEffect, useState } from "react";
// import { Form } from "react-bootstrap";

function ViewPatient() {
    const [lists, setLists] = useState([{
        title:'',
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
            {lists.map(patients =>
                <div className="row">
                    <div className="col-sm">
                        {patients.title}
                    </div>
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

export default ViewPatient;