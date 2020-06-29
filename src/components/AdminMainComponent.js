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
import AddEmployee from './AddEmployeeComponent';
import StudentMessBill from './StudentMessBill';
import EmployeeSalaryView from './EmployeeSalaryView';
import Seat from './SeatComponent';
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
                            <Route exact path="/admin/EmployeeManage/addnew" component={AddEmployee}/>
                            <Route exact path="/admin/MealManage/view" component={MealView}/>
                            <Route exact path="/admin/StudentManage/view" component={StudentView}/>
                            <Route exact path="/admin/EmployeeManage/view" component={EmployeeView}/>
                            <Route exact path="/admin/NoticeBoard" component={NoticeBoard}/>
                            <Route exact path="/admin/Settings/updateprofile" component={Profile}/>
                            <Route exact path="/admin/Architecture" component={Architecture}/>
                            <Route exact path="/admin/StudentManagePayment/Add Bill" component={StudentPayment} />
                            <Route exact path="/admin/StudentManagePayment/MessBill" component={StudentMessBill} />
                            <Route exact path="/admin/EmployeeManagePayment/Add Salary" component={EmployeeSalary}/>
                            <Route exact path="/admin/EmployeeManagePayment/Salary" component={EmployeeSalaryView}/>
                            <Route exact path="/admin/StudentManage/seatallocation" component={Seat}/>
                            <Redirect to="/admin/dashboard"/>
                        </Switch>

                    </div>
                </div>
            </div>
        )
    }
}
export default Admin
