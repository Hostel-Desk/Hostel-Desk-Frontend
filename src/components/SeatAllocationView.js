import React from 'react';
import { MDBDataTableV5} from 'mdbreact';

export default function SeatAllocationView() {
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
      },

    ],
    rows: [
        {
        name: 'Jatin Bansal',
        block: 'BL-01',
        room: 'R-01',
        rent: 7500.00,
        actions: 'Buttons'
    },
  
],
});

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