import React, { Component } from 'react'
import {Form, Input, Button, Label, Col, Row, FormGroup} from 'reactstrap';
export default class AddMeal extends Component {
    constructor(props) {
        super(props);

        this.state={
            day:'',
            time:'',
            rows:[]
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
    handleInputChange1 = (i) => (event) => {
        const values = [...this.state.rows];
        values[i] = event.target.value
        
        this.setState({
            rows: values
        })
    }

    handleAddClick = () => {
        this.setState({
            rows: [...this.state.rows, '']
        })
    }

    handleDelete = (i) => {
        let values = [...this.state.rows];
        values.splice(i,1);
        this.setState({ rows: values });
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
        console.log(this.state.rows);
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
                            <Col md={{size: 4, offset: 2}}>
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
                            <Label for="breakfast">Time</Label>
                                <select className="form-control" name="time" id="time" value={this.state.time} onChange={this.handleInputChange}  required>
                                    <option defaultValue>Select</option>
                                    <option value="Breakfast">Breakfast</option>
                                    <option value="Lunch">Lunch</option>
                                    <option value="Evening Snacks">Evening Snacks</option>
                                    <option value="Dinner">Dinner</option>
                                </select>  
                            </FormGroup>
                            </Col>
                        </Row>
                        {
                            this.state.rows.map((el, i) => {
                                return(
                                    <Row form>
                                        <Col md={{size: 6, offset: 2}}>
                                            <FormGroup>
                                                <Label for="snacks">{`Row ${i + 1}`}</Label>
                                                <Input required type="text" name={`${i}`} id={`${i}`} placeholder={`Add Item`} value={this.state.rows[i]}
                                                onChange={this.handleInputChange1(i)} />
                                            </FormGroup>
                                        </Col>
                                        <Button color="primary" onClick={(i = i) => this.handleDelete(i)}>
                                            Delete
                                        </Button>
                                    </Row>
                                )
                            })
                        }
                        <FormGroup row>
                            <Col md={{size: 10, offset: 2}}>
                                <Button color="primary" onClick={this.handleAddClick}>
                                    Add Row
                                </Button> 
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Button type="submit" color="primary">
                                Add Data
                            </Button>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        )
    }
} 