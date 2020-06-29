import React from 'react';
import { MDBDataTableV5} from 'mdbreact';

export default function ArchitectureView() {
    const [datatable, setDatatable] = React.useState({
      columns: [
        {
          label: 'Hostel Name',
          field: 'name',
          width: 150,
          attributes: {
            'aria-controls': 'DataTable',
            'aria-label': 'Hostel Name',
          },
        },
        {
          label: 'Total Rooms',
          field: 'rooms',
          width: 150,
        },
        {
            label: 'Total Blocks',
            field: 'blocks',
            width: 150,
          },
          {
            label: 'Total Floors',
            field: 'floors',
            width: 150,
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
              name: 'Shivalik Hostel',
              rooms: 200,
              blocks: 3,
              floors: 2,
              actions: 'Buttons'
          },
        
      ],
    });
  
    return (
      <MDBDataTableV5
        responsiveMd
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