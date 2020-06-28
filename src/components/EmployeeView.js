import React from 'react';
import { MDBDataTableV5} from 'mdbreact';

export default function EmployeeView() {
  const [datatable, setDatatable] = React.useState({
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
        address: 'Shivalik Hostel'
      },
      {
        name: 'Garrett Winters',
        gender: 'Male',
        employeetype: 'Accountant',
        designation: 'Tokyo',
        
        date: '2011/07/25',
        salary: '$170',
        address: 'Shivalik Hostel'
      },
      {
        name: 'Ashton Cox',
        gender: 'Male',
        employeetype: 'Junior Technical Author',
        designation: 'San Francisco',
        
        date: '2009/01/12',
        salary: '$86',
        address: 'Shivalik Hostel'
      },
      {
        name: 'Cedric Kelly',
        gender: 'Male',
        employeetype: 'Senior Javascript Developer',
        designation: 'Edinburgh',
        
        date: '2012/03/29',
        salary: '$433',
        address: 'Shivalik Hostel'
      },
      {
        name: 'Airi Satou',
        gender: 'Male',
        employeetype: 'Accountant',
        designation: 'Tokyo',
        
        date: '2008/11/28',
        salary: '$162',
        address: 'Shivalik Hostel'
      },
      {
        name: 'Brielle Williamson',
        gender: 'Male',
        employeetype: 'Integration Specialist',
        designation: 'New York',
        
        date: '2012/12/02',
        salary: '$372',
        address: 'Shivalik Hostel'
      },
      {
        name: 'Herrod Chandler',
        gender: 'Male',
        employeetype: 'Sales Assistant',
        designation: 'San Francisco',
        
        date: '2012/08/06',
        salary: '$137',
        address: 'Shivalik Hostel'
      },
      {
        name: 'Rhona Davidson',
        gender: 'Male',
        employeetype: 'Integration Specialist',
        designation: 'Tokyo',
        
        date: '2010/10/14',
        salary: '$327',
        address: 'Shivalik Hostel'
      },
      {
        name: 'Colleen Hurst',
        gender: 'Male',
        employeetype: 'Javascript Developer',
        designation: 'San Francisco',
        
        date: '2009/09/15',
        salary: '$205',
        address: 'Shivalik Hostel'
      },
      {
        name: 'Sonya Frost',
        gender: 'Male',
        employeetype: 'Software Engineer',
        designation: 'Edinburgh',
        
        date: '2008/12/13',
        salary: '$103',
        address: 'Shivalik Hostel'
      },
    
    ],
  });

  return (
    <MDBDataTableV5
      hover
      
      bordered
      entriesOptions={[5, 20, 25]}
      entries={5}
      pagesAmount={4}
      data={datatable}
      pagingTop
      searchTop
      searchBottom={false}
      
    />
  );
}