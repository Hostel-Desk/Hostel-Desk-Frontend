import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import { Loading } from './LoadingComponent';
export default function EmployeeView({ employees, isLoading, errMess }) {

  const [datatable] = React.useState({

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
        label: 'Mobile',
        field: 'mobile',
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
    rows: employees,

  });
  if (isLoading) {
    return (<Loading />);
  }
  else if (errMess) {
    return (<div><p>{errMess} Please try again</p></div>);
  }
  else {
    return (
      <div>
        <div className="row">
          <div className="col-12 container-fluid">
            <h2 className="feature-heading ">Employees</h2>
            <hr className="feature-line" />
          </div>
        </div>
        <div>
          <MDBDataTableV5
            hover
            responsiveMd
            bordered
            entriesOptions={[5, 20, 25]}
            entries={5}
            pagesAmount={4}
            data={datatable}
            pagingTop
            searchTop
            searchBottom={false}
            scrollX
          />
        </div>
      </div>
    );
  }
}