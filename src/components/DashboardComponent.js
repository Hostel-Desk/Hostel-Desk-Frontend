import React, {Component} from 'react';
import {Card, CardBody, CardHeader, Alert, CardFooter} from 'reactstrap';
import {Link} from 'react-router-dom';

class DashBoard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="conatainer">
            <div className="row">
                <div className="col-md-3">
                    <Card>
                        <CardHeader className="dashCard">
                            <div className="row">
                            <span className="col-7 fa fa-users fa-4x"></span>
                            <h3>2</h3>
                            <div className="mt-3">
                                <div className="row">
                                    <p>Total Employees</p>
                                </div>
                            </div>        
                            </div>                
                        </CardHeader>
                        <CardFooter><Link to="/employees">Details</Link></CardFooter>
                    </Card>
                </div>
                <div className="col-md-3">
                    <Card>
                    <CardHeader className="dashCard">
                            <div className="row">
                            <span className="col-7 fa fa-users fa-4x"></span>
                            <h3>2</h3>
                            <div className="mt-3">
                                <div className="row">
                                    <p>Total Students</p>
                                </div>
                            </div>        
                            </div>                
                        </CardHeader>
                    <CardFooter><Link to="/students">Details</Link></CardFooter>
                    </Card>
                </div>
                <div className="col-md-3">
                    <Card>
                    <CardHeader className="dashCard">
                            <div className="row">
                            <span className="col-7 fa fa-building fa-4x"></span>
                            <h3>2</h3>
                            <div className="mt-3">
                                <div className="row">
                                    <p>Total Rooms</p>
                                </div>
                            </div>        
                            </div>                
                        </CardHeader>
                        <CardFooter><Link to="/rooms">Details</Link></CardFooter>
                    </Card>
                </div>
                <div className="col-md-3">
                    <Card>
                    <CardHeader className="dashCard">
                        <div className="row">
                        <span className="col-7 fa fa-cutlery fa-4x"></span>
                        <h3>2</h3>
                        <div className="mt-3">
                            <div className="row">
                                <p>Today's Meals</p>
                            </div>
                        </div>        
                        </div>                
                    </CardHeader>
                    <CardFooter><Link to="/rooms">Details</Link></CardFooter>
                    </Card>
                </div>
            </div>
            <div className="row mt-2 mt-3">
                <div className="col-md-6">
                    <Card>
                        <CardHeader mb="0" mt="0"><span><h4>Notices</h4></span></CardHeader>
                        <CardBody>
                        <Alert color="success" className="mb-1 mt-1">
                            Kive aa
                        </Alert>
                        <Alert color="success" className="mb-1 mt-1">
                            Hor v
                        </Alert>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
        )
    }
}
export default DashBoard;