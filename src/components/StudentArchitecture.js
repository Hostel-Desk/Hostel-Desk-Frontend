import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import { Loading } from './LoadingComponent';

export default function ArchitectureV({ architectures, isLoading, errMess }) {
  const [datatable] = React.useState({
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
    ],
    rows: [
      {
        rooms: architectures.rooms,
        blocks: architectures.blocks,
        floors: architectures.floors,
      }
    ],
  });
  if (isLoading) {
    return (<Loading />);
  }
  else if (errMess) {
    return (<div><p>{errMess} Please try again</p></div>);
  }
  else {
    return (
      <>
        <div className="row">
          <div className="col-12 container-fluid">
            <h2 className="feature-heading ">Architecture</h2>
            <hr className="feature-line" />
          </div>
        </div>
        <div className="col-12 container-fluid">
          <MDBDataTableV5
            responsiveMd
            hover
            entriesOptions={[5, 20, 25]}
            entries={5}
            pagesAmount={4}
            data={datatable}
            pagingTop
            searching={false}
            scrollX
          />
        </div>
      </>
    );
  }
}