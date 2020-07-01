import React, { Component } from 'react';
import {Form, Input, Button, Label, Col, Row, FormGroup, FormFeedback} from 'reactstrap';

class SubmitComplaint extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            description: ''
        }
    }

    handleSubmit(event) {
        console.log("Current State is: " + JSON.stringify(this.state));
        alert("Current State is: " + JSON.stringify(this.state));
        event.preventDefault();
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
            touched: {...this.state.touched, [field]: true}
        });
    }

    validate = (title, description) => {
        const errors = {
            title: '',
            description: ''
        }
        if(this.state.touched.subject && subject.length < 10) 
            errors.title = 'Subject should contain a minimum of 10 characters';
        if(this.state.touched.subject && subject.length > 30) 
            errors.title = 'Subject should contain a maximum of 30 characters';
        if(this.state.touched.subject && subject.length < 50) 
            errors.description = 'Description should contain a minimum of 50 characters';

        return errors;
        
    }

    render(){
        const errors = this.validate(this.state.title, this.state.description); 
        return ( 
            <div>
                <div className="row">
                    <div className="col-12 container-fluid">
                        <h2 className="feature-heading ">Submit Complaint</h2>
                        <hr className="feature-line" /> 
                    </div>  
                </div>
                <div>
                    <Form className="myForm">
                        <Row form>
                            <Col md={5}>
                            <FormGroup>
                                <Label for="title">Title</Label>
                                <Input onBlur={this.handleBlur('title')} onChange={this.handleInputChange} type="text" 
                                name="title" id="title" placeholder="Title" value={this.state.title}/>
                                <FormFeedback>{errors.title}</FormFeedback>
                            </FormGroup>
                            </Col>
                            <Col md={5}>
                            <FormGroup>
                                <Label for="description">Description</Label>
                                <Input type="textarea" name="description" id="description" placeholder="Description"
                                onBlur={this.handleBlur('description')} onChange={this.handleInputChange} value={this.state.description} rows="1"/>
                                <FormFeedback>{errors.description}</FormFeedback>
                            </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup row>
                            <Col md={{size: 10}}>
                                <Button type="submit" color="primary">
                                    Submit
                                </Button> 
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        )
    }
}

export default SubmitComplaint;