import React from 'react';
import { MDBDataTableV5} from 'mdbreact';
import { Loading } from './LoadingComponent';

export default function ArchitectureView({architectures,isLoading,errMess}) {
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
                width: 100,
                default: <div>
                <i className="fa fa-pencil-alt edit mr-2" onClick={() => this.toggleArchitectureModal()}></i>
                <i className="fa fa-trash-alt delete"></i>
              </div>
            }
        ],
        rows: architectures,
    });
    if(isLoading){
      return(<Loading/>);
    }
    else if(errMess){
      return(<div><p>{errMess} Please try again</p></div>);
    }
    else{
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
  }}