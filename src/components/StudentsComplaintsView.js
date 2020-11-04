import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';

export default function ComplaintsView({ complaints }) {

  const [datatable] = React.useState({
    columns: [
      {
        label: 'Student SID',
        field: 'name',
        width: 150,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Name',
        },
      },
      {
        label: 'Title',
        field: 'title',
        width: 150,
      },
      {
        label: 'Complaint',
        field: 'complaint',
        width: 150,
      },


    ],
    rows: complaints
  });
  return (
    <div>
      <div className="row">
        <div className="col-12 container-fluid">
          <h2 className="feature-heading ">Complaints</h2>
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
          searching={false}
          scrollX
        />
      </div>
    </div>
  );
}