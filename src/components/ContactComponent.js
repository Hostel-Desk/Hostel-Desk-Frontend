import React, { useState } from 'react';
import { Form, Input, Button, Label, Col, Row, FormGroup, FormFeedback } from 'reactstrap';
import { withRouter } from "react-router-dom";

function Contact(props) {

    const [initialState, setState] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        touched: {
            name: false,
            email: false,
            subject: false,
            message: false
        }
    })

    //const history = useHistory();
    const handleSubmit = (event) => {
        //const history = useHistory();
        const message = initialState.message+"%0AWith Regards%0A"+initialState.name + "%0A"+ initialState.email
        window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=tanveersodhi17@gmail.com&su=${initialState.subject}&body=${message}`); event.preventDefault();
    }
    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        setState({
            ...initialState,
            [name]: value
        });
    }
    const handleBlur = (field) => (evt) => {
        setState({
            ...initialState,
            touched: { ...initialState.touched, [field]: true }
        });
    }

    const validate = (name, email, subject, message) => {
        const errors = {
            name: '',
            email: '',
            subject: '',
            message: ''
        }
        if (initialState.touched.name && name.length < 3)
            errors.name = 'Name should be of minimum length of 3 characters';
        else if (initialState.touched.name && name.length > 30)
            errors.name = 'Name should not be greater than 30 characters';
        if (initialState.touched.email && email.split('').filter(x => x === '@').length !== 1)
            errors.email = 'Enter a valid email';
        if (initialState.touched.subject && subject.length < 10)
            errors.subject = 'Subject should contain a minimum of 10 characters';
        if (initialState.touched.subject && subject.length > 30)
            errors.subject = 'Subject should contain a maximum of 30 characters';
        if (initialState.touched.subject && message.length < 50)
            errors.message = 'Description should contain a minimum of 50 characters';

        return errors;

    }
    const errors = validate(initialState.name, initialState.email, initialState.subject, initialState.message);

    return (
        <div className="container-fluid contact">
            <div className="row">
                <div className="col-12 text-center  container-fluid">
                    <h2 className="feature-heading mt-4">Contact Us</h2>
                    <hr className="feature-line" />
                </div>
            </div>
            <div className="row row-content">

                <div className="col-12 col-md-4 offset-md-2">

                    <a href="http://maps.google.com/?q=Punjab Engineering College, Sector-12" target="_blank" rel="noreferrer noopener"><i className="fa fa-map-marker-alt fa-2x info"></i></a><div className="text"><p><strong>Location:</strong><br />Punjab Engineering College, Sector-12,<br />Chandigarh, 160012</p></div>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=deansw@pec.edu.in" target="_blank" rel="noreferrer noopener"> <i className="fa fa-envelope fa-2x info"></i></a><div className="text"><p><strong>Email:</strong><br />deansw@pec.edu.in</p></div>
                    <a href="tel:+1722753071" target="_blank" rel="noreferrer noopener"> <i className="fa fa-phone-alt fa-2x info"></i></a><div className="text"><p><strong>Call:</strong><br />+1722753071</p></div>
                </div>

                <div className="col-12 col-md-5">

                    <Form className="myForm" onSubmit={handleSubmit}>
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="name">Your Name</Label>
                                    <Input onChange={handleInputChange} type="text" name="name" id="name"
                                        valid={errors.name === ''} invalid={errors.name !== ''}
                                        onBlur={handleBlur('name')} placeholder="Your Name" required />
                                    <FormFeedback>{errors.name}</FormFeedback>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="email">Your Email</Label>
                                    <Input onChange={handleInputChange} type="email" name="email" id="email"
                                        valid={errors.email === ''} invalid={errors.email !== ''}
                                        onBlur={handleBlur('email')} placeholder="Your Email" required />
                                    <FormFeedback>{errors.email}</FormFeedback>
                                </FormGroup>
                            </Col>
                        </Row>

                        <FormGroup row>
                            <Col>
                                <Label for="subject">Subject</Label>
                                <Input onChange={handleInputChange} type="text" name="subject" id="subject"
                                    valid={errors.subject === ''} invalid={errors.subject !== ''}
                                    onBlur={handleBlur('subject')} placeholder="Subject" required />
                                <FormFeedback>{errors.subject}</FormFeedback>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Col>
                                <Label for="message">Message</Label>
                                <Input onChange={handleInputChange} onBlur={handleBlur('message')}
                                    valid={errors.message === ''} invalid={errors.message !== ''}
                                    type="textarea" name="message" id="message" placeholder="Message"
                                    rows="3" required />
                                <FormFeedback>{errors.message}</FormFeedback>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Col md={{ size: 10 }}>
                                <Button type="submit" color="primary">
                                    Send Message
                                    </Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        </div>

    );

}
export default withRouter(Contact);

