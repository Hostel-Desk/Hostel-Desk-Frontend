import React, { Component } from 'react'
import {Form, Input, Button, Label, Col, Row, FormGroup} from 'reactstrap';
export default class AddMeal extends Component {
    constructor(props) {
        super(props);

        this.state={
            day:'',
            breakfast:'',
            lunch:'',
            snacks:'',
            dinner:''
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
                            <Label for="breakfast">Breakfast</Label>
                                <Input required type="text" name="breakfast" id="breakfast" placeholder="Breakfast" value={this.state.breakfast}
                                onChange={this.handleInputChange} />
                            </FormGroup>
                            </Col>
                            <Col md={4}>
                            <FormGroup>
                                <Label for="lunch">Lunch</Label>
                                <Input required type="text" name="lunch" id="lunch" placeholder="Lunch" value={this.state.lunch}
                                onChange={this.handleInputChange} />
                            </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={4}>
                            <FormGroup>
                            <Label for="snacks">Snacks</Label>
                                <Input required type="text" name="snacks" id="snacks" placeholder="Snacks" value={this.state.snacks}
                                onChange={this.handleInputChange} />
                            </FormGroup>
                            </Col>
                            <Col md={4}>
                            <FormGroup>
                                <Label for="dinner">Dinner</Label>
                                <Input required type="text" name="dinner" id="dinner" placeholder="Dinner" value={this.state.dinner}
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