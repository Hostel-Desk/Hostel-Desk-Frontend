import React, { Component } from 'react'
import {Form, Input, Button, Label, Col, Row, FormGroup, Select} from 'reactstrap';

class StudentPayment extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div>
                <div className="row">
                    <div className="col-12 container-fluid">
                        <h2 className="feature-heading ">Add Mess Bill</h2>
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
                                    <Label for="Id">Student Id</Label>
                                    <Input type="number" name="Id" id="id" placeholder="Student Id" />
                                </FormGroup>
                                </Col>  
                            
                                <Col md={3}>
                                <FormGroup>
                                    <Label for="Branch">Branch</Label>
                                    <select className="form-control">
                                            <option defaultValue>Select</option>
                                            <option value="CSE">CSE</option>
                                            <option value="ECE">ECE</option>
                                            <option value="Electrical">Electrical</option>
                                            <option value="Mechanical">Mechanical</option>
                                            <option value="Civil">Civil</option>
                                            <option value="Mettalurgy">Mettalurgy</option>
                                            <option value="Aerospace">Aerospace</option>
                                            <option value="Production">Production</option>
                                        </select>  
                                </FormGroup>
                                </Col>
                            </Row>
                            <Row form>
                                <Col md={4}>
                                <FormGroup>
                                    <Label for="rupees">Payment</Label>
                                    <Input type="number" name="rupees" id="rupees" placeholder="Payment" />
                                </FormGroup>
                                </Col>
                                <Col md={3}>
                                    <FormGroup>
                                        <Label for="paymentduedate">Payment Due Date</Label>
                                        <Input type="date" name="DpaymentduedateOB" id="paymentduedate" placeholder="Date Of Birth"/>
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

export default StudentPayment;