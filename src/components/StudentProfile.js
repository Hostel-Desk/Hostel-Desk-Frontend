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
            student: this.props.students.students.filter((stud)=>stud.sid == this.props.auth.user.username)[0]
        })
    }
    render(){
        //console.log(this.props.auth.user.username);
        let student = null;
        if(this.state.student != null) {
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
                <div className="row profile">
                    <div className="col-md-4 offset-3">
                        <br />
                        <h6>Name: {student!==null && student.studentName}</h6>
                        <br />
                        <h6>Student ID: {student!==null && student.sid}</h6>
                        <br />
                        <h6>Date of Birth: {student!==null && student.dob.split('T')[0]}</h6>
                        <br />
                        <h6>Nationality: {student!==null && student.nationality}</h6>
                    </div>
                    <div className="col-md-4">
                        <br />
                        <h6>Father's Name: {student!==null && student.fatherName}</h6>
                        <br />
                        <h6>Email: {student!==null && student.email}</h6>
                        <br />
                        <h6>Branch: {student!==null && student.branch}</h6>
                        <br />
                        <h6>Address: {student!==null && student.address}</h6>
                    </div>
                </div>
            </div>
        )
    }
}

export default StudentProfile;