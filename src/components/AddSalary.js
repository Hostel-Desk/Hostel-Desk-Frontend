import React, { Component } from 'react'
import {Form, Input, Button, Label, Col, Row, FormGroup, Select} from 'reactstrap';

class EmployeeSalary extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div>
                <div className="row">
                    <div className="col-12 container-fluid">
                        <h2 className="feature-heading ">Employee Salary Payment</h2>
                        <hr className="feature-line" /> 
                    </div>  
                </div>
                <div>
                    <h3>Add Employee Salary</h3>
                </div>
                <div >
                    <Form className="myForm">
                            <Row form>
                                <Col md={4}>
                                <FormGroup>
                                    <Label for="Name">Employee Name</Label>
                                    <Input type="text" name="Name" id="name" placeholder="Full Name" />
                                </FormGroup>
                                </Col>
                           
                            
                            <Col md={4}>
                                    <FormGroup>
                                        <Label for="salarymonth">Salary Month</Label>
                                        <Input type="month" name="salarymonth" id="salarymonth" placeholder="Month"/>
                                    </FormGroup>
                                </Col>
                                
                        
                                <Col md={4}>
                                <FormGroup>
                                    <Label for="rupees">Salary</Label>
                                    <Input type="number" name="rupees" id="rupees" placeholder="Amount" />
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

export default EmployeeSalary;