import React from 'react';
import { MDBDataTableV5} from 'mdbreact';

export default function SeatAllocationView({seats}) {
  const [datatable, setDatatable] = React.useState({
    
});

return (

<MDBDataTableV5
  hover
  responsiveMd
  entriesOptions={[5, 20, 25]}
  entries={5}
  pagesAmount={4}
  data={seats}
  pagingTop
  searchTop
  searchBottom={false}
  scrollX
/>

);
}