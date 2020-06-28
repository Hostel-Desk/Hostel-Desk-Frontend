import React, { Component } from 'react';
import {Navbar,NavbarBrand,NavItem,Nav,NavbarToggler,Collapse} from 'reactstrap';
import {Link,NavLink}
 from 'react-router-dom';

export default class LeftNav extends Component {
    
    constructor(props){
      super(props)
      this.state={
        isNavOpen: false
      }
      this.toggleNav=this.toggleNav.bind(this);

    }

    toggleNav(){
      this.setState({isNavOpen:!this.state.isNavOpen});
  }

    render() {
        return (
      <div>
        <Navbar light navbar expand="md" >
          <NavbarToggler onClick={this.toggleNav}/>
          <Collapse isOpen={this.state.isNavOpen} navbar >
          <Nav navbar className="flex-column">
            <NavItem>
            <NavLink className="nav-link" to="/admin/dashboard">
              <i class="fa fa-tachometer" aria-hidden="true"></i>Dashboard
              </NavLink>
              </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/admin/attendance"><i class="fa fa-address-book-o" aria-hidden="true"></i> Attendance</NavLink>
            </NavItem>

            <NavItem>
              <NavLink className="nav-link" to="/admin/MealManage"><i class="fa fa-cutlery" aria-hidden="true"></i> Meal Manage</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/admin/CostManage"><i class="fa fa-money" aria-hidden="true"></i> Cost Manage</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/admin/StudentsManage"> <i class="fa fa-child" aria-hidden="true"></i> Students Manage</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/admin/StudentsPayment"><i class="fa fa-money" aria-hidden="true"></i> Students Payment</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/admin/EmployeeManage"> <i class="fa fa-users" aria-hidden="true"></i> Employee Manage</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/admin/VendorPayment"><i class="fa fa-usd" aria-hidden="true"></i> Vendor Payment</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/admin/BillManange"><i class="fa fa-rupee"></i> Bill Manange</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/admin/NoticeBoard"> <i class="fa fa-newspaper-o" aria-hidden="true"></i> Notice Board</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/admin/Settings"><i class="fa fa-cog" aria-hidden="true"></i> Settings</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/admin/Setup"><i class="fa fa-server" aria-hidden="true"></i> Setup</NavLink>
            </NavItem>
          </Nav>
          </Collapse>
          
        </Navbar>
        </div>
      
        )
    }
}
