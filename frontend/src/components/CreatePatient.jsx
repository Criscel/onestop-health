import React from 'react';
import { Button } from 'react-bootstrap';

function CreatePatient() {
    return (
        <div className= "container">
        <h1> Create Patient Page </h1>
        <br></br>
        <form>
            <div className="row">
                <div className="col-sm">
                    <div className='form-group'>
                        <input autoComplete="off" className='form-control' placeholder="Title"></input>
                    </div>
                    <div className='form-group'>
                        <input autoComplete="off" className='form-control' placeholder="Last Name"></input>
                    </div>

                    <div className='form-group'>
                        <input autoComplete="off" className='form-control' placeholder="First Name"></input>
                    </div>
                </div>
            </div>
            <Button variant="danger">SAVE</Button>

        </form>
        </div>
    )
}

export default CreatePatient;