import React from 'react';
import { MDBDataTableV5} from 'mdbreact';

export default function ArchitectureView({architectures}) {
    const [datatable, setDatatable] = React.useState({
      
    });
  
    return (
      <MDBDataTableV5
        responsiveMd
        hover
        entriesOptions={[5, 20, 25]}
        entries={5}
        pagesAmount={4}
        data={architectures}
        pagingTop
        searchTop
        searchBottom={false}
        scrollX
      />
    );
  }