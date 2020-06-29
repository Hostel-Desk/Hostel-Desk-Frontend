import React, { Component } from 'react'
import {Form, Input, Button, Label, Col, Row, FormGroup} from 'reactstrap';

class AddStudent extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div>
                <div className="row">
                    <div className="col-12 container-fluid">
                        <h2 className="feature-heading ">Add New Student</h2>
                        <hr className="feature-line" /> 
                    </div>  
                </div>
                <div>
                    <h3>Student Details</h3>
                </div>
                <div >
                    <Form className="myForm">
                            <Row form>
                                <Col md={4}>
                                <FormGroup>
                                    <Label for="Name">Full Name</Label>
                                    <Input type="text" name="Name" id="name" placeholder="Name" />
                                </FormGroup>
                                </Col>
                                <Col md={3}>
                                <FormGroup>
                                    <Label for="Id">Student Id(As Login Id)</Label>
                                    <Input type="text" name="Id" id="id" placeholder="Student Id" />
                                </FormGroup>
                                </Col>
                                <Col md={4}>
                                <FormGroup>
                                    <Label for="Mobile">Mobile No.</Label>
                                    <Input type="text" name="mobile" id="mobile" placeholder="Mobile No." />
                                </FormGroup>
                                </Col>
                            </Row>
                            <Row form>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="DOB">Date of Birth</Label>
                                        <Input type="date" name="DOB" id="dob" placeholder="Date Of Birth"/>
                                    </FormGroup>
                                </Col>
                                <Col md={3}>
                                    <FormGroup>
                                        <Label for="Gender">Gender</Label>
                                        <select className="form-control" >
                                            <option defaultValue>Select</option>
                                            <option>Male</option>
                                            <option>Female</option>
                                        </select>  
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="Email">Email</Label>
                                        <Input type="email" name="Email" id="email" placeholder="Email"/>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row form>
                                <Col md={4}>
                                <FormGroup>
                                    <Label for="Branch">Branch</Label>
                                    <select className="form-control">
                                            <option defaultValue>Select</option>
                                            <option>CSE</option>
                                            <option>ECE</option>
                                            <option>Electrical</option>
                                            <option>Mechanical</option>
                                            <option>Civil</option>
                                            <option>Mettalurgy</option>
                                            <option>Aerospace</option>
                                            <option>Production</option>
                                        </select>  
                                </FormGroup>
                                </Col>
                                <Col md={3}>
                                <FormGroup>
                                    <Label for="Nationality">Nationality</Label>
                                    <Input type="text" name="nationality" id="nationality" placeholder="Nationality" />
                                </FormGroup>
                                </Col>
                                <Col md={4}>
                                <FormGroup>
                                    <Label for="Address">Address</Label>
                                    <Input type="textarea" name="Address" id="address" placeholder="Address" rows="1" />
                                </FormGroup>
                                </Col>
                            </Row>
                            <Row form>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="Photo">Photo</Label>
                                        <Input type="file" name="Photo" id="photo" />
                                    </FormGroup>
                                </Col>
                            </Row>
                    </Form>
                </div>
                <div>
                    <h3>Parent's Details</h3>
                </div>
                <div >
                    <Form className="myForm">
                            <Row form>
                                <Col md={4}>
                                <FormGroup>
                                    <Label for="FatherName">Father's Name</Label>
                                    <Input type="text" name="FatherName" id="fathername" placeholder="Father's Name" />
                                </FormGroup>
                                </Col>
                                <Col md={4}>
                                <FormGroup>
                                    <Label for="Mother's Name">Mother's Name</Label>
                                    <Input type="text" name="Mother's Name" id="mothername" placeholder="Mother's Name" />
                                </FormGroup>
                                </Col>
                                <Col md={3}>
                                <FormGroup>
                                    <Label for="Father's Mobile">Father's Mobile No.</Label>
                                    <Input type="text" name="Father's Mobile" id="fathermobile" placeholder="Father's Mobile No." />
                                </FormGroup>
                                </Col>
                            </Row>
                            <FormGroup row>
                                <Col md={{size: 10}}>
                                    <Button type="submit" color="primary">
                                        Save
                                    </Button> 
                                </Col>
                            </FormGroup>
                    </Form>
                </div>
            </div>
        )
    }
}

export default AddStudent;