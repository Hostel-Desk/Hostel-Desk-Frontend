import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';

import { Loading } from './LoadingComponent';
export default function SeatAllocationView({ seats, isLoading, errMess }) {
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
    rows: seats,
  });
  if (isLoading) {
    return (<Loading />);
  }
  else if (errMess) {
    return (<div><p>{errMess} Please try again</p></div>);
  }
  else {
    return (

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

    );
  }
}