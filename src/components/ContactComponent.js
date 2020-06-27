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
            
            suject: '',
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
            <div className ="container">
                <div className="row">
                    <div className="col-12">
                        <h3>Contact Us</h3>
                        <hr/>
                     </div>  
                     </div> 
                     <div className="row row-content">
                    
                        <div className="col-12 col-md-5">
                        
                        <a href="http://maps.google.com/?q=Punjab Engineering College, Sector-12" target="_blank" ><i className="fa fa-map-marker fa-2x address info"></i></a><div className="text"><h4>Location:</h4><p>Punjab Engineering College, Sector-12,<br/>Chandigarh, 160012</p></div>
                         <a href="mailto:deansw@pec.edu.in"> <i className="fa fa-envelope-o info"></i></a><div className="text"><h4>Email:</h4><p>deansw@pec.edu.in</p></div>
                        <a href="tel:+1722753071"> <i className="fa fa-phone info"></i></a><div className="text"><h4>Call:</h4><p>+1722753071</p></div>

 
                        </div>
                        <div className="col-12 col-md-7">

                        <Form>
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
                    
                    <div className="row row content">
                    
                        <div className="row offset-sm-6 ">

                            <a  href="http://www.pec.ac.in"><i className="fa fa-globe social fa-2x"></i></a>
                            <div className='social'>
                        <a  href="https://www.facebook.com/PunjabEngineeringCollege/"><i className="fa fa-facebook fa-2x"></i></a>
                        </div>
                        <div className='social'><a  href="https://www.linkedin.com/edu/school?id=20011"><i className="fa fa-linkedin fa-2x"></i></a></div>
                        
                        <div className='social'><a  href="mailto:"><i className="fa fa-envelope-o fa-2x"></i></a></div>
                        
                    
                        </div>
                        </div>
                        </div>
                        
                           
                            
               
            
        );
    }
}
export default Contact;

