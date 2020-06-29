import React, {Component} from 'react';
import DashBoard from './DashboardComponent';
import {Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import LeftNav from './LeftNav';
import Profile from './ProfileComponent'
import Architecture from './ArchitectureComponent'
import EmployeeView from './EmployeeView';
import StudentView from './StudentsComponent';
import NoticeBoard from './NoticeBoard'
import MealView from './MealTable';
import AddStudent from './AddStudentComponent';
import StudentPayment from './StudentPayment';
import EmployeeSalary from './AddSalary';
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

                        <Switch>
                            <Route path="/admin/dashboard" component={DashBoard}/>
                            <Route exact path="/admin/students" component={StudentView}/>
                            <Route exact path="/admin/StudentManage/addnew" component={AddStudent}/>
                            <Route exact path="/admin/employees" component={EmployeeView}/>
                            <Route exact path="/admin/rooms" component={DashBoard}/>
                            <Route exact path="/admin/attendance" component={DashBoard}/>
                            <Route exact path="/admin/MealManage" component={MealView}/>
                            <Route exact path="/admin/CostManage" component={DashBoard}/>
                            <Route exact path="/admin/StudentManage/view" component={StudentView}/>
                            <Route exact path="/admin/StudentsPayment" component={DashBoard}/>
                            <Route exact path="/admin/EmployeeManage/view" component={EmployeeView}/>
                            <Route exact path="/admin/VendorPayment" component={DashBoard}/>
                            <Route exact path="/admin/BillManange" component={DashBoard}/>
                            <Route exact path="/admin/NoticeBoard" component={NoticeBoard}/>
                            <Route exact path="/admin/Settings/updateprofile" component={Profile}/>
                            <Route exact path="/admin/Architecture" component={Architecture}/>
                            <Route exact path="/admin/StudentManagePayment/Add Bill" component={StudentPayment} />
                            <Route exact path="/admin/EmployeeManagePayment/Add Bill" component={EmployeeSalary}/>
                            <Redirect to="/admin/dashboard"/>
                        </Switch>

                    </div>
                </div>
            </div>
        )
    }
}
export default Admin
