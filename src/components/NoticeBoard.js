import React, { Component } from'react'
import {Form, Input, Button, Label, Col, Row, FormGroup} from 'reactstrap';

class NoticeBoard extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div>
                <div className="row">
                    <div className="col-12 container-fluid">
                        <h2 className="feature-heading ">Notice Board</h2>
                        <hr className="feature-line" /> 
                    </div>  
                </div>
                <div >
                    <Form className="myForm">
                            <Row form>
                                <Col md={5}>
                                <FormGroup>
                                    <Label for="Title">Title</Label>
                                    <Input type="text" name="Title" id="title" placeholder="Title" />
                                </FormGroup>
                                </Col>
                                <Col md={5}>
                                <FormGroup>
                                    <Label for="Description">Description</Label>
                                    <Input type="textarea" name="Description" id="description" placeholder="Description" rows="1"/>
                                </FormGroup>
                                </Col>
                            </Row>
                            <FormGroup row>
                                <Col md={{size: 10}}>
                                    <Button type="submit" color="primary">
                                        Add
                                    </Button> 
                                </Col>
                            </FormGroup>
                    </Form>
                </div>
            </div>
        )
    }
}

export default NoticeBoard;