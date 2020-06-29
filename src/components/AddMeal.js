import React, { Component } from 'react'
import {Form, Input, Button, Label, Col, Row, FormGroup} from 'reactstrap';
export default class AddMeal extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div>
                <div className="row">
                    <div className="col-12 container-fluid">
                        <h3 className="feature-heading ">Add/Delete Items</h3>
                        <hr className="feature-line" /> 
                    </div>  
                </div>
                <div >
                    <Form className="myForm">
                        <Row form>
                            <Col md={4}>
                            <FormGroup>
                                    <Label for="Gender">Day</Label>
                                    <select className="form-control" >
                                        <option defaultValue>Select</option>
                                        <option value="Monday">Monday</option>
                                        <option value="Tuesday">Tuesday</option>
                                        <option value="Wednesday">Wednesday</option>
                                        <option value="Thursday">Thursday</option>
                                        <option value="Friday">Friday</option>
                                        <option Value="Saturday">Saturday</option>
                                        <option value="Sunday">Sunday</option>
                                    </select>  
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                            <FormGroup>
                            <Label for="Gender">Time</Label>
                                    <select className="form-control" >
                                        <option defaultValue>Select</option>
                                        <option value="Breakfast">Breakfast</option>
                                        <option value="Lunch">Lunch</option>
                                        <option value="Snacks">Snacks</option>
                                        <option value="Dinner">Dinner</option>
                                    </select>  
                            </FormGroup>
                            </Col>
                            <Col md={4}>
                            <FormGroup>
                                <Label for="Designation">Item Name</Label>
                                <Input type="text" name="itemName" id="itemName" placeholder="Item Name" />
                            </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup row>
                            <Col md={{size: 10}}>
                                <Button type="submit" color="primary">
                                    Add
                                </Button> 
                                <Button type="submit" color="primary">
                                    Delete
                                </Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        )
    }
} 