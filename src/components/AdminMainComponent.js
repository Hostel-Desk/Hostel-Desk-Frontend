import React, {Component} from 'react';
import DashBoard from './DashboardComponent';
import {Switch, Route, Redirect, BrowserRouter, Link } from 'react-router-dom';
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
import AddMeal from './AddMeal';
import Complaints from './Complaints';
import ArchitectureView from './ArchitectureView';
import {Modal, ModalBody, Form, ModalHeader, FormGroup,Label, Input, Button, Row, Col} from 'reactstrap';
import StudentUpdateForm from './StudentUpdateForm';
import EmployeeUpdateForm from './EmployeeUpdateForm';
class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isStudentModalOpen: false,
          isMessBillModalOpen: false,
          isEmployeeModalOpen: false,
          isNoticeModalOpen: false,
          isSalaryModalOpen: false,
          isResolved: false,
          isArchitectureModalOpen: false,
          isSeatModalOpen: false,
          EmployeeSal: [],
          Students: [],
          Employees: [],
          Notices: [],
          Architecture: [],
          Seats: [],
          Complaints :[],
            Meals: [],
            MessBills: []
         };
        this.toggleStudentModal = this.toggleStudentModal.bind(this);
        this.toggleMessBillModal= this.toggleMessBillModal.bind(this);
        this.toggleEmployeeModal= this.toggleEmployeeModal.bind(this);
        this.toggleSalaryModal= this.toggleSalaryModal.bind(this);
        this.toggleNoticeModal= this.toggleNoticeModal.bind(this);
        this.toggleArchitectureModal= this.toggleArchitectureModal.bind(this);
        this.toggleSeatModal= this.toggleSeatModal.bind(this);
    }

    componentDidMount() {
      //this.props.fetchEmployees();
      let students = [];
      if(this.props.students.students != null) {
        this.props.students.students.forEach(element => {
          students.push({
            sid: element.sid,
            name: element.studentName,
            mobile: element.mobileNo,
            program: element.branch,
            gMob: element.fatherMobile,
            guardian: element.fatherName,
            pAddress: element.address,
            actions: <div>
              <Link className="fa fa-pencil-alt edit mr-2" to={`/admin/updateStudent/${element._id}`}></Link>
              <i className="fa fa-trash-alt delete" onClick={() => this.props.deleteStudent(element._id)}></i>
            </div>
          })
        });
      }
      const studentlist = this.state.Students.concat(students);
      let employees = [];
      if(this.props.employees.employees != null) {
        this.props.employees.employees.forEach(element => {
          employees.push({
            name: element.employeeName,
            gender: element.gender,
            employeetype: element.employeeType,
            designation: element.designation,
            mobile: element.mobileNo,
            date: element.joiningDate,
            address: element.hostel.name,
            actions: <div>
            <Link className="fa fa-pencil-alt edit mr-2" to={`/admin/updateEmployee/${element._id}`}></Link>
            <i className="fa fa-trash-alt delete" onClick={() => this.props.deleteEmployee(element._id)}></i>
          </div>
          })
        });
      }
      const employeeList = this.state.Employees.concat(employees);
      let notices = [];
      this.props.notices.notices.forEach(element => {
        notices.push({
          title: element.title,
          description: element.description,
          actions: <div>
          <i className="fa fa-pencil-alt edit mr-2" onClick={() => this.toggleNoticeModal()}></i>
          <i className="fa fa-trash-alt delete" onClick={() => this.props.deleteNotice(element._id)}></i>
        </div>
        })
      });
      const noticeList = this.state.Notices.concat(notices);
      let salaries = [];
      this.props.salaries.salaries.forEach(element => {
        salaries.push({
          name: element.name,
          month: element.month,
          amount: element.salary,
          actions: <div>
          <i className="fa fa-pencil-alt edit mr-2" onClick={() => this.toggleSalaryModal()}></i>
          <i className="fa fa-trash-alt delete" onClick={() => this.props.deleteSalary(element._id)}></i>
        </div>
        })
      });
      const salariesList = this.state.EmployeeSal.concat(salaries);
      
      let seatAllocation = [];
      this.props.seatAllocation.seatAllocation.forEach(element => {
        seatAllocation.push({
          name: element.name,
          block: element.block,
          room: element.room,
          rent: element.monthlyRent,
          actions: <div>
          <i className="fa fa-pencil-alt edit mr-2" onClick={() => this.toggleSeatModal()}></i>
          <i className="fa fa-trash-alt delete"></i>
        </div>
        })
      });
      const seatAllocationList = this.state.Seats.concat(seatAllocation);
      
      let complaints = [];
      this.props.complaints.complaints.forEach(element => {
        complaints.push({
          name: element.studentName.username,
          title: element.title,
          complaint: element.complaint,
          actions: <div>
          <i className="fa fa-trash-alt delete" onClick={() => this.props.deleteComplaint(element._id)}></i>
        </div>
        })
      });
      const complaintsList = this.state.Complaints.concat(complaints);

      let mealBills = [];
      if(this.props.mealBills.bills != null) {
        this.props.mealBills.bills.forEach(element => {
          mealBills.push({
            name: element.name,
            sid: element.sid,
            branch: element.branch,
            amount: element.payment,
            date: element.paymentDate,
            actions: <div>
            <i className="fa fa-pencil-alt edit mr-2" onClick={() => this.toggleMessBillModal()}></i>
            <i className="fa fa-trash-alt delete"></i>
          </div>
          })
        });
      }
      const mealBillsList = this.state.MessBills.concat(mealBills);
      const mealsList = this.state.Meals.concat(this.props.meals.meals);
  
      this.setState({
        Students: studentlist,
        Employees: employeeList,
        Notices: noticeList,
        EmployeeSal: salariesList,
        //Architecture: architectureList,
        Seats: seatAllocationList,
        Complaints: complaintsList,
        MessBills: mealBillsList,
        Meals: mealsList
      });
      }

    toggleStudentModal(){
      this.setState({
        isStudentModalOpen: !this.state.isStudentModalOpen
      });
    }
    toggleMessBillModal(){
      this.setState({
        isMessBillModalOpen: !this.state.isMessBillModalOpen
      });
    }
    toggleEmployeeModal(){
      this.setState({
        isEmployeeModalOpen: !this.state.isEmployeeModalOpen
      });
    }
    toggleSalaryModal(){
      this.setState({
        isSalaryModalOpen: !this.state.isSalaryModalOpen
      });
    }
    toggleNoticeModal(){
      this.setState({
        isNoticeModalOpen: !this.state.isNoticeModalOpen
      });
    }
    toggleResolve(){
      this.setState({
        isResolved: !this.state.isResolved
      });
    }
    toggleArchitectureModal(){
      this.setState({
        isArchitectureModalOpen: !this.state.isArchitectureModalOpen
      })
    }
    toggleSeatModal(){
      this.setState({
        isSeatModalOpen: !this.state.isSeatModalOpen
      })
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
                            <Route path="/admin/dashboard" component={() => <DashBoard architectures={this.props.architecture.architecture} students={this.props.students} employees={this.props.employees} auth={this.props.auth} notices={this.props.notices.notices}/>}/>                                                                                                                                                             
                            <Route exact path="/admin/students" component={()=><StudentView students={this.state.Students}/>}/>
                            <Route exact path="/admin/rooms" component={() => <ArchitectureView architectures={this.state.Architecture}/>}/>
                            <Route exact path="/admin/StudentManage/addnew" component={() => <AddStudent postStudent={this.props.postStudent}/>}/>
                            <Route exact path="/admin/employees" component={()=><EmployeeView employees={this.state.Employees}/>}/>
                            <Route exact path="/admin/EmployeeManage/addnew" component={() => <AddEmployee postEmployee={this.props.postEmployee}/>}/>
                            <Route exact path="/admin/MealManage/view" component={() => <MealView meals={this.state.Meals} isLoading={this.props.meals.isLoading} errMess={this.props.meals.errMess} />}/>
                            <Route exact path="/admin/MealManage/add" component={AddMeal}/>
                            <Route exact path="/admin/StudentManage/view" component={()=><StudentView students={this.state.Students} isLoading={this.props.students.isLoading} errMess={this.props.students.errMess} />}/>
                            <Route exact path="/admin/EmployeeManage/view" component={()=><EmployeeView employees={this.state.Employees} isLoading={this.props.employees.isLoading} errMess={this.props.employees.errMess}/>}/>
                            <Route exact path="/admin/NoticeBoard" component={() => <NoticeBoard notices={this.state.Notices} postNotice={this.props.postNotice} isLoading={this.props.notices.isLoading} errMess={this.props.notices.errMess}/>}/>
                            <Route exact path="/admin/Settings/updateprofile" component={Profile}/>
                            <Route exact path="/admin/Architecture" component={() => <Architecture postArchitecture={this.props.postArchitecture} architecture={this.props.architecture.architecture} isLoading={this.props.architecture.isLoading} errMess={this.props.architecture.errMess}/>}/>
                            <Route exact path="/admin/StudentManagePayment/Add Bill" component={() => <StudentPayment postMealbill={this.props.postMealbill}/>} />
                            <Route exact path="/admin/StudentManagePayment/MessBill" component={()=><StudentMessBill messBills={this.state.MessBills} isLoading={this.props.mealBills.isLoading} errMess={this.props.mealBills.errMess} />} />
                            <Route exact path="/admin/EmployeeManagePayment/Add Salary" component={() => <EmployeeSalary postSalary={this.props.postSalary}/>}/>
                            <Route exact path="/admin/Complaints" component={() => <Complaints complaints={this.state.Complaints} isLoading={this.props.complaints.isLoading} errMess={this.props.complaints.errMess}/>}/>
                            <Route exact path="/admin/EmployeeManagePayment/Salary" component={() => <EmployeeSalaryView employeeSal={this.state.EmployeeSal} isLoading={this.props.salaries.isLoading} errMess={this.props.salaries.errMess}/>}/>
                            <Route exact path="/admin/StudentManage/seatallocation" component={()=> <Seat seats={this.state.Seats} isLoading={this.props.seatAllocation.isLoading} errMess={this.props.seatAllocation.errMess}/>}/>
                            <Route exact path="/admin/updateStudent/:id" component={(props) => <StudentUpdateForm {...props} updateStudent={this.props.updateStudent}/>}/>
                            <Route exact path="/admin/updateEmployee/:id" component={(props) => <EmployeeUpdateForm {...props} updateEmployee={this.props.updateEmployee}/>}/>
                            <Redirect to="/admin/dashboard"/>
                        </Switch>

                    </div>
                </div>
                <Modal isOpen={this.state.isStudentModalOpen} toggle={this.toggleStudentModal}>
                <ModalHeader >Edit Student Details<Button className="close me" variant="secondary" onClick={this.toggleStudentModal} color="white">
                            <span aria-hidden="true" className="white-text"></span><i className="fa fa-times"></i>
                        </Button></ModalHeader>
                <ModalBody>
                  {/* <Form>
                    <Row form>
                      <Col md={6}>
                  <FormGroup>
                                <Label htmlFor="sid">SID</Label>
                                <Input type="text" id="sid" name="sid"
                                    innerRef={(input) => this.sid=input} />
                            </FormGroup>
                            </Col>
                            <Col md={6}>
                  <FormGroup>
                    
                                <Label htmlFor="fullname">Fullname</Label>
                                <Input type="text" id="fullname" name="fullname"
                                    innerRef={(input) => this.fullname=input} />
                            </FormGroup>
                            </Col>
                            </Row>
                            <Row form>
                              <Col md={6}>
                            <FormGroup>
                                <Label htmlFor="mobile">Mobile No.</Label>
                                <Input type="text" id="mobile" name="mobile"
                                    innerRef={(input) => this.mobile=input} />
                            </FormGroup>
                            </Col>
                            <Col md={6}>
                            <FormGroup>
                                <Label htmlFor="program">Program</Label>
                                <Input type="text" id="program" name="program"
                                    innerRef={(input) => this.program=input} />
                            </FormGroup>
                            </Col>
                            </Row>
                            <Row form>
                              <Col md={6}>
                            <FormGroup>
                                <Label htmlFor="guardian">Guardian</Label>
                                <Input type="text" id="guardian" name="guardian"
                                    innerRef={(input) => this.guardian=input} />
                            </FormGroup>
                            </Col>
                            <Col md={6}>
                            <FormGroup>
                                <Label htmlFor="gmobile">G Mobile</Label>
                                <Input type="text" id="gmobile" name="gmobile"
                                    innerRef={(input) => this.gmobile=input} />
                            </FormGroup>
                            </Col>
                            </Row>
                            <FormGroup>
                                <Label htmlFor="address">P. Address</Label>
                                <Input type="text" id="address" name="address"
                                    innerRef={(input) => this.address=input} />
                            </FormGroup>
                            <Button type="submit" color="primary">
                                    Update
                                </Button> 
                  </Form> */}
                </ModalBody>
                </Modal>
                <Modal isOpen={this.state.isMessBillModalOpen} toggle={this.toggleMessBillModal}>
                <ModalHeader >Edit Mess Bill<Button className="close me" variant="secondary" onClick={this.toggleMessBillModal} color="white">
                            <span aria-hidden="true" className="white-text"></span><i className="fa fa-times"></i>
                        </Button></ModalHeader>
                <ModalBody>
                  <Form>
                
                  <FormGroup>
                                <Label htmlFor="sid">SID</Label>
                                <Input type="text" id="sid" name="sid"
                                    innerRef={(input) => this.sid=input} />
                            </FormGroup>
                            
                            
                  <FormGroup>
                    
                                <Label htmlFor="fullname">Fullname</Label>
                                <Input type="text" id="fullname" name="fullname"
                                    innerRef={(input) => this.fullname=input} />
                            </FormGroup>
                            
                            
                            <FormGroup>
                                <Label htmlFor="amount">Amount</Label>
                                <Input type="number" id="amount" name="amount"
                                    innerRef={(input) => this.amount=input} />
                            </FormGroup>
                            
                            <FormGroup>
                                <Label htmlFor="date">Deposit Date</Label>
                                <Input type="text" id="date" name="date"
                                    innerRef={(input) => this.date=input} />
                            </FormGroup>
                            <Button type="submit" color="primary">
                                    Update
                                </Button> 
                  </Form>
                </ModalBody>
                </Modal>
                <Modal isOpen={this.state.isEmployeeModalOpen} toggle={this.toggleEmployeeModal}>
                <ModalHeader >Edit Employee Details<Button className="close me" variant="secondary" onClick={this.toggleEmployeeModal} color="white">
                            <span aria-hidden="true" className="white-text"></span><i className="fa fa-times"></i>
                        </Button></ModalHeader>
                <ModalBody>
                  {/*
                  <Form>
                    <Row form>
                      <Col md={6}>
                  <FormGroup>
                                <Label htmlFor="eid">EID</Label>
                                <Input type="text" id="eid" name="eid"
                                    innerRef={(input) => this.eid=input} />
                            </FormGroup>
                            </Col>
                            <Col md={6}>
                  <FormGroup>
                    
                                <Label htmlFor="fullname">Fullname</Label>
                                <Input type="text" id="fullname" name="fullname"
                                    innerRef={(input) => this.fullname=input} />
                            </FormGroup>
                            </Col>
                            </Row>
                            <Row form>
                              <Col md={6}>
                            <FormGroup>
                                <Label htmlFor="gender">Gender</Label>
                                <Input type="text" id="gender" name="gender"
                                    innerRef={(input) => this.gender=input} />
                            </FormGroup>
                            </Col>
                            <Col md={6}>
                            <FormGroup>
                                <Label htmlFor="type">Employee Type</Label>
                                <Input type="text" id="type" name="type"
                                    innerRef={(input) => this.type=input} />
                            </FormGroup>
                            </Col>
                            </Row>
                            <Row form>
                              <Col md={6}>
                            <FormGroup>
                                <Label htmlFor="designation">Designation</Label>
                                <Input type="text" id="designation" name="designation"
                                    innerRef={(input) => this.designation=input} />
                            </FormGroup>
                            </Col>
                            <Col md={6}>
                            <FormGroup>
                                <Label htmlFor="date">Join Date</Label>
                                <Input type="text" id="date" name="date"
                                    innerRef={(input) => this.date=input} />
                            </FormGroup>
                            </Col>
                            </Row>
                            <Row form>
                            <Col md={6}>
                            <FormGroup>
                                <Label htmlFor="salary">Salary</Label>
                                <Input type="text" id="salary" name="salary"
                                    innerRef={(input) => this.salary=input} />
                            </FormGroup>
                            </Col>
                              <Col md={6}>
                            <FormGroup>
                                <Label htmlFor="address">P. Address</Label>
                                <Input type="text" id="address" name="address"
                                    innerRef={(input) => this.address=input} />
                            </FormGroup>
                            </Col>
                            </Row>
                            <Button type="submit" color="primary">
                                    Update
                                </Button> 
                  </Form>
                  */} 
                </ModalBody>
                </Modal>
                <Modal isOpen={this.state.isSalaryModalOpen} toggle={this.toggleSalaryModal}>
                <ModalHeader >Edit Salary Details<Button className="close me" variant="secondary" onClick={this.toggleSalaryModal} color="white">
                            <span aria-hidden="true" className="white-text"></span><i className="fa fa-times"></i>
                        </Button></ModalHeader>
                <ModalBody>
                  <Form>
                
                  <FormGroup>
                                <Label htmlFor="eid">Employee Id</Label>
                                <Input type="text" id="eid" name="eid"
                                    innerRef={(input) => this.eid=input} />
                            </FormGroup>
                            
                            
                  <FormGroup>
                    
                                <Label htmlFor="fullname">Fullname</Label>
                                <Input type="text" id="fullname" name="fullname"
                                    innerRef={(input) => this.fullname=input} />
                            </FormGroup>
                            
                            <FormGroup>
                                        <Label for="salarymonth">Salary Month</Label>
                                        <Input type="month" name="salarymonth" id="salarymonth"
                                        innerRef={(input) => this.salarymonth=input} />
                                       
                                    </FormGroup>
                            <FormGroup>
                                <Label htmlFor="amount">Amount</Label>
                                <Input type="number" id="amount" name="amount"
                                    innerRef={(input) => this.amount=input} />
                            </FormGroup>
                            
                            <FormGroup>
                                <Label htmlFor="date">Paid Date</Label>
                                <Input type="text" id="date" name="date"
                                    innerRef={(input) => this.date=input} />
                            </FormGroup>
                            <Button type="submit" color="primary">
                                    Update
                                </Button> 
                  </Form>
                </ModalBody>
                </Modal>
                <Modal isOpen={this.state.isNoticeModalOpen} toggle={this.toggleNoticeModal}>
                <ModalHeader >Edit Notices<Button className="close me" variant="secondary" onClick={this.toggleNoticeModal} color="white">
                            <span aria-hidden="true" className="white-text"></span><i className="fa fa-times"></i>
                        </Button></ModalHeader>
                <ModalBody>
                  <Form>
                
                  <FormGroup>
                                <Label htmlFor="title">Title</Label>
                                <Input type="text" id="title" name="title"
                                    innerRef={(input) => this.title=input} />
                            </FormGroup>
                            
                            
                  <FormGroup>
                    
                                <Label htmlFor="description">Description</Label>
                                <Input type="textarea" id="description" name="description" rows="2"
                                    innerRef={(input) => this.description=input} />
                            </FormGroup>
                            
                            
                            
                            
                            <FormGroup>
                                <Label htmlFor="date">Date</Label>
                                <Input type="text" id="date" name="date"
                                    innerRef={(input) => this.date=input} />
                            </FormGroup>
                            <Button type="submit" color="primary">
                                    Update
                                </Button> 
                  </Form>
                </ModalBody>
                </Modal>
                <Modal isOpen={this.state.isArchitectureModalOpen} toggle={this.toggleArchitectureModal}>
                <ModalHeader >Edit Architecture<Button className="close me" variant="secondary" onClick={this.toggleArchitectureModal} color="white">
                            <span aria-hidden="true" className="white-text"></span><i className="fa fa-times"></i>
                        </Button></ModalHeader>
                <ModalBody>
                  <Form>
                
                  <FormGroup>
                                <Label htmlFor="name">Hostel Name</Label>
                                <Input type="text" id="name" name="name"
                                    innerRef={(input) => this.name=input} />
                            </FormGroup>
                            
                            
                  <FormGroup>
                    
                                <Label htmlFor="rooms">Total Rooms</Label>
                                <Input type="number" id="rooms" name="rooms"
                                    innerRef={(input) => this.rooms=input} />
                            </FormGroup>
                            
                            
                            
                            
                            <FormGroup>
                    
                                <Label htmlFor="blocks">Total Blocks</Label>
                                <Input type="number" id="blocks" name="blocks"
                                    innerRef={(input) => this.blocks=input} />
                            </FormGroup>
                            <FormGroup>
                    
                                <Label htmlFor="floors">Total Floors</Label>
                                <Input type="number" id="floors" name="floors"
                                    innerRef={(input) => this.floors=input} />
                            </FormGroup>
                            <Button type="submit" color="primary">
                                    Update
                                </Button> 
                  </Form>
                </ModalBody>
                </Modal>

            </div>
        )
    }
}
export default Admin
