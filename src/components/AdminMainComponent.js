import React, {Component} from 'react';
import DashBoard from './DashboardComponent'; 
import {Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import LeftNav from './LeftNav';

class Admin extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="feature admin">
                <div className="row">
                    <div className="col-md-3">
                        <LeftNav/>
                    </div>
                    <div className="col-md-9">
                        <BrowserRouter>
                        <Switch>
                            <Route path="/dashboard" component={DashBoard}/>
                            <Route exact path="/students" component={DashBoard}/>
                            <Route exact path="/employees" component={DashBoard}/>
                            <Route exact path="/rooms" component={DashBoard}/>
                            <Route exact path="/attendance" component={DashBoard}/> 
                            <Route exact path="/MealManage" component={DashBoard}/>
                            <Route exact path="/CostManage" component={DashBoard}/>
                            <Route exact path="/StudentsManage" component={DashBoard}/>
                            <Route exact path="/StudentsPayment" component={DashBoard}/>
                            <Route exact path="/EmployeeManage" component={DashBoard}/>
                            <Route exact path="/VendorPayment" component={DashBoard}/>
                            <Route exact path="/BillManange" component={DashBoard}/>
                            <Route exact path="/NoticeBoard" component={DashBoard}/>
                            <Route exact path="/Settings" component={DashBoard}/>
                            <Route exact path="/Setup" component={DashBoard}/>
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