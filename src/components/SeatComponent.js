import React, { Component } from 'react'
import { Form, Input, Button, Label, Col, Row, FormGroup, FormFeedback } from 'reactstrap';
import SeatAllocationView from './SeatAllocationView';
class Seat extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            block: '',
            room: '',
            rent: '',
            touched: {
                name: false,
                block: false,
                room: false,
                rent: false
            }
        }

    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.postSeatallocation(this.state);
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
        const errors = this.validate(this.state.name, this.state.block, this.state.room, this.state.rent);
        return (
            <div>
                <div className="row">
                    <div className="col-12 container-fluid">
                        <h2 className="feature-heading ">Seat Allocation</h2>
                        <hr className="feature-line" />
                    </div>
                </div>
                <div>
                    <h4>Student's Seat Allocation</h4>
                </div>
                <div >
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
                                    <Input required type="text" name="room" id="room" vlaue={this.state.room} placeholder="Room No"
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
                <div className="row">
                    <div className="col-12 container-fluid">
                        <SeatAllocationView seats={this.props.seats} isLoading={this.props.isLoading} errMess={this.props.errMess} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Seat;