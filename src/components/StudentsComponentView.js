import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import { Loading } from './LoadingComponent';
export default function StudentView({ students, isLoading, errMess }) {
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
      }
    ],
    rows: students,
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
            <h2 className="feature-heading ">Students</h2>
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