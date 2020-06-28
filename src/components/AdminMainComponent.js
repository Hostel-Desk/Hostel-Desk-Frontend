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
                            <Route path="/admin/dashboard" component={DashBoard}/>
                            <Route exact path="/admin/students" component={DashBoard}/>
                            <Route exact path="/admin/employees" component={DashBoard}/>
                            <Route exact path="/admin/rooms" component={DashBoard}/>
                            <Route exact path="/admin/attendance" component={DashBoard}/> 
                            <Route exact path="/admin/MealManage" component={DashBoard}/>
                            <Route exact path="/admin/CostManage" component={DashBoard}/>
                            <Route exact path="/admin/StudentsManage" component={DashBoard}/>
                            <Route exact path="/admin/StudentsPayment" component={DashBoard}/>
                            <Route exact path="/admin/EmployeeManage" component={DashBoard}/>
                            <Route exact path="/admin/VendorPayment" component={DashBoard}/>
                            <Route exact path="/admin/BillManange" component={DashBoard}/>
                            <Route exact path="/admin/NoticeBoard" component={DashBoard}/>
                            <Route exact path="/admin/Settings" component={DashBoard}/>
                            <Route exact path="/admin/Setup" component={DashBoard}/>
                            <Redirect to="/admin/dashboard"/>
                        </Switch>
                        </BrowserRouter>
                    </div>
                </div>
            </div>
        )
    }
}
export default Admin