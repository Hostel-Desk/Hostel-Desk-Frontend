import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import { Loading } from './LoadingComponent';

export default function NoticeView({ notices, isLoading, errMess }) {
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
      {
        label: 'Actions',
        field: 'actions',
        sort: 'disabled',
        width: 80,
        default: <div>
          <i className="fa fa-trash-alt delete"></i>
        </div>
      }
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
}