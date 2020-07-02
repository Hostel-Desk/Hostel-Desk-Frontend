import React, { Component } from 'react'
import {Form, Input, Button, Label, Col, Row, FormGroup} from 'reactstrap';
import ArchitectureView from './ArchitectureView'

class Architecture extends Component {
    constructor(props){
        super(props);
    }
    
    handleSubmit = (event) => {
        console.log("State: " + JSON.stringify(this.props));
        alert("Current state: " + JSON.stringify(this.props));
        event.preventDefault();
    }


    render(){
        return (
            <div>
                <div className="row">
                    <div className="col-12 container-fluid">
                        <h2 className="feature-heading ">Architecture</h2>
                        <hr className="feature-line" /> 
                    </div>  
                </div>
                <div >
                    <Form className="myForm" onSubmit={this.handleSubmit}>
                            <Row form>
                                <Col md={4}>
                                <FormGroup>
                                    <Label for="Rooms">Total Rooms</Label>
                                    <Input required type="text" name="Rooms" id="rooms" placeholder="Rooms" value={this.props.architectures.rows[0].rooms} />
                                </FormGroup>
                                </Col>
                                <Col md={4}>
                                <FormGroup>
                                    <Label for="Blocks">Total Blocks</Label>
                                    <Input required type="text" name="Blocks" id="blocks" placeholder="Blocks" value={this.props.architectures.rows[0].blocks} />
                                </FormGroup>
                                </Col>
                            
                            
                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="Floor">Total Floors</Label>
                                        <Input required type="text" name="Floors" id="floors" placeholder="Floors" value={this.props.architectures.rows[0].floors}/>
                                    </FormGroup>
                                </Col>
                            
                            <FormGroup row>
                                <Col md={{size: 10}}>
                                    <Button type="submit" color="primary">
                                        Save
                                    </Button> 
                                </Col>
                            </FormGroup>
                            </Row>
                    </Form>
                </div>
                <div><ArchitectureView architectures={this.props.architectures}/></div>
               
                    
            </div>
        )
    }
}

export default Architecture;