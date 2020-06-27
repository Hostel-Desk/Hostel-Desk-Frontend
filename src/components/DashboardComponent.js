import React, {Component} from 'react';
import {Card, CardBody, CardHeader} from 'reactstrap';
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
                        <CardBody><a href="#">Details</a></CardBody>
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
                        <CardBody><a href="#">Details</a></CardBody>
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
                        <CardBody><a href="#">Details</a></CardBody>
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
                        <CardBody><a href="#">Details</a></CardBody>
                    </Card>
                </div>
            </div>
        </div>
        )
    }
}
export default DashBoard;