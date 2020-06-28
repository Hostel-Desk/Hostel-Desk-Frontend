import React, { Component } from 'react'
import {Form, Input, Button, Label, Col, Row, FormGroup, Modal, ModalBody, ModalHeader} from 'reactstrap';
import {Link} from 'react-router-dom'

class Profile extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-12 container-fluid">
                        <h2 className="feature-heading ">Profile</h2>
                        <hr className="feature-line" /> 
                    </div>  
                </div>
                <div>
                    <h3>Account Settings</h3>
                </div>
                <div >
                    <Form className="myForm">
                            <Row form>
                                <Col md={5}>
                                <FormGroup>
                                    <Label for="Name">Name</Label>
                                    <Input type="text" name="Name" id="name" placeholder="Name" />
                                </FormGroup>
                                </Col>
                                <Col md={5}>
                                <FormGroup>
                                    <Label for="LoginId">Login ID</Label>
                                    <Input type="text" name="LoginId" id="LoginId" placeholder="LoginId" />
                                </FormGroup>
                                </Col>
                            </Row>
                            <Row form>
                                <Col md={5}>
                                    <FormGroup>
                                        <Label for="password">Password</Label>
                                        <Input type="password" name="password" id="password" placeholder="password"/>
                                    </FormGroup>
                                </Col>
                                <Col md={5}>
                                    <FormGroup>
                                        <Label for="password">Confirm Password</Label>
                                        <Input type="password" name="password" id="password" placeholder="password"/>
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
            </div>

        )
    }
}

export default Profile;