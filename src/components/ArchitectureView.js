import React from 'react';
import { MDBDataTableV5} from 'mdbreact';

export default function ArchitectureView(props) {
    const [datatable, setDatatable] = React.useState({
        columns: [
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
                width: 100,
                default: <div>
                <i className="fa fa-pencil-alt edit mr-2" onClick={() => this.toggleArchitectureModal()}></i>
                <i className="fa fa-trash-alt delete"></i>
              </div>
            }
        ],
        rows: [
          {
            rooms: props.architectures.rooms,
            blocks: props.architectures.blocks,
            floors: props.architectures.floors,
            actions: <div>
            <i className="fa fa-pencil-alt edit mr-2" onClick={() => this.toggleArchitectureModal()}></i>
            <i className="fa fa-trash-alt delete"></i>
            </div> 
          }
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