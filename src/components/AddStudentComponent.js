import React, { Component } from 'react'
import { Form, Input, Button, Label, Col, Row, FormGroup, FormFeedback } from 'reactstrap';

class AddStudent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            id: '',
            mobile: '',
            dob: '',
            gender: '',
            email: '',
            branch: '',
            nationality: '',
            address: '',
            father: '',
            mother: '',
            Fnum: '',
            touched: {
                name: false,
                id: false,
                mobile: false,
                email: false,
                father: false,
                mother: false,
                Fnum: false,
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
        this.props.postStudent(this.state);
    }

    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }

    validate = (name, id, mobile, email, father, mother, Fnum) => {
        const errors = {
            name: '',
            id: '',
            mobile: '',
            email: '',
            father: '',
            mother: '',
            Fnum: ''
        }
        if (this.state.touched.name && name.length < 3)
            errors.name = 'Name should be of minimum length of 3 characters';
        else if (this.state.touched.name && name.length > 30)
            errors.name = 'Name should not be greater than 30 characters';

        if (this.state.touched.mother && mother.length < 3)
            errors.mother = 'Name should be of minimum length of 3 characters';
        else if (this.state.touched.mother && mother.length > 30)
            errors.mother = 'Name should not be greater than 30 characters';

        if (this.state.touched.father && father.length < 3)
            errors.father = 'Name should be of minimum length of 3 characters';
        else if (this.state.touched.father && father.length > 30)
            errors.father = 'Name should not be greater than 30 characters';

        if (this.state.touched.id && id.length !== 8) {
            errors.id = 'Length of the student id should be equal to 8';
        }

        const reg = /^\d{10}$/;
        if (this.state.touched.mobile && !reg.test(mobile))
            errors.mobile = 'Enter a valid Mobile Number';
        if (this.state.touched.Fnum && !reg.test(Fnum))
            errors.Fnum = 'Enter a valid Mobile Number';
        if (this.state.touched.email && email.split('').filter(x => x === '@').length !== 1)
            errors.email = 'Enter a valid email';

        return errors;
    }

    render() {
        const errors = this.validate(this.state.name, this.state.id, this.state.mobile,
            this.state.email, this.state.father, this.state.mother, this.state.Fnum);
        return (
            <div>
                <div className="row">
                    <div className="col-12 container-fluid">
                        <h2 className="feature-heading ">Add New Student</h2>
                        <hr className="feature-line" />
                    </div>
                </div>
                <div>
                    <h3>Student Details</h3>
                </div>
                <div >
                    <Form className="myForm" onSubmit={this.handleSubmit}>
                        <Row form>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="name">Full Name</Label>
                                    <Input required type="text" name="name" id="name" placeholder="Name" value={this.state.name}
                                        onChange={this.handleInputChange} valid={errors.name === ''} invalid={errors.name !== ''} onBlur={this.handleBlur('name')} />
                                    <FormFeedback>{errors.name}</FormFeedback>
                                </FormGroup>
                            </Col>
                            <Col md={3}>
                                <FormGroup>
                                    <Label for="id">Student Id(As Login Id)</Label>
                                    <Input required type="text" name="id" id="id" placeholder="Student Id" value={this.state.id}
                                        onChange={this.handleInputChange} valid={errors.id === ''} invalid={errors.id !== ''} onBlur={this.handleBlur('id')} />
                                    <FormFeedback>{errors.id}</FormFeedback>
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="mobile">Mobile No.</Label>
                                    <Input required type="text" name="mobile" id="mobile" placeholder="Mobile No." value={this.state.mobile}
                                        onChange={this.handleInputChange} valid={errors.mobile === ''} invalid={errors.mobile !== ''} onBlur={this.handleBlur('mobile')} />
                                    <FormFeedback>{errors.mobile}</FormFeedback>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="dob">Date of Birth</Label>
                                    <Input required type="date" name="dob" id="dob" placeholder="Date Of Birth" value={this.state.dob}
                                        onChange={this.handleInputChange} />
                                </FormGroup>
                            </Col>
                            <Col md={3}>
                                <FormGroup>
                                    <Label for="gender">Gender</Label>
                                    <Input required type="select" name="gender" id="gender" value={this.state.gender} className="form-control"
                                        onChange={this.handleInputChange} >
                                        <option defaultValue>Select</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="email">Email</Label>
                                    <Input required type="email" name="email" id="email" placeholder="Email" value={this.state.email}
                                        onChange={this.handleInputChange} valid={errors.email === ''} invalid={errors.email !== ''} onBlur={this.handleBlur('email')} />
                                    <FormFeedback>{errors.email}</FormFeedback>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="branch">Branch</Label>
                                    <Input required type="select" name="branch" id="branch" value={this.state.branch} className="form-control"
                                        onChange={this.handleInputChange}>
                                        <option defaultValue>Select</option>
                                        <option value="CSE">CSE</option>
                                        <option value="ECE">ECE</option>
                                        <option value="Electrical">Electrical</option>
                                        <option value="Mechanical">Mechanical</option>
                                        <option value="Civil">Civil</option>
                                        <option value="Mettalurgy">Mettalurgy</option>
                                        <option value="Aerospace">Aerospace</option>
                                        <option value="Production">Production</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md={3}>
                                <FormGroup>
                                    <Label for="nationality">Nationality</Label>
                                    <Input required type="text" name="nationality" id="nationality" placeholder="Nationality"
                                        onChange={this.handleInputChange} value={this.state.nationality} />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="address">Address</Label>
                                    <Input required type="textarea" name="address" id="address" placeholder="Address" rows="1"
                                        onChange={this.handleInputChange} value={this.state.address} />
                                </FormGroup>
                            </Col>
                        </Row>
                        <div>
                            <h3>Parent's Details</h3>
                        </div>
                        <Row form>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="father">Father's Name</Label>
                                    <Input required type="text" name="father" id="fathername" placeholder="Father's Name"
                                        value={this.state.father} valid={errors.father === ''} invalid={errors.father !== ''} onChange={this.handleInputChange} onBlur={this.handleBlur('father')} />
                                    <FormFeedback>{errors.father}</FormFeedback>
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="mother">Mother's Name</Label>
                                    <Input required type="text" name="mother" id="mothername" placeholder="Mother's Name"
                                        value={this.state.mother} valid={errors.mother === ''} invalid={errors.mother !== ''} onChange={this.handleInputChange} onBlur={this.handleBlur('mother')} />
                                    <FormFeedback>{errors.mother}</FormFeedback>
                                </FormGroup>
                            </Col>
                            <Col md={3}>
                                <FormGroup>
                                    <Label for="Fnum">Father's Mobile No.</Label>
                                    <Input required type="text" name="Fnum" id="fathermobile" onChange={this.handleInputChange}
                                        value={this.state.Fnum} valid={errors.Fnum === ''} invalid={errors.Fnum !== ''} placeholder="Father's Mobile No." onBlur={this.handleBlur('Fnum')} />
                                    <FormFeedback>{errors.Fnum}</FormFeedback>
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

export default AddStudent;