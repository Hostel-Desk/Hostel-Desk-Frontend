import React from 'react'
import { Component } from 'react';

class StudentProfile extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div>
                <div className="row">
                    <div className="col-12 container-fluid">
                        <h2 className="feature-heading ">Profile</h2>
                        <hr className="feature-line" /> 
                    </div>  
                </div>
                <div className="row">
                    <div className="col-md-3" >
                        <img src="" alt="Student Photo" />
                    </div>
                    <div className="col-md-4 " >
                        <br />
                        <h4>Name:</h4>
                        <br />
                        <h4>Student ID:</h4>
                        <br />
                        <h4>Date of Birth:</h4>
                        <br />
                        <h4>Nationality:</h4>
                    </div>
                    <div className="col-md-4 " >
                        <br />
                        <h4>Father's Name:</h4>
                        <br />
                        <h4>Email:</h4>
                        <br />
                        <h4>Branch:</h4>
                        <br />
                        <h4>Address:</h4>
                    </div>
                </div>
            </div>
        )
    }
}

export default StudentProfile;