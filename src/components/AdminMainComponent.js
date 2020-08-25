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
import AddMeal from './AddMeal';
import Complaints from './Complaints';
import ArchitectureView from './ArchitectureView';
import {Modal, ModalBody, Form, ModalHeader, FormGroup,Label, Input, Button, Row, Col} from 'reactstrap';
class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isStudentModalOpen: false,
          isMessBillModalOpen: false,
          isEmployeeModalOpen: false,
          isSalaryModalOpen: false,
          isResolved: false,
          isArchitectureModalOpen: false,
            Meals: [
                {
                  day: 'Monday',
                  breakfast: [
                    'Bread-Jam + Corn Flakes',
                    'Omlette + Fruit',
                    'Milk/Tea + Butter',
                    'Aloo Paratha'
                  ],
                  lunch: [
                    'Kadhi Pakoda + Aloo Zeera',
                    'Jeera Rice + Chapati',
                    'Pickle + Salad'
                  ],
                  snacks: [
                    'Samosa',
                    'Tea',
                    'Biscuit + Rusk'
                  ],
                  dinner: [
                    'Butter Chicker + Masoor Sabut',
                    'Paneer Bhurji/ Matar Paneer',
                    'Simple Rice + Chapati',
                    'Gulab Jabun'
                  ] 
                },
                {
                  day: 'Tuesday',
                  breakfast: [
                    'Bread-Jam + Corn Flakes',
                    'Boiled Egg + Fruit',
                    'Milk/Tea + Butter',
                    'Mix Paratha'
                  ],
                  lunch: [
                    'White Chole + Aloo Baingan',
                    'Simple Rice + Chapati + Butter',
                    'Pickle + Salad + Lassi(sweet)'
                  ],
                  snacks: [
                    'Bread Roll/ Spring Roll',
                    'Tea',
                    'Cream Biscuit + Rusk'
                  ],
                  dinner: [
                    'Dal Makhni + Aloo Gajar Matar',
                    'Jeera Rice + Chapati + Curd',
                    'Moongdal Halwa/ Suji Halwa'
                  ] 
                }
            ],
            EmployeeSal: {
                columns: [
                  {
                    label: 'Employee Id',
                    field: 'eid',
                    width: 150,
                  },
                    {
                      label: 'Name',
                      field: 'name',
                      width: 150,
                      attributes: {
                        'aria-controls': 'DataTable',
                        'aria-label': 'Name',
                      },
                    },
                    {
                      label: 'Salary Month',
                      field: 'month',
                      width: 150,
                    },
                    {
                      label: 'Amount',
                      field: 'amount',
                      width: 150,
                    },
                   
                    {
                      label: 'Paid Date',
                      field: 'date',
                      width: 150,
                    },
                    
                    {
                      label: 'Actions',
                      field: 'actions',
                      default: <div>
                      <i className="fa fa-pencil-alt edit mr-2" onClick={() => this.toggleSalaryModal}></i>
                      <i className="fa fa-trash-alt delete"></i>
                    </div>,
                      width: 100,
                    },
              
                  ],
                  rows: [
                      {
                      eid: 'E-01',  
                      name: 'Jatin Bansal',
                      month: 'June-2020',
                      amount: 5000.00,
                      date: '29th June,2020',
                      actions: <div>
                      <i className="fa fa-pencil-alt edit mr-2" onClick={() => this.toggleSalaryModal()}></i>
                      <i className="fa fa-trash-alt delete"></i>
                    </div>
                  },
                
              ],
            },
            Students: {
                columns: [
                  {
                    label: 'SID',
                    field: 'sid',
                    width: 150,
                    sort: 'asc'
                  },
                    {
                      label: 'Name',
                      field: 'name',
                      width: 150,
                      attributes: {
                        'aria-controls': 'DataTable',
                        'aria-label': 'Name',
                      },
                    },
                    {
                      label: 'Mobile No.',
                      field: 'mobile',
                      width: 150,
                    },
                    {
                      label: 'Program',
                      field: 'program',
                      width: 150,
                    },
                    {
                      label: 'Guardian',
                      field: 'guardian',
                      sort: 'disabled',
                      width: 100,
                    },
                    {
                      label: 'G Mobile',
                      field: 'gMob',
                      sort: 'disabled',
                      width: 150,
                    },
                    {
                      label: 'P. Address',
                      field: 'pAddress',
                      sort: 'disabled',
                      width: 100
                    },
                    {
                      label: 'Actions',
                      field: 'actions',
                      sort: 'disabled',
                      width: 100,
                      default:  <div>
                      <i className="fa fa-pencil-alt edit mr-2" onClick={() =>this.toggleStudentModal()}></i>
                      <i className="fa fa-trash-alt delete"></i>
                    </div>
                    }
                ],
                rows: [
                    {
                        sid: 19104009,
                        name: 'Jatin Bansal',
                        mobile: '8729060249',
                        program: 'ELEC',
                        guardian: 'Mr Xyz',
                        gMob: '8264554894',
                        pAddress: 'Mullanpur',
                        actions: <div>
                        <i className="fa fa-pencil-alt edit mr-2" onClick={() =>this.toggleStudentModal()}></i>
                        <i className="fa fa-trash-alt delete"></i>
                      </div>
                        
                    },
                    
                ],
            },
            Employees: {
                columns: [
                  {
                    label: 'Employee Id',
                    field: 'eid',
                    width: 150,
                  },
                    {
                      label: 'Name',
                      field: 'name',
                      width: 150,
                      attributes: {
                        'aria-controls': 'DataTable',
                        'aria-label': 'Name',
                      },
                    },
                    {
                      label: 'Gender',
                      field: 'gender',
                      width: 150,
                    },
                    {
                      label: 'Employee Type',
                      field: 'employeetype',
                      width: 200,
                    },
                    {
                      label: 'Designation',
                      field: 'designation',
                      
                      width: 100,
                    },
                    {
                      label: 'Join Date',
                      field: 'date',
                      sort: 'asc',
                      width: 150,
                    },
                    {
                      label: 'Salary',
                      field: 'salary',
                      sort: 'disabled',
                      width: 100,
                    },
                    {
                      label: 'Address',
                      field: 'address',
                      
                      width: 100,
                    },
                    {
                        label: 'Actions',
                        field: 'actions',
                        sort: 'disabled',
                        width: 100,
                        default: <div>
                        <i className="fa fa-pencil-alt edit mr-2" onClick={() => this.toggleEmployeeModal()}></i>
                        <i className="fa fa-trash-alt delete"></i>
                      </div>
                      }
              
                  ],
                  rows: [
                    {
                      eid: 'E-01',
                      name: 'Tiger Nixon',
                      gender: 'Male',
                      employeetype: 'System Architect',
                      designation: 'Edinburgh',
                      
                      date: '2011/04/25',
                      salary: '$320',
                      address: 'Shivalik Hostel',
                      actions: <div>
                      <i className="fa fa-pencil-alt edit mr-2" onClick={() => this.toggleEmployeeModal()}></i>
                      <i className="fa fa-trash-alt delete"></i>
                    </div>
                    },
                    {
                      eid: 'E-02',
                      name: 'Garrett Winters',
                      gender: 'Male',
                      employeetype: 'Accountant',
                      designation: 'Tokyo',
                      
                      date: '2011/07/25',
                      salary: '$170',
                      address: 'Shivalik Hostel',
                      actions: <div>
                      <i className="fa fa-pencil-alt edit mr-2" onClick={() => this.toggleEmployeeModal()}></i>
                      <i className="fa fa-trash-alt delete"></i>
                    </div>
                    },
                    {
                      eid: 'E-03',
                      name: 'Ashton Cox',
                      gender: 'Male',
                      employeetype: 'Junior Technical Author',
                      designation: 'San Francisco',
                      
                      date: '2009/01/12',
                      salary: '$86',
                      address: 'Shivalik Hostel',
                      actions: <div>
                      <i className="fa fa-pencil-alt edit mr-2" onClick={() => this.toggleEmployeeModal()}></i>
                      <i className="fa fa-trash-alt delete"></i>
                    </div>
                    },
                    {
                      eid: 'E-04',
                      name: 'Cedric Kelly',
                      gender: 'Male',
                      employeetype: 'Senior Javascript Developer',
                      designation: 'Edinburgh',
                      
                      date: '2012/03/29',
                      salary: '$433',
                      address: 'Shivalik Hostel',
                      actions: <div>
                      <i className="fa fa-pencil-alt edit mr-2" onClick={() => this.toggleEmployeeModal()}></i>
                      <i className="fa fa-trash-alt delete"></i>
                    </div>  
                    },
                    {
                      eid: 'E-05',
                      name: 'Airi Satou',
                      gender: 'Male',
                      employeetype: 'Accountant',
                      designation: 'Tokyo',
                      
                      date: '2008/11/28',
                      salary: '$162',
                      address: 'Shivalik Hostel',
                      actions: <div>
                      <i className="fa fa-pencil-alt edit mr-2" onClick={() => this.toggleEmployeeModal()}></i>
                      <i className="fa fa-trash-alt delete"></i>
                    </div>
                    },
                    {
                      eid: 'E-06',
                      name: 'Brielle Williamson',
                      gender: 'Male',
                      employeetype: 'Integration Specialist',
                      designation: 'New York',
                      
                      date: '2012/12/02',
                      salary: '$372',
                      address: 'Shivalik Hostel',
                      actions: <div>
                      <i className="fa fa-pencil-alt edit mr-2" onClick={() => this.toggleEmployeeModal()}></i>
                      <i className="fa fa-trash-alt delete"></i>
                    </div>
                    },
                    {
                      eid: 'E-07',
                      name: 'Herrod Chandler',
                      gender: 'Male',
                      employeetype: 'Sales Assistant',
                      designation: 'San Francisco',
                      
                      date: '2012/08/06',
                      salary: '$137',
                      address: 'Shivalik Hostel',
                      actions: <div>
                      <i className="fa fa-pencil-alt edit mr-2" onClick={() => this.toggleEmployeeModal()}></i>
                      <i className="fa fa-trash-alt delete"></i>
                    </div>
                    },
                    {
                      eid: 'E-08',
                      name: 'Rhona Davidson',
                      gender: 'Male',
                      employeetype: 'Integration Specialist',
                      designation: 'Tokyo',
                      
                      date: '2010/10/14',
                      salary: '$327',
                      address: 'Shivalik Hostel',
                      actions: <div>
                      <i className="fa fa-pencil-alt edit mr-2" onClick={() => this.toggleEmployeeModal()}></i>
                      <i className="fa fa-trash-alt delete"></i>
                    </div>
                    },
                    {
                      eid: 'E-09',
                      name: 'Colleen Hurst',
                      gender: 'Male',
                      employeetype: 'Javascript Developer',
                      designation: 'San Francisco',
                      
                      date: '2009/09/15',
                      salary: '$205',
                      address: 'Shivalik Hostel',
                      actions: <div>
                      <i className="fa fa-pencil-alt edit mr-2" onClick={() => this.toggleEmployeeModal()}></i>
                      <i className="fa fa-trash-alt delete"></i>
                    </div>
                    },
                    {
                      eid: 'E-10',
                      name: 'Sonya Frost',
                      gender: 'Male',
                      employeetype: 'Software Engineer',
                      designation: 'Edinburgh',
                      
                      date: '2008/12/13',
                      salary: '$103',
                      address: 'Shivalik Hostel',
                      actions: <div>
                      <i className="fa fa-pencil-alt edit mr-2" onClick={() => this.toggleEmployeeModal()}></i>
                      <i className="fa fa-trash-alt delete"></i>
                    </div>
                    },
                  
                ],
            },
            Notices: {
                columns: [
                    {
                        label: 'Title',
                        field: 'title',
                        sort: 'disabled',
                        width: 80,
                    },
                    {
                        label: 'Description',
                        field: 'description',
                        sort: 'disabled',
                        width: 200
                    },
                    {
                        label: 'Date',
                        field: 'date',
                        sort: 'disabled',
                        width: 80
                    },
                    {
                        label: 'Actions',
                        field: 'actions',
                        sort: 'disabled',
                        width: 80,
                        default:<div>
                        <i className="fa fa-pencil-alt edit mr-2" onClick={() => this.toggleNoticeModal()}></i>
                        <i className="fa fa-trash-alt delete"></i>
                      </div>
                    }
                ],
                rows: [
                    {
                        title: 'Notice 1',
                        description: 'Description',
                        date: '29/06/2020',
                        actions: <div>
                        <i className="fa fa-pencil-alt edit mr-2" onClick={() => this.toggleNoticeModal()}></i>
                        <i className="fa fa-trash-alt delete"></i>
                      </div>
                    },
                ],
                
            },
            Architectures: {
                columns: [
                    {
                        label: 'Hostel Name',
                        field: 'name',
                        width: 150,
                        attributes: {
                        'aria-controls': 'DataTable',
                        'aria-label': 'Hostel Name',
                        },
                    },
                    {
                        label: 'Total Rooms',
                        field: 'rooms',
                        width: 150,
                    },
                    {
                        label: 'Total Blocks',
                        field: 'blocks',
                        width: 150,
                        },
                        {
                        label: 'Total Floors',
                        field: 'floors',
                        width: 150,
                        },
                    
                    {
                        label: 'Actions',
                        field: 'actions',
                        sort: 'disabled',
                        width: 100,
                        default: <div>
                        <i className="fa fa-pencil-alt edit mr-2" onClick={() => this.toggleArchitectureModal()}></i>
                        <i className="fa fa-trash-alt delete"></i>
                      </div>
                    }
                ],
                rows: [
                    {
                        name: 'Shivalik Hostel',
                        rooms: 200,
                        blocks: 3,
                        floors: 2,
                       actions: <div>
                       <i className="fa fa-pencil-alt edit mr-2" onClick={() => this.toggleArchitectureModal()}></i>
                       <i className="fa fa-trash-alt delete"></i>
                     </div>
           
                    },
                
                ],
            },
            Seats: {
                columns: [
                    {
                      label: 'Name',
                      field: 'name',
                      width: 150,
                      attributes: {
                        'aria-controls': 'DataTable',
                        'aria-label': 'Name',
                      },
                    },
                    {
                      label: 'Block No',
                      field: 'block',
                      width: 150,
                    },
                    {
                      label: 'Room No',
                      field: 'room',
                      width: 150,
                    },
                   
                    {
                      label: 'Monthly Rent',
                      field: 'rent',
                      width: 150,
                    },
                    
                    {
                      label: 'Actions',
                      field: 'actions',
                      
                      width: 100,
                      default: <div>
                      <i className="fa fa-pencil-alt edit mr-2"></i>
                      <i className="fa fa-trash-alt delete"></i>
                    </div>
                    },
              
                ],
                rows: [
                    {
                    name: 'Jatin Bansal',
                    block: 'BL-01',
                    room: 'R-01',
                    rent: 7500.00,
                    actions: <div>
              <i className="fa fa-pencil-alt edit mr-2"></i>
              <i className="fa fa-trash-alt delete"></i>
            </div>
                },
                
              ],
            },
            MessBills: {
                columns: [
                    {
                      label: 'Name',
                      field: 'name',
                      width: 150,
                      attributes: {
                        'aria-controls': 'DataTable',
                        'aria-label': 'Name',
                      },
                    },
                    {
                      label: 'Amount',
                      field: 'amount',
                      width: 150,
                    },
                    {
                      label: 'Deposit Date',
                      field: 'date',
                      width: 200,
                    },
                    
                    {
                      label: 'Actions',
                      field: 'actions',
                      sort: 'disabled',
                      width: 100,
                      default: <div>
                      <i className="fa fa-pencil-alt edit mr-2" onClick={() => this.toggleMessBillModal()}></i>
                      <i className="fa fa-trash-alt delete"></i>
                    </div>
                    }
                  ],
                  rows: [
                      {
                          name: 'Jatin Bansal',
                          amount: 2000.00,
                          date: '29th June, 2020',
                          actions: <div>
              <i className="fa fa-pencil-alt edit mr-2" onClick={() => this.toggleMessBillModal()}></i>
              <i className="fa fa-trash-alt delete"></i>
            </div>
                      },
                    
                  ],
            },
            Complaints :{
                columns: [
                    {
                      label: 'Student Name',
                      field: 'name',
                      width: 150,
                      attributes: {
                        'aria-controls': 'DataTable',
                        'aria-label': 'Name',
                      },
                    },
                    {
                      label: 'Room No',
                      field: 'room',
                      width: 150,
                    },
                    {
                      label: 'Complaint',
                      field: 'complaint',
                      width: 150,
                    },
                    
                    {
                      label: 'Actions',
                      field: 'actions',
                      default: <div>
                      <i className= "fa fa-check-circle resolve mr-2" onClick={() => this.toggleResolve}></i>
                      <i  className="fa fa-trash-alt delete"></i>
                    </div>,
                      width: 100,
                    },
              
                  ],
                  rows: [
                      {
                      name: 'Jatin Bansal',
                      room: '2021',
                      complaint: 'darwaaza sahi kraayo mera',
                      actions: <div>
                      <i className= "fa fa-check-circle resolve mr-2" onClick={() => this.toggleResolve}></i>
                      <i  className="fa fa-trash-alt delete"></i>
                    </div>
                      
                  },
                
              ],
            }
            
        };
        this.toggleStudentModal = this.toggleStudentModal.bind(this);
        this.toggleMessBillModal= this.toggleMessBillModal.bind(this);
        this.toggleEmployeeModal= this.toggleEmployeeModal.bind(this);
        this.toggleSalaryModal= this.toggleSalaryModal.bind(this);
        this.toggleNoticeModal= this.toggleNoticeModal.bind(this);
        this.toggleArchitectureModal= this.toggleArchitectureModal.bind(this);
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

    render() {
      console.log(this.props.changedValue);
        return(
            <div className="feature admin">
                <div className="row">
                    <div className="col-md-3">
                        <LeftNav/>
                    </div>
                    <div className="col-md-9">

                        <Switch>
                            <Route path="/admin/dashboard" component={() => <DashBoard architectures={this.state.Architectures}
                                                                                        employees={this.state.Employees}
                                                                                        students={this.state.Students}
                                                                                        auth={this.props.auth}/>}/>
                            <Route exact path="/admin/students" component={()=><StudentView students={this.state.Students}/>}/>
                            <Route exact path="/admin/rooms" component={() => <ArchitectureView architectures={this.state.Architectures}/>}/>
                            <Route exact path="/admin/StudentManage/addnew" component={AddStudent}/>
                            <Route exact path="/admin/employees" component={()=><EmployeeView employees={this.state.Employees}/>}/>
                            <Route exact path="/admin/EmployeeManage/addnew" component={AddEmployee}/>
                            <Route exact path="/admin/MealManage/view" component={() => <MealView meals={this.state.Meals}/>}/>
                            <Route exact path="/admin/MealManage/add" component={AddMeal}/>
                            <Route exact path="/admin/StudentManage/view" component={()=><StudentView students={this.state.Students}/>}/>
                            <Route exact path="/admin/EmployeeManage/view" component={()=><EmployeeView employees={this.state.Employees}/>}/>
                            <Route exact path="/admin/NoticeBoard" component={() => <NoticeBoard notices={this.state.Notices}/>}/>
                            <Route exact path="/admin/Settings/updateprofile" component={Profile}/>
                            <Route exact path="/admin/Architecture" component={() => <Architecture architectures={this.state.Architectures}/>}/>
                            <Route exact path="/admin/StudentManagePayment/Add Bill" component={StudentPayment} />
                            <Route exact path="/admin/StudentManagePayment/MessBill" component={()=><StudentMessBill messBills={this.state.MessBills}/>} />
                            <Route exact path="/admin/EmployeeManagePayment/Add Salary" component={EmployeeSalary}/>
                            <Route exact path="/admin/Complaints" component={() => <Complaints complaints={this.state.Complaints}/>}/>
                            <Route exact path="/admin/EmployeeManagePayment/Salary" component={() => <EmployeeSalaryView employeeSal={this.state.EmployeeSal}/>}/>
                            <Route exact path="/admin/StudentManage/seatallocation" component={()=> <Seat seats={this.state.Seats}/>}/>
                            <Redirect to="/admin/dashboard"/>
                        </Switch>

                    </div>
                </div>
                <Modal isOpen={this.state.isStudentModalOpen} toggle={this.toggleStudentModal}>
                <ModalHeader >Edit Student Details<Button className="close me" variant="secondary" onClick={this.toggleStudentModal} color="white">
                            <span aria-hidden="true" className="white-text"></span><i className="fa fa-times"></i>
                        </Button></ModalHeader>
                <ModalBody>
                  <Form>
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
                  </Form>
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
