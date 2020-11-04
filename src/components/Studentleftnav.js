import React, { Component } from 'react';
import { Navbar, NavItem, Nav, NavbarToggler, Collapse } from 'reactstrap';
import { Link } from 'react-router-dom';


export default class StudentLeftNav extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isNavOpen: false
    }
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({ isNavOpen: !this.state.isNavOpen });
  }


  render() {
    return (
      <div className="leftNav">
        <Navbar light expand="md" className="me" >
          <NavbarToggler onClick={this.toggleNav} />
          <Collapse isOpen={this.state.isNavOpen} navbar >
            <Nav navbar className="flex-column">
              <NavItem>
                <Link className="nav-link" to="/student/dashboard">
                  <i className="fa fa-tachometer-alt" aria-hidden="true"></i>Dashboard
              </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/student/profile"><i className="fa fa-user" aria-hidden="true"></i>Profile</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/student/Meal"> <i className="fa fa-utensils" aria-hidden="true"></i> Meal
              </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/student/payment"><i className="fa fa-money" aria-hidden="true"></i>Payment</Link>
              </NavItem>

              <NavItem>
                <Link className="nav-link" to="/student/NoticeBoard"> <i className="fa fa-newspaper-o" aria-hidden="true"></i> Notice Board</Link>
              </NavItem>

              <NavItem>
                <Link className="nav-link" to="/student/Architecture"><i className="fa fa-server" aria-hidden="true"></i>Architecture</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/student/Complaints"><i className="fa fa-book" aria-hidden="true"></i>Complaints</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>

    )
  }
}
