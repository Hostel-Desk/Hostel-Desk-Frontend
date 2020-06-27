import React, {Component} from 'react';
import {Card, CardBody, CardHeader, Alert} from 'reactstrap';
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
                            <div className="col-5">
                                <div className="row">
                                    <h4>2</h4>
                                    <p>Total Employees</p>
                                </div>
                            </div>        
                            </div>                
                        </CardHeader>
                        <CardBody><Link to="/employees">Details</Link></CardBody>
                    </Card>
                </div>
                <div className="col-md-3">
                    <Card>
                    <CardHeader className="dashCard">
                            <div className="row">
                            <span className="col-7 fa fa-users fa-4x"></span>
                            <div className="col-5">
                                <div className="row">
                                    <h4>2</h4>
                                    <p>Total Students</p>
                                </div>
                            </div>        
                            </div>                
                        </CardHeader>
                        <CardBody><Link to="/students">Details</Link></CardBody>
                    </Card>
                </div>
                <div className="col-md-3">
                    <Card>
                        <CardHeader className="dashCard">
                            <div className="row">
                            <span className="col-7 fa fa-building fa-4x"></span>
                            <div className="col-5">
                                <div className="row">
                                    <h4>4</h4>
                                    <p>Total Rooms</p>
                                </div>
                            </div>        
                            </div>                
                        </CardHeader>
                        <CardBody><Link classname="self-align-center" to="/rooms">Details</Link></CardBody>
                    </Card>
                </div>
                <div className="col-md-3">
                    <Card>
                        <CardHeader className="dashCard">
                            <div className="row">
                            <span className="col-7 fa fa-building fa-4x"></span>
                            <div className="col-5">
                                <div className="row">
                                    <h4>2</h4>
                                    <p>Today's Meal</p>
                                </div>
                            </div>        
                            </div>                
                        </CardHeader>
                        <CardBody><Link to="/meals">Details</Link></CardBody>
                    </Card>
                </div>
            </div>
            <div className="row mt-2">
                <div className="offset-2 col-md-8">
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