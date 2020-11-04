import React, { Component } from 'react'
import { Form, Input, Button, Label, Col, Row, FormGroup, FormFeedback } from 'reactstrap';
import NoticeView from './NoticeView';

class NoticeBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            touched: {
                title: false,
                description: false
            }
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.postNotice(this.state);
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

    validate = (title, description) => {
        const errors = {
            title: '',
            description: ''
        }
        if (this.state.touched.title && title.length < 10)
            errors.title = 'Subject should contain a minimum of 10 characters';
        if (this.state.touched.description && description.length < 30)
            errors.description = 'Subject should contain a minimum of 30 characters';

        return errors;

    }

    render() {
        const errors = this.validate(this.state.title, this.state.description);
        return (
            <div>
                <div className="row">
                    <div className="col-12 container-fluid">
                        <h2 className="feature-heading ">Notice Board</h2>
                        <hr className="feature-line" />
                    </div>
                </div>
                <div >
                    <Form className="myForm" onSubmit={this.handleSubmit}>
                        <Row form>
                            <Col md={5}>
                                <FormGroup>
                                    <Label for="title">Title</Label>
                                    <Input required onBlur={this.handleBlur('title')} onChange={this.handleInputChange} type="text"
                                        name="title" id="title" placeholder="Title" value={this.state.title}
                                        valid={errors.title === ''} invalid={errors.title !== ''} />
                                    <FormFeedback>{errors.title}</FormFeedback>
                                </FormGroup>
                            </Col>
                            <Col md={5}>
                                <FormGroup>
                                    <Label for="description">Description</Label>
                                    <Input required type="textarea" name="description" id="description" placeholder="Description"
                                        onBlur={this.handleBlur('description')} onChange={this.handleInputChange} value={this.state.description} rows="1"
                                        valid={errors.description === ''} invalid={errors.description !== ''} />
                                    <FormFeedback>{errors.description}</FormFeedback>
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup row>
                            <Col md={{ size: 10 }}>
                                <Button type="submit" color="primary">
                                    Submit
                                </Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
                <div className="col-12 container-fluid">
                    <NoticeView notices={this.props.notices} isLoading={this.props.isLoading} errMess={this.props.errMess} />
                </div>
            </div>
        )
    }
}

export default NoticeBoard;