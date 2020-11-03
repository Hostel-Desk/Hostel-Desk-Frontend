import React from 'react'
import { Component } from 'react';

class StudentProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            student: null
        }
    }
    componentDidMount() {
        this.setState({
            student: this.props.students.students.filter((stud) => stud.sid === this.props.auth.user.username)[0]
        })
    }
    render() {
        let student = null;
        if (this.state.student != null) {
            student = this.state.student
        }

        return (

            <div>
                <div className="row">
                    <div className="col-12 container-fluid">
                        <h2 className="feature-heading ">Profile</h2>
                        <hr className="feature-line" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header bg-primary text-white">
                                <h2>
                                    {student !== null && student.studentName.split(" ")[0]}'s Profile
                                </h2>
                            </div>
                            <div className="card-body">
                                <div className="row d-flex justify-content-start">

                                    <h5 className="card-title col-sm-3 ">Name</h5>
                                    <h5 className="card-title col-sm-3">{student !== null && student.studentName}</h5>


                                    <h5 className="card-title col-sm-3">Father's Name</h5>
                                    <h5 className="card-title col-sm-3">{student !== null && student.fatherName}</h5>

                                </div>

                                <div className="row d-flex justify-content-start">

                                    <h5 className="card-title col-sm-3 ">Student ID</h5>
                                    <h5 className="card-title col-sm-3">{student !== null && student.sid}</h5>


                                    <h5 className="card-title col-sm-3 ">Nationality</h5>
                                    <h5 className="card-title col-sm-3">{student !== null && student.nationality}</h5>


                                </div>

                                <div className="row d-flex justify-content-start">

                                    <h5 className="card-title col-sm-3 ">Date of Birth</h5>
                                    <h5 className="card-title col-sm-3">{student !== null && student.dob.split('T')[0].split("-")[2] + "-" + student.dob.split('T')[0].split("-")[1] + "-" + student.dob.split('T')[0].split("-")[0]}</h5>


                                    <h5 className="card-title col-sm-3">Branch</h5>
                                    <h5 className="card-title col-sm-3">{student !== null && student.branch}</h5>

                                </div>

                                <div className="row d-flex justify-content-start">

                                    <h5 className="card-title col-sm-3">Email</h5>
                                    <h5 className="card-title col-sm-3">{student !== null && student.email}</h5>


                                    <h5 className="card-title col-sm-3">Address</h5>
                                    <h5 className="card-title col-sm-3">{student !== null && student.address}</h5>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default StudentProfile;