import React, { Component } from 'react';
import { Navbar, NavItem, Nav, NavbarToggler, Collapse, UncontrolledCollapse } from 'reactstrap';
import { Link } from 'react-router-dom';

function Carrot({ open }) {
  if (open === true) {
    return (
      <i className="fa fa-caret-up float-right" aria-hidden="true"></i>
    )
  }
  else {
    return (
      <i className="fa fa-caret-down float-right"></i>

    );
  }
}

export default class LeftNav extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isNavOpen: false,
      dropdownOpen: false,
      ismealmanageopen: false,
      isstudentmanageopen: false,
      isemployeemanageopen: false,
      issettingsopen: false,
      issetupopen: false,
      isstudentmanagepaymentopen: false,
      isemployeemanagepaymentopen: false
    }
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleManageMeal = this.toggleManageMeal.bind(this);

    this.toggleStudentManage = this.toggleStudentManage.bind(this);
    this.toggleEmployeeManage = this.toggleEmployeeManage.bind(this);

    this.toggleSettings = this.toggleSettings.bind(this);
    this.toggleStudentManagePayment = this.toggleStudentManagePayment.bind(this);
    this.toggleEmployeeManagePayment = this.toggleEmployeeManagePayment.bind(this);
  }

  toggleNav() {
    this.setState({ isNavOpen: !this.state.isNavOpen });
  }

  toggleManageMeal() {
    this.setState({ ismealmanageopen: !this.state.ismealmanageopen });
  }

  toggleStudentManage() {
    this.setState({ isstudentmanageopen: !this.state.isstudentmanageopen });
  }

  toggleEmployeeManage() {
    this.setState({ isemployeemanageopen: !this.state.isemployeemanageopen });
  }

  toggleSettings() {
    this.setState({ issettingsopen: !this.state.issettingsopen });
  }

  toggleStudentManagePayment() {
    this.setState({ isstudentmanagepaymentopen: !this.state.isstudentmanagepaymentopen });
  }
  
  toggleEmployeeManagePayment() {
    this.setState({ isemployeemanagepaymentopen: !this.state.isemployeemanagepaymentopen });
  }

  render() {
    return (
      <div className="leftNav">
        <Navbar light expand="md" className="me" >
          <NavbarToggler onClick={this.toggleNav} />
          <Collapse isOpen={this.state.isNavOpen} navbar >
            <Nav navbar className="flex-column">
              <NavItem>
                <Link className="nav-link" to="/admin/dashboard">
                  <i className="fa fa-tachometer-alt" aria-hidden="true"></i>Dashboard
                      </Link>
              </NavItem>
              <NavItem>
                <Link id="toggler" onClick={this.toggleManageMeal} className="nav-link" to="/admin/MealManage"> <i className="fa fa-utensils" aria-hidden="true"></i> Meal Manage
                      <Carrot open={this.state.ismealmanageopen} /></Link>
              </NavItem>
              <div>
                <UncontrolledCollapse toggler="#toggler">
                  <NavItem>
                    <Link className="nav-link offset-2" to="/admin/MealManage/add"><i className="fa fa-plus" aria-hidden="true"></i> Add</Link>
                  </NavItem>

                  <NavItem>
                    <Link className="nav-link offset-2" to="/admin/MealManage/view"><i className="fa fa-eye" aria-hidden="true"></i> View</Link>
                  </NavItem>
                </UncontrolledCollapse>
              </div>

              <NavItem>
                <Link className="nav-link" id="toggler1" onClick={this.toggleStudentManage} to="/admin/StudentsManage"> <i className="fa fa-child" aria-hidden="true"></i> Students Manage <Carrot open={this.state.isstudentmanageopen} /></Link>
              </NavItem>
              <div>
                <UncontrolledCollapse toggler="#toggler1">
                  <NavItem>
                    <Link className="nav-link offset-2" to="/admin/StudentManage/addnew"><i className="fa fa-plus" aria-hidden="true"></i> Add New</Link>
                  </NavItem>

                  <NavItem>
                    <Link className="nav-link offset-2" to="/admin/StudentManage/view"><i className="fa fa-eye" aria-hidden="true"></i> View</Link>
                  </NavItem>
                  <NavItem>
                    <Link className="nav-link offset-2" id="toggler4" onClick={this.toggleStudentManagePayment} to="/admin/StudentManage/payment"><i className="fa fa-money" aria-hidden="true"></i> Payment<Carrot open={this.state.isstudentmanagepaymentopen} /></Link>
                  </NavItem>
                  <div>
                    <UncontrolledCollapse toggler="#toggler4">
                      <NavItem>
                        <Link className="nav-link offset-4" to="/admin/StudentManagePayment/Add Bill"><i className="fas fa-money-check-alt"></i> Add Bill</Link>
                      </NavItem>
                      <NavItem>
                        <Link className="nav-link offset-4" to="/admin/StudentManagePayment/MessBill"><i className="fas fa-receipt"></i> Mess Bill</Link>
                      </NavItem>
                    </UncontrolledCollapse>
                  </div>
                  <NavItem>
                    <Link className="nav-link offset-2" to="/admin/StudentManage/seatallocation"><i className="fa fa-building" aria-hidden="true"></i>Seat Allocation</Link>
                  </NavItem>
                </UncontrolledCollapse>
              </div>
              <NavItem>
                <Link className="nav-link" id="toggler2" onClick={this.toggleEmployeeManage} to="/admin/EmployeeManage"> <i className="fa fa-users" aria-hidden="true"></i> Employee Manage<Carrot open={this.state.isemployeemanageopen} /></Link>
              </NavItem>

              <div>
                <UncontrolledCollapse toggler="#toggler2">
                  <NavItem>
                    <Link className="nav-link offset-2" to="/admin/EmployeeManage/addnew"><i className="fa fa-plus" aria-hidden="true"></i> Add New</Link>
                  </NavItem>

                  <NavItem>
                    <Link className="nav-link offset-2" to="/admin/EmployeeManage/view"><i className="fa fa-eye" aria-hidden="true"></i> View</Link>
                  </NavItem>
                  <NavItem>
                    <Link className="nav-link offset-2" id="toggler5" onClick={this.toggleEmployeeManagePayment} to="/admin/EmployeeManage/payment"><i className="fa fa-money" aria-hidden="true"></i> Payment<Carrot open={this.state.isemployeemanagepaymentopen} /></Link>
                  </NavItem>
                  <div>
                    <UncontrolledCollapse toggler="#toggler5">
                      <NavItem>
                        <Link className="nav-link offset-4" to="/admin/EmployeeManagePayment/Add Salary"><i className="fas fa-money-check-alt"></i> Add Salary</Link>
                      </NavItem>

                      <NavItem>
                        <Link className="nav-link offset-4" to="/admin/EmployeeManagePayment/Salary"><i className="fas fa-receipt"></i> Salary</Link>
                      </NavItem>
                    </UncontrolledCollapse>
                  </div>
                </UncontrolledCollapse>
              </div>
              <NavItem>
                <Link className="nav-link" to="/admin/NoticeBoard"> <i className="fa fa-newspaper-o" aria-hidden="true"></i> Notice Board</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/admin/Architecture"><i className="fa fa-server" aria-hidden="true"></i>Architecture</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/admin/Complaints"><i className="fa fa-book" aria-hidden="true"></i>Complaints</Link>
              </NavItem>

            </Nav>
          </Collapse>
        </Navbar>
      </div>

    )
  }
}
