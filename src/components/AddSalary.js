import React, { Component } from 'react'
import { Form, Input, Button, Label, Col, Row, FormGroup, FormFeedback } from 'reactstrap';

class EmployeeSalary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rupees: '',
            date: '',
            name: '',
            touched: {
                rupees: false,
                date: false,
                name: false,
            }
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.postSalary(this.state);

    }
    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }

    validate = (name, date, rupees) => {
        const errors = {
            rupees: '',
            date: '',
            name: ''
        }
        if (this.state.touched.name && name.length < 3)
            errors.name = 'Name should be of minimum length of 3 characters';
        else if (this.state.touched.name && name.length > 30)
            errors.name = 'Name should not be greater than 30 characters';
        if (this.state.touched.date && date.length === 0)
            errors.date = 'Specify Month';
        if (this.state.touched.rupees && rupees.length === 0)
            errors.rupees = 'Specify salary';

        return errors;
    }

    render() {
        const errors = this.validate(this.state.name, this.state.date, this.state.rupees);
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
                    <Form className="myForm" onSubmit={this.handleSubmit}>
                        <Row form>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="name">Employee Name</Label>
                                    <Input type="text" name="name" value={this.state.name} id="name" placeholder="Full Name"
                                        onBlur={this.handleBlur('name')} onChange={this.handleInputChange}
                                        valid={errors.name === ''} invalid={errors.name !== ''} />
                                    <FormFeedback>{errors.name}</FormFeedback>
                                </FormGroup>
                            </Col>


                            <Col md={4}>
                                <FormGroup>
                                    <Label for="date">Date</Label>
                                    <Input type="date" name="date" value={this.state.date} id="date" placeholder="Date"
                                        onBlur={this.handleBlur('date')} onChange={this.handleInputChange}
                                        valid={errors.date === ''} invalid={errors.date !== ''} />
                                    <FormFeedback>{errors.date}</FormFeedback>
                                </FormGroup>
                            </Col>


                            <Col md={4}>
                                <FormGroup>
                                    <Label for="rupees">Salary</Label>
                                    <Input type="number" name="rupees" value={this.state.rupees} id="rupees" placeholder="Amount"
                                        onBlur={this.handleBlur('rupees')} onChange={this.handleInputChange}
                                        valid={errors.rupees === ''} invalid={errors.rupees !== ''} />
                                    <FormFeedback>{errors.rupees}</FormFeedback>
                                </FormGroup>
                            </Col>


                        </Row>
                        <FormGroup row>
                            <Col md={{ size: 10 }}>
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