import React, { Component } from 'react'
import { Form, Input, Button, Label, Col, Row, FormGroup, FormFeedback } from 'reactstrap';

class SeatAllocationUpdateForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.id,
            block: (typeof this.props.seat === 'undefined') ? '' : this.props.seat.block,
            room: (typeof this.props.seat === 'undefined') ? '' : this.props.seat.room,
            rent: (typeof this.props.seat === 'undefined') ? '' : this.props.seat.monthlyRent,
            name: (typeof this.props.seat === 'undefined') ? '' : this.props.seat.name,

            touched: {
                id: false,
                name: false,
                block: false,
                room: false,
                rent: false
            }
        }

    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.updateSeatAllocation(this.state);
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

    validate = (name, block, room, rent) => {
        const errors = {
            name: '',
            block: '',
            room: '',
            rent: '',
        }

        if (this.state.touched.name && name.length < 3)
            errors.name = 'Name should be of minimum length of 3 characters';
        else if (this.state.touched.name && name.length > 30)
            errors.name = 'Name should not be greater than 30 characters';
        if (this.state.touched.block && block.length === 0)
            errors.block = 'Specify the block';
        if (this.state.touched.room && room.length === 0)
            errors.room = 'Specify the Room';
        if (this.state.touched.rent && rent.length === 0)
            errors.rent = 'Specify the Rent';

        return errors;
    }

    render() {
        console.log(this.props.seat);
        const errors = this.validate(this.state.name, this.state.block, this.state.room, this.state.rent);
        return (
            <div>
                <div className="row">
                    <div className="col-12 container-fluid">
                        <h2 className="feature-heading ">Update Seat Allocation</h2>
                        <hr className="feature-line" />
                    </div>
                </div>
                <div>
                    <Form className="myForm" onSubmit={this.handleSubmit}>
                        <Row form>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="name">Student Name</Label>
                                    <Input required type="text" name="name" id="name" value={this.state.name} placeholder="Name"
                                        onBlur={this.handleBlur('name')} onChange={this.handleInputChange}
                                        valid={errors.name === ''} invalid={errors.name !== ''} />
                                    <FormFeedback>{errors.name}</FormFeedback>
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="block">Block No</Label>
                                    <Input required type="text" name="block" id="Block" value={this.state.block} placeholder="Block No"
                                        onBlur={this.handleBlur('block')} onChange={this.handleInputChange}
                                        valid={errors.block === ''} invalid={errors.block !== ''} />
                                    <FormFeedback>{errors.block}</FormFeedback>
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="room">Room No</Label>
                                    <Input required type="text" name="room" id="room" value={this.state.room} placeholder="Room No"
                                        onBlur={this.handleBlur('room')} onChange={this.handleInputChange}
                                        valid={errors.room === ''} invalid={errors.room !== ''} />
                                    <FormFeedback>{errors.room}</FormFeedback>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="rent">Monthly Rent</Label>
                                    <Input required type="number" name="rent" id="rent" value={this.state.rent} placeholder="Monthly Rent"
                                        onBlur={this.handleBlur('rent')} onChange={this.handleInputChange}
                                        valid={errors.rent === ''} invalid={errors.rent !== ''} />
                                    <FormFeedback>{errors.rent}</FormFeedback>
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

export default SeatAllocationUpdateForm;