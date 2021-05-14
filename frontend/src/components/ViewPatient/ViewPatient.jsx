// import axios from "axios";
import React from "react";
import Navbar from "../Navbar/Navbar";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router";
// import { Form } from "react-bootstrap";
import * as Patient from "../PatientList/PatientList";

import "./ViewPatient.css";

function ViewPatient() {
    console.log(Patient)
    return (
        <div className="container">
            <Navbar />
            <div className="header">
            <h3>PATIENT DATA</h3>
            </div>
        </div>
    )

}

// function ViewPatient() {
//     const [patient, setPatient] = useState([{
//         title:'',
//         lastname: '',
//         firstname: ''
//     }]);

//     // useEffect(() => {
//     //     fetch("/lists/$").then(res => {
//     //         if (res.ok) {
//     //             // console.log(res);
//     //             return res.json()
//     //         }
//     //     }).then(jsonRes => setLists(jsonRes));
//     // })

//     const { lastname } = useParams();
//     useEffect(() => {
//         const loadPatient = async () => {
//             const res = await axios.get(`http://localhost:3001/lists/${lastname}`);
//             setPatient(res.data);
//             console.log(res,"view patient");
//         };

//         loadPatient();
//     }, []);

    

//     return (
//         <div className="container">
//             {/* {lists.map(patients => */}
//                 <div className="row">
//                     <div className="col-sm">
//                         {patient.title}
//                     </div>
//                     <div className="col-sm">
//                         {patient.lastname}
//                     </div>
//                     <div className="col-sm">
//                         {patient.firstname}
//                     </div>

//                 </div>
//             {/* )} */}
//         </div>
//     )
// }

export default ViewPatient;