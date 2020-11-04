import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import { Loading } from './LoadingComponent';

export default function NoticeV({ notices, isLoading, errMess }) {
  const [datatable] = React.useState({
    columns: [
      {
        label: 'Title',
        field: 'title',
        sort: 'disabled',
        width: 80,
      },
      {
        label: 'Description',
        field: 'description',
        sort: 'disabled',
        width: 200
      },
    ],
    rows: notices,
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
      </>
    );
  }
}