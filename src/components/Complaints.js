import React from 'react';
import { MDBDataTableV5} from 'mdbreact';

export default function Complaints() {
  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: 'Student Name',
        field: 'name',
        width: 150,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Name',
        },
      },
      {
        label: 'Room No',
        field: 'room',
        width: 150,
      },
      {
        label: 'Complaint',
        field: 'complaint',
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
        room: '2021',
        complaint: 'darwaaza sahi kraayo mera',
        actions: 'Buttons'
    },
  
],
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
  searchTop
  searchBottom={false}
  scrollX
/>
</div>
</div>
);
}