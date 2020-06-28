import React, { Component } from 'react';
import {Navbar,NavItem,Nav,NavbarToggler,Collapse,UncontrolledCollapse,Button,Card,CardBody} from 'reactstrap';
import {Link} from 'react-router-dom';

 function Carrot({open}){
   if (open===true){
     return(
       <i className="fa fa-caret-up float-right " aria-hidden="true"></i>
      )
   }
   else{
     return(
      <i className="fa fa-caret-down float-right"></i>
     
     );
   }
 }

export default class LeftNav extends Component {
    
    constructor(props){
      super(props)
      this.state={
        isNavOpen: false,
        dropdownOpen:false,
        ismealmanageopen:false,
        isstudentmanageopen:false,
        isemployeemanageopen:false,
        issettingsopen:false,
        issetupopen:false
      }
      this.toggleNav=this.toggleNav.bind(this);
      this.toggleManageMeal=this.toggleManageMeal.bind(this);
      
      this.toggleStudentManage=this.toggleStudentManage.bind(this);
      this.toggleEmployeeManage=this.toggleEmployeeManage.bind(this);
      
      this.toggleSettings=this.toggleSettings.bind(this);
      this.toggleSetup=this.toggleSetup.bind(this);
    }

    toggleNav(){
      this.setState({isNavOpen:!this.state.isNavOpen});
    }

    toggleManageMeal(){
      this.setState({ismealmanageopen:!this.state.ismealmanageopen});
    }
    toggleStudentManage(){
      this.setState({isstudentmanageopen:!this.state.isstudentmanageopen});
    }
    toggleEmployeeManage(){
      this.setState({isemployeemanageopen:!this.state.isemployeemanageopen});
    }
    toggleSettings(){
      this.setState({issettingsopen:!this.state.issettingsopen});
    }
    toggleSetup(){
      this.setState({issetupopen:!this.state.issetupopen})
    }
    render() {


        return (
      <div>
        <Navbar light navbar expand="md" >
          <NavbarToggler onClick={this.toggleNav}/>
          <Collapse isOpen={this.state.isNavOpen} navbar >
          <Nav navbar className="flex-column">
            <NavItem>
              <Link className="nav-link" to="/admin/dashboard">
              <i class="fa fa-tachometer-alt" aria-hidden="true"></i>Dashboard
              </Link>
              </NavItem>
            <NavItem>
              <Link id="toggler" onClick={this.toggleManageMeal} className="nav-link" to="/admin/MealManage"> <i class="fa fa-utensils" aria-hidden="true"></i> Meal Manage 
              <Carrot open={this.state.ismealmanageopen}/></Link>
            </NavItem>
            <div>
            <UncontrolledCollapse toggler="#toggler">
                  <NavItem>
                    <Link className="nav-link offset-2" to="/admin/MealManage/add"><i class="fa fa-plus" aria-hidden="true"></i> Add</Link>
                  </NavItem>
                  
                  <NavItem>
                    <Link className="nav-link offset-2" to="/admin/MealManage/view"><i class="fa fa-eye" aria-hidden="true"></i> View</Link>
                  </NavItem>   
            </UncontrolledCollapse>
          </div>

            <NavItem>
              <Link className="nav-link" id="toggler1" onClick={this.toggleStudentManage} to="/admin/StudentsManage"> <i class="fa fa-child" aria-hidden="true"></i> Students Manage <Carrot open={this.state.isstudentmanageopen}/></Link>
            </NavItem>
            <div>
            <UncontrolledCollapse toggler="#toggler1">
                  <NavItem>
                    <Link className="nav-link offset-2" to="/admin/StudentManage/addnew"><i class="fa fa-plus" aria-hidden="true"></i> Add New</Link>
                  </NavItem>
                  
                  <NavItem>
                    <Link className="nav-link offset-2" to="/admin/StudentManage/view"><i class="fa fa-eye" aria-hidden="true"></i> View</Link>
                  </NavItem>   
                  <NavItem>
                    <Link className="nav-link offset-2" to="/admin/StudentManage/payment"><i class="fa fa-money" aria-hidden="true"></i> Payment</Link>
                  </NavItem>   
            </UncontrolledCollapse>
          </div>
            <NavItem>
              <Link className="nav-link" id="toggler2" onClick={this.toggleEmployeeManage} to="/admin/EmployeeManage"> <i class="fa fa-users" aria-hidden="true"></i> Employee Manage<Carrot open={this.state.isemployeemanageopen}/></Link>
            </NavItem>
            <div>
            <UncontrolledCollapse toggler="#toggler2">
                  <NavItem>
                    <Link className="nav-link offset-2" to="/admin/EmployeeManage/addnew"><i class="fa fa-plus" aria-hidden="true"></i> Add New</Link>
                  </NavItem>
                  
                  <NavItem>
                    <Link className="nav-link offset-2" to="/admin/EmployeeManage/view"><i class="fa fa-eye" aria-hidden="true"></i> View</Link>
                  </NavItem>   
                  <NavItem>
                    <Link className="nav-link offset-2" to="/admin/EmployeeManage/payment"><i class="fa fa-money" aria-hidden="true"></i> Payment</Link>
                  </NavItem>   
            </UncontrolledCollapse>
          </div>
            <NavItem>
              <Link className="nav-link" to="/admin/NoticeBoard"> <i class="fa fa-newspaper-o" aria-hidden="true"></i> Notice Board</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" id="toggler3" onClick={this.toggleSettings} to="/admin/Settings"><i class="fa fa-cog" aria-hidden="true"></i> Settings<Carrot open={this.state.issettingsopen}/></Link>
            </NavItem>
            <div>
            <UncontrolledCollapse toggler="#toggler3">
                  <NavItem>
                    <Link className="nav-link offset-2" to="/admin/Settings/updateprofile"><i class="fa fa-user" aria-hidden="true"></i> Update Profile</Link>
                  </NavItem>  
            </UncontrolledCollapse>
          </div>
            
            <NavItem>
              <Link className="nav-link" id="toggler4" onClick={this.toggleSetup} to="/admin/Setup"><i class="fa fa-server" aria-hidden="true"></i>Architecture<Carrot open={this.state.issetupopen}/></Link>
            </NavItem>
            <div>
            <UncontrolledCollapse toggler="#toggler4">
                  <NavItem>
                    <Link className="nav-link offset-2" to="/admin/Setup/addnew"><i class="fa fa-bed" aria-hidden="true"></i>Total Rooms</Link>
                  </NavItem>
                  
                  <NavItem>
                    <Link className="nav-link offset-2" to="/admin/Setup/view"><i class="fa fa-building" aria-hidden="true"></i> Total Blocks</Link>
                  </NavItem> 
            </UncontrolledCollapse>
          </div>
          </Nav>
          </Collapse>
          
        </Navbar>
        </div>
      
        )
    }
}
