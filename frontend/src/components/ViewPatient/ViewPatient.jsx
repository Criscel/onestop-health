import axios from "axios";
import React, { useEffect, useState }  from "react";
import { useAuth0 } from '@auth0/auth0-react';
import Navbar from "../Navbar/Navbar";
import { useParams } from "react-router";
// import { Form } from "react-bootstrap";


import "./ViewPatient.css";

function ViewPatient() {

    const { isAuthenticated } = useAuth0();

    const [patient, setPatient] = useState({
        lastname: '',
        firstname: '',
        mobile: '',
        gender: '',
        dob: ''
    })

    const { _id } = useParams();

    useEffect(() => {
        loadPatient();
    }, []);

    const loadPatient = async () => {
        const result = await axios.get(`http://localhost:3001/lists/${_id}`);
        setPatient(result.data)
        console.log(result)
    };

    return (
        isAuthenticated && (
            <div className="container">
                <Navbar />
                <div className="header">
                    <h3>PATIENT DATA</h3>
                    <h1 className="display-4">Patient Id: {_id}</h1>
                </div>
            </div>
        )
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