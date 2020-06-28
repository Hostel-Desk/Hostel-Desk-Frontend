import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';

export default function StudentView() {
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
        width: 100
      }
    ],
    rows: [
        {
            name: 'Jatin Bansal',
            mobile: '8729060249',
            program: 'ELEC',
            guardian: 'Mr Xyz',
            gMob: '8264554894',
            pAddress: 'Mullanpur',
            actions: 'Buttons'
        },
      
    ],
  });

  return (
    <MDBDataTableV5
      hover
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