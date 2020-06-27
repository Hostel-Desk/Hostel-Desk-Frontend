import React, {Component} from 'react';
import DashBoard from './DashboardComponent'; 
import {Switch, Route, Redirect, withRouter } from 'react-router-dom';

class Admin extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-2">

                    </div>
                    <div className="col-md-10">
                        <DashBoard></DashBoard>
                    </div>
                </div>
            </div>
        )
    }
}
export default Admin