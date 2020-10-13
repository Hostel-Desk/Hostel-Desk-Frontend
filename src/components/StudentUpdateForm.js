import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import {Form, Input, Button, Label, Col, Row, FormGroup, FormFeedback} from 'reactstrap';


function StudentUpdateForm(props) {
    const id = useParams();
    //console.log(typeof(id.id));
    const [initialState, setState] = useState({
        id: id.id,
        sid: '',
        fullname: '',
        mobile: '',
        program: '',
        father: '',
        mother: '',
        fnum: '',
        address: '',
        email: '',
        touched: {
            sid: false,
            fullname: false,
            mobile: false,
            program: false,
            father: false,
            mother: false,
            fnum: false,
            address: false,
            email: false
        }
    })

    const handleBlur = (field) => (event) => {
        setState({
            ...initialState,
            touched: {...initialState.touched, [field]: true}
        })
    }
    const handleInputChange = (event) => {
        const target = event.target;
        const value = event.value;
        const name = target.name;

        setState({
            ...initialState,
            [name]: value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.updateStudent(
            initialState
        );
    }
 
    const validate = (
        sid,
        fullname,
        mobile,
        program,
        father,
        mother,
        fnum,
        email,
        address
        ) => {
            const errors = {
                sid: '',
                fullname: '',
                mobile: '',
                program: '',
                mother: '',
                father: '',
                fnum: '',
                email: '',
                address: ''
            }

            if(initialState.touched.sid && sid.length != 8)
                errors.sid = 'Sid should be of 8 characters';
            if(initialState.touched.fullname && fullname.length < 3 )
                errors.fullname = 'Name should be greater than 3 characters';
            if(initialState.touched.program && program.length < 3)
                errors.program = 'Program should be of minimum length of 3 characters';
            if(initialState.touched.mother && mother.length > 30 || mother.length < 3)
                errors.mother = 'Name should not be greater than 30 characters and smaller than 3 characters';
            if(initialState.touched.father && father.length > 30 || father.length < 3)
                errors.mother = 'Name should not be greater than 30 characters and smaller than 3 characters';
            if(initialState.touched.address && address.length < 5 || address.length > 50) 
                errors.address = 'Address length should lie between 5 and 50 characters'
            const reg = /^\d{10}$/;
            if(initialState.touched.mobile && !reg.test(mobile)) 
                errors.mobile = 'Enter a valid Mobile Number';
            if(initialState.touched.fnum && !reg.test(fnum)) 
                errors.fnum = 'Enter a valid Mobile Number';
            if(initialState.touched.email && email.split('').filter(x=>x === '@').length!=1)
                errors.email = 'Enter a valid email';
            
            return errors;
        }

    const errors = validate(
        initialState.sid,
        initialState.fullname,
        initialState.mobile,
        initialState.program,
        initialState.mother,
        initialState.father,
        initialState.fnum,
        initialState.email,
        initialState.address);
    return (
        <div>
            <div className="row">
                <div className="col-12 container-fluid">
                    <h2 className="feature-heading ">Update Student Details</h2>
                    <hr className="feature-line" /> 
                </div>  
            </div>
            <Form className="myForm" onSubmit={handleSubmit}>
                    <Row form>
                      <Col md={6}>
                  <FormGroup>
                                <Label htmlFor="sid">SID</Label>
                                <Input type="text" id="sid" name="sid"
                                    value={initialState.username}
                                    onChange={handleInputChange} valid={errors.sid === ''} invalid={errors.sid !== ''} onBlur={handleBlur('sid')} />
                                    <FormFeedback>{errors.sid}</FormFeedback>
                            </FormGroup>
                            </Col>
                            <Col md={6}>
                  <FormGroup>
                    
                                <Label htmlFor="fullname">Fullname</Label>
                                <Input type="text" id="fullname" name="fullname"
                                    value={initialState.fullname}
                                    onChange={handleInputChange} valid={errors.fullname === ''} invalid={errors.fullname !== ''} onBlur={handleBlur('fullname')} />
                                <FormFeedback>{errors.fullname}</FormFeedback>
                            </FormGroup>
                            </Col>
                            </Row>
                            <Row form>
                              <Col md={6}>
                            <FormGroup>
                                <Label htmlFor="mobile">Mobile No.</Label>
                                <Input type="text" id="mobile" name="mobile"
                                    value={initialState.mobile}
                                    onChange={handleInputChange} valid={errors.mobile === ''} invalid={errors.mobile !== ''} onBlur={handleBlur('mobile')} />
                                <FormFeedback>{errors.mobile}</FormFeedback>
                            </FormGroup>
                            </Col>
                            <Col md={6}>
                            <FormGroup>
                                <Label htmlFor="program">Program</Label>
                                <Input type="text" id="program" name="program"
                                    value={initialState.program}
                                    onChange={handleInputChange} valid={errors.sid === ''} invalid={errors.sid !== ''} onBlur={handleBlur('program')} />
                                <FormFeedback>{errors.program}</FormFeedback>
                            </FormGroup>
                            </Col>
                            </Row>
                            <Row form>
                              <Col md={6}>
                            <FormGroup>
                                <Label htmlFor="father">Father Name</Label>
                                <Input type="text" id="father" name="father"
                                    value={initialState.father}
                                    onChange={handleInputChange} valid={errors.father === ''} invalid={errors.father !== ''} onBlur={handleBlur('father')} />
                                <FormFeedback>{errors.father}</FormFeedback>
                            </FormGroup>
                            </Col>
                            
                            <Col md={6}>
                            <FormGroup>
                                <Label htmlFor="fnum">Father Mobile</Label>
                                <Input type="text" id="fnum" name="fnum"
                                    value={initialState.fnum}
                                    onChange={handleInputChange} valid={errors.fnum === ''} invalid={errors.fnum !== ''} onBlur={handleBlur('fnum')} />
                                <FormFeedback>{errors.fnum}</FormFeedback>
                            </FormGroup>
                            </Col>
                            </Row>
                            <Row>
                            <Col md={6}>
                            <FormGroup>
                                <Label htmlFor="mother">Mother Name</Label>
                                <Input type="text" id="mother" name="mother"
                                    value={initialState.mother}
                                    onChange={handleInputChange} valid={errors.mother === ''} invalid={errors.mother !== ''} onBlur={handleBlur('mother')} />
                                <FormFeedback>{errors.mother}</FormFeedback>
                            </FormGroup>
                            </Col>
                            <Col md={6}>
                            <FormGroup>
                                <Label htmlFor="email">Email</Label>
                                <Input type="text" id="email" name="email"
                                    value={initialState.email}
                                    onChange={handleInputChange} valid={errors.email === ''} invalid={errors.email !== ''} onBlur={handleBlur('email')} />
                                <FormFeedback>{errors.email}</FormFeedback>
                            </FormGroup>
                                </Col>
                            </Row>
                            <FormGroup>
                                <Label htmlFor="address">P. Address</Label>
                                <Input type="text" id="address" name="address"
                                   value={initialState.address}
                                   onChange={handleInputChange} valid={errors.address === ''} invalid={errors.address !== ''} onBlur={handleBlur('address')} />
                                <FormFeedback>{errors.address}</FormFeedback>
                            </FormGroup>
                            <Button type="submit" color="primary">
                                Update
                            </Button> 
                  </Form>
        </div>
    )
}

export default StudentUpdateForm
