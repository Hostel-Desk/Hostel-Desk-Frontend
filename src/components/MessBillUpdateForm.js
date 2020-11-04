import React, { Component } from 'react'
import { Form, Input, Button, Label, Col, Row, FormGroup, FormFeedback } from 'reactstrap';

class MessBillUpdateForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: (typeof this.props.mealBill === 'undefined') ? '' : this.props.mealBill.name,
            id: this.props.id,
            sid: (typeof this.props.mealBill === 'undefined') ? '' : this.props.mealBill.sid,
            rupees: (typeof this.props.mealBill === 'undefined') ? '' : this.props.mealBill.payment,
            branch: (typeof this.props.mealBill === 'undefined') ? '' : this.props.mealBill.branch,
            paymentduedate: (typeof this.props.mealBill === 'undefined') ? '' : this.props.mealBill.paymentDate.split('T')[0],
            touched: {
                name: false,
                sid: false,
                rupees: false,
                paymentduedate: false,
            }
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
        event.preventDefault();
        this.props.updateMealbill(this.state);
    }

    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }

    validate = (name, sid, paymentduedate, rupees) => {
        const errors = {
            name: '',
            rupees: '',
            paymentduedate: '',
            sid: ''
        }
        if (this.state.touched.name && name.length < 3)
            errors.name = 'Name should be of minimum length of 3 characters';
        else if (this.state.touched.name && name.length > 30)
            errors.name = 'Name should not be greater than 30 characters';

        if (this.state.touched.sid && sid.length !== 8) {
            errors.sid = 'Length of the student sid should be equal to 8';
        }
        if (this.state.touched.paymentduedate && paymentduedate.length === 0)
            errors.paymentduedate = 'Specify Date';
        if (this.state.touched.rupees && rupees.length === 0)
            errors.rupees = 'Specify Payment Amount';

        return errors;
    }

    render() {
        const errors = this.validate(this.state.name, this.state.sid, this.state.paymentduedate, this.state.rupees);
        return (
            <div>
                <div className="row">
                    <div className="col-12 container-fluid">
                        <h2 className="feature-heading ">Add Mess Bill</h2>
                        <hr className="feature-line" />
                    </div>
                </div>
                <div>
                    <h3>Update MessBill</h3>
                </div>
                <div >
                    <Form className="myForm" onSubmit={this.handleSubmit}>
                        <Row form>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="name">Full Name</Label>
                                    <Input required type="text" name="name" sid="name" placeholder="Name" value={this.state.name}
                                        onChange={this.handleInputChange} valid={errors.name === ''} invalid={errors.name !== ''} onBlur={this.handleBlur('name')} />
                                    <FormFeedback>{errors.name}</FormFeedback>
                                </FormGroup>
                            </Col>
                            <Col md={3}>
                                <FormGroup>
                                    <Label for="sid">Student Id</Label>
                                    <Input required type="number" name="sid" sid="sid" placeholder="Student Id" value={this.state.sid}
                                        onChange={this.handleInputChange} valid={errors.sid === ''} invalid={errors.sid !== ''} onBlur={this.handleBlur('sid')} />
                                    <FormFeedback>{errors.sid}</FormFeedback>
                                </FormGroup>
                            </Col>

                            <Col md={3}>
                                <FormGroup>
                                    <Label for="branch">Branch</Label>
                                    <Input required type="select" name="branch" sid="branch" value={this.state.branch} className="form-control"
                                        onChange={this.handleInputChange}>
                                        <option defaultValue>Select</option>
                                        <option>CSE</option>
                                        <option>ECE</option>
                                        <option>Electrical</option>
                                        <option>Mechanical</option>
                                        <option>Civil</option>
                                        <option>Mettalurgy</option>
                                        <option>Aerospace</option>
                                        <option>Production</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="rupees">Payment</Label>
                                    <Input required type="number" name="rupees" sid="rupees" value={this.state.rupees} placeholder="Amount"
                                        onBlur={this.handleBlur('rupees')} onChange={this.handleInputChange}
                                        valid={errors.rupees === ''} invalid={errors.rupees !== ''} />
                                    <FormFeedback>{errors.rupees}</FormFeedback>
                                </FormGroup>
                            </Col>
                            <Col md={3}>
                                <FormGroup>
                                    <Label for="paymentduedate">Payment Due Date</Label>
                                    <Input required type="date" name="paymentduedate" sid="paymentduedate" placeholder="Payment Due Date" value={this.state.paymentduedate}
                                        onBlur={this.handleBlur('paymentduedate')} onChange={this.handleInputChange}
                                        valid={errors.paymentduedate === ''} invalid={errors.paymentduedate !== ''} />

                                    <FormFeedback>{errors.paymentduedate}</FormFeedback>
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup row>
                            <Col md={{ size: 10 }}>
                                <Button type="submit" color="primary">
                                    Update
                                    </Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        )
    }
}

export default MessBillUpdateForm;