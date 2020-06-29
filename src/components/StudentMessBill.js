import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';

export default function StudentMessBill() {
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
        width: 100
      }
    ],
    rows: [
        {
            name: 'Jatin Bansal',
            amount: 2000.00,
            date: '29th June, 2020',
            actions: 'Buttons'
        },
      
    ],
  });

  return (
    <div>
    <div className="row">
                    <div className="col-12 container-fluid">
                        <h2 className="feature-heading ">Mess Bill</h2>
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