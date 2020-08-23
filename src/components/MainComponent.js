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
import { postArchitecture, postComplaint, postEmployee, postMeal, postMealbill, postNotice, postSalary, 
    postSeatallocation, postStudent, fetchArchitecture, fetchComplaints, fetchEmployees, fetchMealbill, 
    fetchMeals, fetchNotices, fetchSalaries, fetchSeatallocation, fetchStudents, deleteComplaint, 
    deleteEmployee, deleteNotice, deleteSalary, deleteStudent, logoutUser, loginUser } from '../redux/actionCreators';

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
    loginUser: (creds) => dispatch(loginUser(creds)),
    logoutUser: () => dispatch(logoutUser())
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
        auth: state.auth,
    }
}

class Main extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            changedValue: ''
        }
    }

    changelink = (value) => {
        console.log(value);
        this.setState({
            changedValue: value,
        })
    }
    
    render() {
        return (
            <div>
                <div className="container-fluid topSection">
                    <Header />
                    <Bar changelink = {this.changelink} changedValue={this.state.changedValue}/>
                </div>
    
                    <Switch >
                        <Route path="/home" component={() => <Home/>}/>
                        <Route path="/admin" component={() => <Admin changedValue = {this.state.changedValue}/>}/>
                        <Route path="/contactus" component={Contact}/>
                        <Route path="/student" component={() => <Student changedValue = {this.state.changedValue}/>}/>
                        <Redirect to="/home"/>
                    </Switch>
                <Footer />
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));;
