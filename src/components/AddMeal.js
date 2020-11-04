import React, { Component } from 'react'
import { Form, Input, Button, Label, Col, Row, FormGroup } from 'reactstrap';
export default class AddMeal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            day: '',
            time: '',
            rows: [],
            id: (typeof this.props.meals[0] === 'undefined') ? '' : this.props.meals[0]._id,
            enabled: false
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
            rows: this.state.rows.concat('')
        })
    }

    handleDelete = (i) => {
        let values = [...this.state.rows];
        values.splice(i, 1);
        this.setState({ rows: values });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.updateMeal(this.state);
    }

    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }

    clickHandle = () => {
        if(this.state.day !== '' && this.state.time !== '') {
            const row = this.props.meals.filter((meal) => meal.day === this.state.day)[0];
            switch (this.state.time) {
                case 'breakfast': (
                    this.setState({
                        rows: row.breakfast
                    })
                ) 
                    break;
                case 'lunch': (
                    this.setState({
                        rows: row.lunch
                    })
                ) 
                    break;
                case 'evening snacks': (
                    this.setState({
                        rows: row.snacks
                    })
                ) 
                    break;
                case 'dinner': (
                    this.setState({
                        rows: row.dinner
                    })
                ) 
                    break;
                default:
                    break;
            }
            this.setState({
                enabled: true
            })
        }
        console.log(this.props);
    }

    render() {
        
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
                            <Col md={{ size: 3, offset: 2 }}>
                                <FormGroup>
                                    <Label for="day">Day</Label>
                                    <select className="form-control" name="day" id="day" value={this.state.day} onChange={this.handleInputChange} required>
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
                            <Col md={3}>
                                <FormGroup>
                                    <Label for="breakfast">Time</Label>
                                    <select className="form-control" name="time" id="time" value={this.state.time} onChange={this.handleInputChange} required>
                                        <option defaultValue>Select</option>
                                        <option value="breakfast">Breakfast</option>
                                        <option value="lunch">Lunch</option>
                                        <option value="evening snacks">Evening Snacks</option>
                                        <option value="dinner">Dinner</option>
                                    </select>
                                </FormGroup>
                            </Col>
                            <Col md={2} className="meal-col">
                                <Button onClick={() => {this.clickHandle()}}>Search</Button>
                            </Col>
                        </Row>
                        {
                            this.state.rows.map((el, i) => {
                                return (
                                    <Row form>
                                        <Col md={{ size: 6, offset: 2 }}>

                                            <FormGroup>
                                                <Label for="snacks">{`Row ${i + 1}`}</Label>
                                                <Row>
                                                    <Col md={{ size: 9 }}>
                                                        <Input required type="text" name={`${i}`} id={`${i}`} placeholder={`Add Item`} value={this.state.rows[i]}
                                                            onChange={this.handleInputChange1(i)} />
                                                    </Col>
                                                    <Col className="class-col">

                                                        <Button className="float-right class-col" color="primary" onClick={() => this.handleDelete(i)}>
                                                            Delete
                                                        </Button>
                                                    </Col>
                                                </Row>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                )
                            })
                        }
                        <FormGroup row>
                            <Col md={{ size: 10, offset: 2 }}>
                                {this.state.enabled && <Button color="primary" onClick={this.handleAddClick}>
                                    Add Row
                                </Button>}
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