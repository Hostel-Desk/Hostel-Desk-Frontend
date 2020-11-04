import React, { Component } from 'react';
import Header from './Header';
import Bar from './NavComponent';
import Footer from './Footer';
import Home from './HomeComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Admin from './AdminMainComponent';
import Contact from './ContactComponent';
import Student from './StudentMainComponent';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import {
    postArchitecture, postComplaint, postEmployee, postMeal, postMealbill, postNotice, postSalary,
    postSeatallocation, postStudent, fetchArchitecture, fetchComplaints, fetchEmployees, fetchMealbill,
    fetchMeals, updateMeal, fetchNotices, fetchSalaries, fetchSeatallocation, fetchStudents, deleteComplaint, deleteSeatAllocation,
    deleteEmployee, deleteNotice, deleteMealbill, deleteSalary, deleteStudent, logoutUser, loginUser, updateStudent, updateEmployee, updateMealbill, updateSeatAllocation, updateSalary
} from '../redux/actionCreators';


const mapDispatchToProps = (dispatch) => ({
    postArchitecture: (architecture) => dispatch(postArchitecture(architecture)),
    postComplaint: (complaint) => dispatch(postComplaint(complaint)),
    postEmployee: (employee) => dispatch(postEmployee(employee)),
    postMeal: (meal) => dispatch(postMeal(meal)),
    postMealbill: (mealBill) => dispatch(postMealbill(mealBill)),
    postNotice: (notice) => dispatch(postNotice(notice)),
    postSalary: (salary) => dispatch(postSalary(salary)),
    postSeatallocation: (seat) => dispatch(postSeatallocation(seat)),
    postStudent: (notice) => dispatch(postStudent(notice)),
    fetchArchitecture: () => dispatch(fetchArchitecture()),
    fetchComplaints: () => dispatch(fetchComplaints()),
    fetchEmployees: () => dispatch(fetchEmployees()),
    fetchMealbill: () => dispatch(fetchMealbill()),
    fetchMeals: () => dispatch(fetchMeals()),
    fetchNotices: () => dispatch(fetchNotices()),
    fetchSalaries: () => dispatch(fetchSalaries()),
    fetchSeatallocation: () => dispatch(fetchSeatallocation()),
    fetchStudents: () => dispatch(fetchStudents()),
    deleteComplaint: (complaintId) => dispatch(deleteComplaint(complaintId)),
    deleteEmployee: (employeeId) => dispatch(deleteEmployee(employeeId)),
    deleteNotice: (noticeId) => dispatch(deleteNotice(noticeId)),
    deleteSalary: (salaryId) => dispatch(deleteSalary(salaryId)),
    deleteStudent: (studentId) => dispatch(deleteStudent(studentId)),
    deleteMealbill: (billId) => dispatch(deleteMealbill(billId)),
    deleteSeatAllocation: (seatId) => dispatch(deleteSeatAllocation(seatId)),
    loginUser: (creds) => dispatch(loginUser(creds)),
    logoutUser: () => dispatch(logoutUser()),
    updateStudent: (student) => dispatch(updateStudent(student)),
    updateEmployee: (employee) => dispatch(updateEmployee(employee)),
    updateMealbill: (mealBill) => dispatch(updateMealbill(mealBill)),
    updateSeatAllocation: (seat) => dispatch(updateSeatAllocation(seat)),
    updateSalary: (salary) => dispatch(updateSalary(salary)),
    updateMeal: (meal) => dispatch(updateMeal(meal))

})

const mapStateToProps = (state) => {
    return {
        students: state.students,
        notices: state.notices,
        meals: state.meals,
        employees: state.employees,
        mealBills: state.mealBills,
        salaries: state.salaries,
        architecture: state.architecture,
        seatAllocation: state.seatAllocation,
        complaints: state.complaints,
        auth: state.auth,
    }
}

class Main extends Component {

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.fetchEmployees();
            this.props.fetchStudents();
            this.props.fetchArchitecture();
            this.props.fetchSalaries();
            this.props.fetchComplaints();
            this.props.fetchNotices();
            this.props.fetchSeatallocation();
            this.props.fetchMeals();
            this.props.fetchMealbill();
            this.props.loginUser(JSON.parse(localStorage.getItem('creds')));
        }
    }

    render() {
        const AdminRoute = ({ component: Component, ...rest }) => (
            <Route {...rest} render={(props) => (
                this.props.auth.isAuthenticated && this.props.auth.admin
                    ? <Component {...props} />
                    : <Redirect to={{
                        pathname: '/home',
                        state: { from: props.location }
                    }} />
            )} />
        );

        const StudentRoute = ({ component: Component, ...rest }) => (
            <Route {...rest} render={(props) => (
                this.props.auth.isAuthenticated && !this.props.auth.admin
                    ? <Component {...props} />
                    : <Redirect to={{
                        pathname: '/home',
                        state: { from: props.location }
                    }} />
            )} />
        );


        return (
            <div>
                <div className="container-fluid topSection">
                    <Header />
                    <Bar auth={this.props.auth} loginUser={this.props.loginUser} logoutUser={this.props.logoutUser} />
                </div>

                <div className="mainSection">
                    <Switch>
                        <Route path="/home" component={() => <Home />} />
                        <Route path="/login" component={() => <LoginForm auth={this.props.auth} loginUser={this.props.loginUser} />} />
                        <AdminRoute path="/admin" component={() => <Admin auth={this.props.auth} postNotice={this.props.postNotice} postArchitecture={this.props.postArchitecture} postMealbill={this.props.postMealbill} updateStudent={this.props.updateStudent} updateEmployee={this.props.updateEmployee}
                            employees={this.props.employees} notices={this.props.notices} students={this.props.students} postStudent={this.props.postStudent} postSalary={this.props.postSalary} deleteNotice={this.props.deleteNotice} deleteComplaint={this.props.deleteComplaint}
                            deleteStudent={this.props.deleteStudent} deleteSeatAllocation={this.props.deleteSeatAllocation} fetchStudents={this.props.fetchStudents} salaries={this.props.salaries} complaints={this.props.complaints} postEmployee={this.props.postEmployee} deleteEmployee={this.props.deleteEmployee} deleteMealbill={this.props.deleteMealbill}
                            meals={this.props.meals} mealBills={this.props.mealBills} fetchEmployees={this.props.fetchEmployees} seatAllocation={this.props.seatAllocation} architecture={this.props.architecture} deleteSalary={this.props.deleteSalary} updateMealbill={this.props.updateMealbill}
                            updateSeatAllocation={this.props.updateSeatAllocation} updateSalary={this.props.updateSalary} updateMeal={this.props.updateMeal} postSeatallocation={this.props.postSeatallocation} />} />
                        <Route path="/contactus" component={Contact} />
                        <StudentRoute path="/student" component={() => <Student auth={this.props.auth} postComplaint={this.props.postComplaint} complaints={this.props.complaints}
                            employees={this.props.employees} notices={this.props.notices} students={this.props.students} salaries={this.props.salaries}
                            meals={this.props.meals} mealBills={this.props.mealBills} seatAllocation={this.props.seatAllocation} architecture={this.props.architecture} />} />
                        <Redirect to="/home" />
                    </Switch>
                </div>
                <Footer />
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));;
