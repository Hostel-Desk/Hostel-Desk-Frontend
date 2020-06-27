import React, {Component} from 'react';
import {Breadcrumb, BreadcrumbItem, Form, Input, Button, Label, Col, Row, FormGroup} from 'reactstrap';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component{
    constructor(props){
        super(props);
        this.state={
            yourname: '',
           
            email: '',
            
            subject: '',
            message: ''
        }
    }

    handleSubmit(event) {
        console.log("Current State is: " + JSON.stringify(this.state));
        alert("Current State is: " + JSON.stringify(this.state));
        event.preventDefault();
    }

    render(){
        return(
            <div className =" contact">
                <div className="row">
                    <div className="col-12 text-center  container-fluid">
                        <h3 className="feature-heading">Contact Us</h3>
                        <hr className="feature-line" /> 
                     </div>  
                     </div> 
                     <div className="row row-content">
                    
                        <div className="col-12 col-md-4 offset-md-2">
                        
                        <a href="http://maps.google.com/?q=Punjab Engineering College, Sector-12" target="_blank" ><i className="fa fa-map-marker fa-2x info"></i></a><div className="text"><p><strong>Location:</strong><br/>Punjab Engineering College, Sector-12,<br/>Chandigarh, 160012</p></div>
                         <a href="mailto:deansw@pec.edu.in" target="_blank"> <i className="fa fa-envelope-o fa-2x info"></i></a><div className="text"><p><strong>Email:</strong><br/>deansw@pec.edu.in</p></div>
                        <a href="tel:+1722753071"target="_blank"> <i className="fa fa-phone fa-2x info"></i></a><div className="text"><p><strong>Call:</strong><br/>+1722753071</p></div>

 
                        </div>
                        <div className="col-12 col-md-5">

                        <Form className="myForm">
                            <Row form>
                                <Col md={6}>
                                <FormGroup>
                                    <Label for="Your Name">Your Name</Label>
                                    <Input type="text" name="Your Name" id="yourname" placeholder="Your Name" />
                                </FormGroup>
                                </Col>
                                <Col md={6}>
                                <FormGroup>
                                    <Label for="Email">Your Email</Label>
                                    <Input type="email" name="email" id="email" placeholder="Your Email"/>
                                </FormGroup>
                                </Col>
                            </Row>
                            <FormGroup row>
                                <Col>
                                <Label for="subject">Subject</Label>
                                <Input type="text" name="subject" id="subject" placeholder="Subject"/>
                                </Col>
                            </FormGroup>
                            
                            <FormGroup row>
                                <Col>
                                <Label for="message">Message</Label>
                                <Input type="textarea" name="message" id="message" placeholder="Message"
                                 rows="3"/>
                                </Col>
                            </FormGroup>
                            
                            <FormGroup row>
                                <Col md={{size: 10, offset: 4}}>
                                    <Button type="submit" color="primary">
                                        Send Message
                                    </Button>
                                </Col>
                            </FormGroup>
                            </Form>
                        </div>
                    </div>
                    
                    <div className="row contactF">
                    
                        <div className="row offset-sm-5 ">
                            
                            <a  href="http://www.pec.ac.in" className="social-icon"><i className="fa fa-globe social fa-2x"></i></a>
                            
                            
                        <a  href="https://www.facebook.com/PunjabEngineeringCollege/" className="social-icon"><i className="fa fa-facebook fa-2x"></i></a>
                        
                        <a  href="https://www.linkedin.com/edu/school?id=20011" className="social-icon"><i className="fa fa-linkedin fa-2x"></i></a>
                        
                        <a  href="mailto:" className="social-icon"><i className="fa fa-envelope-o fa-2x"></i></a>
                        
                    
                        </div>
                        </div>
                        </div>
                        
                           
                            
               
            
        );
    }
}
export default Contact;

