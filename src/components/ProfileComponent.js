import React, { Component } from 'react'
import { Form, Input, Button, Label, Col, Row, FormGroup, FormFeedback } from 'reactstrap';

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            id: '',
            touched: {
                name: false,
                id: false
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
    }

    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }

    validate = (name, id) => {
        const errors = {
            name: '',
            id: ''
        }
        if (this.state.touched.name && name.length < 3)
            errors.name = 'Name should be of minimum length of 3 characters';
        else if (this.state.touched.name && name.length > 30)
            errors.name = 'Name should not be greater than 30 characters';

        if (this.state.touched.id && id.length !== 8) {
            errors.id = 'Length of the student id should be equal to 8';
        }
        return errors;
    }

    render() {
        const errors = this.validate(this.state.name, this.state.id);
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
                    <Form className="myForm" onSubmit={this.handleSubmit}>
                        <Row form>
                            <Col md={5}>
                                <FormGroup>
                                    <Label for="name">Name</Label>
                                    <Input required type="text" name="name" id="name" placeholder="Name" value={this.state.name}
                                        onChange={this.handleInputChange} valid={errors.name === ''} invalid={errors.name !== ''} onBlur={this.handleBlur('name')} />
                                    <FormFeedback>{errors.name}</FormFeedback>
                                </FormGroup>
                            </Col>
                            <Col md={5}>
                                <FormGroup>
                                    <Label for="id">Login ID</Label>
                                    <Input required type="text" name="id" id="id" placeholder="LoginId" value={this.state.id}
                                        onChange={this.handleInputChange} valid={errors.id === ''} invalid={errors.id !== ''} onBlur={this.handleBlur('id')} />
                                    <FormFeedback>{errors.id}</FormFeedback>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={5}>
                                <FormGroup>
                                    <Label for="password">Password</Label>
                                    <Input required type="password" name="password" id="password" placeholder="password" />
                                </FormGroup>
                            </Col>
                            <Col md={5}>
                                <FormGroup>
                                    <Label for="password">Confirm Password</Label>
                                    <Input required type="password" name="password" id="password" placeholder="password" />
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

export default Profile;