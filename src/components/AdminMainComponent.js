import React, {Component} from 'react';
import DashBoard from './DashboardComponent'; 
import {Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';

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
                        <BrowserRouter>
                        <Switch>
                            <Route path="/dashboard" component={DashBoard}/>
                            <Route exact path="/students" component={DashBoard}/>
                            <Route exact path="/employees" component={DashBoard}/>
                            <Route exact path="/rooms" component={DashBoard}/>
                            <Redirect to="/dashboard"/>
                        </Switch>
                        </BrowserRouter>
                    </div>
                </div>
            </div>
        )
    }
}
export default Admin