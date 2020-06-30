import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';

export default function NoticeView({notices}) {
  const [datatable, setDatatable] = React.useState({
    
  });

  return (
    <MDBDataTableV5
      hover
      responsiveMd
      entriesOptions={[5, 20, 25]}
      entries={5}
      pagesAmount={4}
      data={notices}
      pagingTop
      searchTop
      searchBottom={false}
      scrollX
    />
  );
}