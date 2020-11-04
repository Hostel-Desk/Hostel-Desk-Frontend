import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import { Loading } from './LoadingComponent';

export default function EmployeeSalaryView({ employeeSal, isLoading, errMess }) {
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
        label: 'Actions',
        field: 'actions',
        default: <div>
          <i className="fa fa-pencil-alt edit mr-2" onClick={() => this.toggleSalaryModal}></i>
          <i className="fa fa-trash-alt delete"></i>
        </div>,
        width: 100,
      },

    ],
    rows: employeeSal,
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
            <h2 className="feature-heading ">Employees Salary</h2>
            <hr className="feature-line" />
          </div>
        </div>
        <div>
          <MDBDataTableV5
            hover
            responsiveMd
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