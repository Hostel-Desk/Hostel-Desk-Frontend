import React, { Component } from 'react'
import {Form, Input, Button, Label, Col, Row, FormGroup, Modal, ModalBody, ModalHeader} from 'reactstrap';
import {Link} from 'react-router-dom'
import SeatAllocationView from './SeatAllocationView';
class Seat extends Component {
    constructor(props) {
        super(props);

    }

    render() {
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
                    <Form className="myForm">
                            <Row form>
                                <Col md={4}>
                                <FormGroup>
                                    <Label for="Name">Student Name</Label>
                                    <Input type="text" name="Name" id="name" placeholder="Name" />
                                </FormGroup>
                                </Col>
                                <Col md={4}>
                                <FormGroup>
                                    <Label for="Block">Block No</Label>
                                    <Input type="text" name="Block" id="Block" placeholder="Block No" />
                                </FormGroup>
                                </Col>
                                <Col md={4}>
                                <FormGroup>
                                    <Label for="Room">Room No</Label>
                                    <Input type="text" name="Room" id="Room" placeholder="Room No" />
                                </FormGroup>
                                </Col>
                            </Row>
                            <Row form>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="rent">Monthly Rent</Label>
                                        <Input type="number" name="rent" id="rent" placeholder="Monthly Rent"/>
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
                <div>
                    <SeatAllocationView seats={this.props.seats}/>
                </div>
            </div>

        )
    }
}

export default Seat;