import React, { Component } from 'react'
import { Form, Input, Button, Label, Col, Row, FormGroup, FormFeedback } from 'reactstrap';

class EmployeeUpdateForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            name: (typeof this.props.employee === 'undefined') ? '' : this.props.employee.employeeName,
            mobile: (typeof this.props.employee === 'undefined') ? '' : this.props.employee.mobileNo,
            gender: (typeof this.props.employee === 'undefined') ? '' : this.props.employee.gender,
            type: (typeof this.props.employee === 'undefined') ? '' : this.props.employee.employeeType,
            address: (typeof this.props.employee === 'undefined') ? '' : this.props.employee.hostel.name,
            designation: (typeof this.props.employee === 'undefined') ? '' : this.props.employee.designation,
            salary: (typeof this.props.employee === 'undefined') ? '' : this.props.employee.salary,
            joinDate: (typeof this.props.employee === 'undefined') ? '' : this.props.employee.joiningDate.split('T')[0],
            eid: (typeof this.props.employee === 'undefined') ? '' : this.props.employee.eid,
            touched: {
                name: false,
                mobile: false,
                gender: false,
                type: false,
                address: false,
                designation: false,
                salary: false,
                joinDate: false,
                eid: false
            }
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.updateEmployee(
            this.state
        );
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

    validate = (name, mobile, gender, type, address, designation, salary, joinDate, eid) => {
        const errors = {
            name: '',
            email: '',
            mobile: '',
            message: '',
            gender: '',
            type: '',
            address: '',
            designation: '',
            salary: '',
            joinDate: '',
            eid: ''

        }
        const reg = /^\d{10}$/;
        if (this.state.touched.mobile && !reg.test(mobile))
            errors.mobile = 'Enter a valid Mobile Number';
        if (this.state.touched.name && name.length < 3)
            errors.name = 'Name should be of minimum length of 3 characters';
        else if (this.state.touched.name && name.length > 30)
            errors.name = 'Name should not be greater than 30 characters';
        if (this.state.touched.type && type.length < 3)
            errors.type = 'Employee type should contain a minimum of 3 characters';
        if (this.state.touched.gender && gender.length < 3)
            errors.gender = 'Please select the gender';
        if (this.state.touched.address && address.length < 20)
            errors.address = 'Address should contain a minimum of 20 characters';
        if (this.state.touched.designation && designation.length < 3)
            errors.designation = 'Designation should contain a minimum of 3 characters';
        if (this.state.touched.salary && salary.length === 0)
            errors.salary = 'Please Enter the salary';
        if (this.state.touched.joinDate && joinDate.length === 0)
            errors.joinDate = 'Specify Joining Date';
        if (this.state.touched.eid && eid.length < 4)
            errors.eid = 'Enter a valid Employee Id';

        return errors;

    }

    render() {
        const errors = this.validate(this.state.name, this.state.mobile,
            this.state.gender, this.state.type, this.state.address, this.state.designation, this.state.salary, this.state.joinDate, this.state.eid);
        return (
            <div>
                <div className="row">
                    <div className="col-12 container-fluid">
                        <h2 className="feature-heading ">Update Employee Details</h2>
                        <hr className="feature-line" />
                    </div>
                </div>

                <div >
                    <Form className="myForm" onSubmit={this.handleSubmit}>
                        <Row form>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="name">Full Name</Label>
                                    <Input required type="text" name="name" id="name" value={this.state.name} placeholder="Name"
                                        onBlur={this.handleBlur('name')} onChange={this.handleInputChange}
                                        valid={errors.name === ''} invalid={errors.name !== ''} />
                                    <FormFeedback>{errors.name}</FormFeedback>
                                </FormGroup>
                            </Col>
                            <Col md={3}>
                                <FormGroup>
                                    <Label for="gender">Gender</Label>
                                    <Input required type="select" name="gender" id="gender" value={this.state.gender} className="form-control"
                                        onBlur={this.handleBlur('gender')} onChange={this.handleInputChange}
                                        valid={errors.gender === ''} invalid={errors.gender !== ''}>
                                        <option defaultValue>Select</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </Input>
                                    <FormFeedback>{errors.gender}</FormFeedback>
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="type">Employee Type</Label>
                                    <Input required type="text" name="type" id="type" value={this.state.type} placeholder="Employee Type"
                                        onBlur={this.handleBlur('type')} onChange={this.handleInputChange}
                                        valid={errors.type === ''} invalid={errors.type !== ''} />
                                    <FormFeedback>{errors.type}</FormFeedback>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="designation">Designation</Label>
                                    <Input required type="text" name="designation" value={this.state.designation} id="designation"
                                        onBlur={this.handleBlur('designation')} onChange={this.handleInputChange}
                                        valid={errors.designation === ''} invalid={errors.designation !== ''} placeholder="Designation" />
                                    <FormFeedback>{errors.designation}</FormFeedback>
                                </FormGroup>
                            </Col>
                            <Col md={3}>
                                <FormGroup>
                                    <Label for="joinDate">Joining Date</Label>
                                    <Input required type="date" name="joinDate" value={this.state.joinDate} id="joiningdate" placeholder="Joining Date" onBlur={this.handleBlur('joinDate')} onChange={this.handleInputChange}
                                        valid={errors.joinDate === ''} invalid={errors.joinDate !== ''} />
                                    <FormFeedback>{errors.joinDate}</FormFeedback>
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="address">Address</Label>
                                    <Input required type="textarea" name="address" value={this.state.address} id="address"
                                        onBlur={this.handleBlur('address')} onChange={this.handleInputChange} placeholder="Address"
                                        valid={errors.address === ''} invalid={errors.address !== ''} rows="1" />
                                    <FormFeedback>{errors.address}</FormFeedback>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="salary">Salary</Label>
                                    <Input required type="number" name="salary" id="salary" value={this.state.salary}
                                        onBlur={this.handleBlur('salary')} onChange={this.handleInputChange} placeholder="Salary"
                                        valid={errors.salary === ''} invalid={errors.salary !== ''}
                                        rows="1" />
                                    <FormFeedback>{errors.salary}</FormFeedback>
                                </FormGroup>
                            </Col>
                            <Col md={3}>
                                <FormGroup>
                                    <Label for="mobile">Mobile No.</Label>
                                    <Input required type="text" name="mobile" id="mobile" value={this.state.mobile}
                                        onBlur={this.handleBlur('mobile')} onChange={this.handleInputChange}
                                        valid={errors.mobile === ''} invalid={errors.mobile !== ''} placeholder="Mobile No." />
                                    <FormFeedback>{errors.mobile}</FormFeedback>
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="eid">Employee Id</Label>
                                    <Input required type="text" name="eid" value={this.state.eid} id="eid"
                                        onBlur={this.handleBlur('eid')} onChange={this.handleInputChange}
                                        valid={errors.eid === ''} invalid={errors.eid !== ''} placeholder="Employee Id" />
                                    <FormFeedback>{errors.eid}</FormFeedback>
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup row>
                            <Col md={{ size: 10 }}>
                                <Button type="submit" color="primary">
                                    Update
                                    </Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        )
    }
}

export default EmployeeUpdateForm;