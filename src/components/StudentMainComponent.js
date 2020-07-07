import React, {Component} from 'react';
import DashBoard from './DashboardComponent';
import {Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import MealView from './MealTable';
import StudentMessBill from './StudentMessBill';
import ArchitectureView from './ArchitectureView';
import StudentProfile from './StudentProfile';
import StudentLeftNav from './Studentleftnav';
import NoticeView from './NoticeView';
import SubmitComplaint from './SubmitComplaint';
import StudentView from './StudentsComponent';
import EmployeeView from './EmployeeView';

class Student extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
                    
                    
              
                  ],
                  rows: [
                      {
                      name: 'Jatin Bansal',
                      month: 'June-2020',
                      amount: 5000.00,
                      date: '29th June,2020',
                     
                  },
                
              ],
            },
            Students: {
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
                    
                ],
                rows: [
                    {
                        name: 'Jatin Bansal',
                        mobile: '8729060249',
                        program: 'ELEC',
                        guardian: 'Mr Xyz',
                        gMob: '8264554894',
                        pAddress: 'Mullanpur',
                       
                        
                    },
                    
                ],
            },
            Employees: {
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
                    
              
                  ],
                  rows: [
                    {
                      name: 'Tiger Nixon',
                      gender: 'Male',
                      employeetype: 'System Architect',
                      designation: 'Edinburgh',
                      
                      date: '2011/04/25',
                      salary: '$320',
                      address: 'Shivalik Hostel',
                      
                    },
                    {
                      name: 'Garrett Winters',
                      gender: 'Male',
                      employeetype: 'Accountant',
                      designation: 'Tokyo',
                      
                      date: '2011/07/25',
                      salary: '$170',
                      address: 'Shivalik Hostel',
                      
                    },
                    {
                      name: 'Ashton Cox',
                      gender: 'Male',
                      employeetype: 'Junior Technical Author',
                      designation: 'San Francisco',
                      
                      date: '2009/01/12',
                      salary: '$86',
                      address: 'Shivalik Hostel',
                      
                    },
                    {
                      name: 'Cedric Kelly',
                      gender: 'Male',
                      employeetype: 'Senior Javascript Developer',
                      designation: 'Edinburgh',
                      
                      date: '2012/03/29',
                      salary: '$433',
                      address: 'Shivalik Hostel',
                      
                    },
                    {
                      name: 'Airi Satou',
                      gender: 'Male',
                      employeetype: 'Accountant',
                      designation: 'Tokyo',
                      
                      date: '2008/11/28',
                      salary: '$162',
                      address: 'Shivalik Hostel',
                      
                    },
                    {
                      name: 'Brielle Williamson',
                      gender: 'Male',
                      employeetype: 'Integration Specialist',
                      designation: 'New York',
                      
                      date: '2012/12/02',
                      salary: '$372',
                      address: 'Shivalik Hostel',
                     
                    },
                    {
                      name: 'Herrod Chandler',
                      gender: 'Male',
                      employeetype: 'Sales Assistant',
                      designation: 'San Francisco',
                      
                      date: '2012/08/06',
                      salary: '$137',
                      address: 'Shivalik Hostel',
                      
                    },
                    {
                      name: 'Rhona Davidson',
                      gender: 'Male',
                      employeetype: 'Integration Specialist',
                      designation: 'Tokyo',
                      
                      date: '2010/10/14',
                      salary: '$327',
                      address: 'Shivalik Hostel',
                      
                    },
                    {
                      name: 'Colleen Hurst',
                      gender: 'Male',
                      employeetype: 'Javascript Developer',
                      designation: 'San Francisco',
                      
                      date: '2009/09/15',
                      salary: '$205',
                      address: 'Shivalik Hostel',
                      
                    },
                    {
                      name: 'Sonya Frost',
                      gender: 'Male',
                      employeetype: 'Software Engineer',
                      designation: 'Edinburgh',
                      
                      date: '2008/12/13',
                      salary: '$103',
                      address: 'Shivalik Hostel',
                      
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
                    
                ],
                rows: [
                    {
                        title: 'Notice 1',
                        description: 'Description',
                        date: '29/06/2020',
                        
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
                    
                   
                ],
                rows: [
                    {
                        name: 'Shivalik Hostel',
                        rooms: 200,
                        blocks: 3,
                        floors: 2,
                        
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
                    
                    
              
                ],
                rows: [
                    {
                    name: 'Jatin Bansal',
                    block: 'BL-01',
                    room: 'R-01',
                    rent: 7500.00,
                   
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
                    
                   
                  ],
                  rows: [
                      {
                          name: 'Jatin Bansal',
                          amount: 2000.00,
                          date: '29th June, 2020',
                         
                      },
                    
                  ],
            },
           
            
        }
    }

    render() {
        return(
            <div className="feature admin">
                <div className="row">
                    <div className="col-md-3">
                        <StudentLeftNav/>
                    </div>
                    <div className="col-md-9">

                        <Switch>
                            <Route path="/student/dashboard" component={() => <DashBoard architectures={this.state.Architectures}
                                                                                        employees={this.state.Employees}
                                                                                        students={this.state.Students}/>}
                                                                                        changedValue={this.props.changedValue}/>
                            <Route exact path="/student/profile" component={StudentProfile}/>
                            <Route exact path="/student/Meal" component={() => <MealView meals={this.state.Meals}/>}/>
                            
                            <Route exact path="/student/payment" component={()=><StudentMessBill messBills={this.state.MessBills}/>}/>
                            <Route exact path="/student/Noticeboard" component={() => <NoticeView notices={this.state.Notices}/>}/>
                            <Route exact path="/student/Architecture" component={() => <ArchitectureView architectures={this.state.Architectures}/>}/>
                            <Route exact path="/student/Complaints" component={SubmitComplaint} />
                            <Route exact path="/student/mealview" component={() => <MealView meals={this.state.Meals}/>} />
                            <Route exact path="/student/studentView"  component={()=><StudentView students={this.state.Students}/>} />
                            <Route exact path="/student/rooms" component={() => <ArchitectureView architectures={this.state.Architectures}/>}/>
                            <Route exact path="/student/employeeView" component={()=><EmployeeView employees={this.state.Employees}/>}/>
                            <Redirect to="/student/dashboard"/>
                        </Switch>

                    </div>
                </div>
            </div>
        )
    }
}
export default Student;
