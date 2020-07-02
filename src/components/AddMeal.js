import React, { Component } from 'react'
import {Form, Input, Button, Label, Col, Row, FormGroup} from 'reactstrap';
export default class AddMeal extends Component {
    constructor(props) {
        super(props);

        this.state={
            day:'',
            time:'',
            itemName:''
        }

    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        console.log("State: " + JSON.stringify(this.state));
        alert("Current state: " + JSON.stringify(this.state));
        event.preventDefault();
    }
    handleBlur = (field) => (evt) => {
        this.setState({
            touched: {...this.state.touched, [field]: true}
        });
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
                    <Form className="myForm" onSubmit={this.handleSubmit}>
                        <Row form>
                            <Col md={4}>
                            <FormGroup>
                                    <Label  for="day">Day</Label>
                                    <select className="form-control" name="day" id="day" value={this.state.day} onChange={this.handleInputChange}  required>
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
                            <Label for="time">Time</Label>
                                    <select name="time" id="time" value={this.state.time} onChange={this.handleInputChange}  required className="form-control" >
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
                                <Label for="itemName">Item Name</Label>
                                <Input required type="text" name="itemName" id="itemName" placeholder="Item Name" value={this.state.itemName}
                                onChange={this.handleInputChange} />
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