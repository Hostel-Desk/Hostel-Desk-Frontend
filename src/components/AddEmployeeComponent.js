import React, { Component } from 'react'
import {Form, Input, Button, Label, Col, Row, FormGroup} from 'reactstrap';

class AddEmployee extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <div className="row">
                    <div className="col-12 container-fluid">
                        <h2 className="feature-heading ">Add New Employee</h2>
                        <hr className="feature-line" /> 
                    </div>  
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
                                        <Label for="Gender">Gender</Label>
                                        <select className="form-control" >
                                            <option defaultValue>Select</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </select>  
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                <FormGroup>
                                    <Label for="Employee Type">Employee Type</Label>
                                    <Input type="text" name="Employee Type" id="employeetype" placeholder="Employee Type" />
                                </FormGroup>
                                </Col>
                            </Row>
                            <Row form>
                                <Col md={4}>
                                <FormGroup>
                                    <Label for="Designation">Designation</Label>
                                    <Input type="text" name="Designation" id="designation" placeholder="Designation" />
                                </FormGroup>
                                </Col>
                                <Col md={3}>
                                    <FormGroup>
                                        <Label for="Joining Date">Joining Date</Label>
                                        <Input type="date" name="Joining Date" id="joiningdate" placeholder="Joining Date"/>
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
                                    <Label for="Salary">Salary</Label>
                                    <Input type="text" name="Salary" id="salary" placeholder="Salary" rows="1" />
                                </FormGroup>
                                </Col>
                                <Col md={3}>
                                <FormGroup>
                                    <Label for="Employee's Mobile">Mobile No.</Label>
                                    <Input type="text" name="Employee's Mobile" id="employeemobile" placeholder="Mobile No." />
                                </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="Photo">Photo</Label>
                                        <Input type="file" name="Photo" id="photo" />
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

export default AddEmployee;