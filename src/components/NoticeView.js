import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';

export default function NoticeView() {
  const [datatable, setDatatable] = React.useState({
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
        label: 'Date',
        field: 'date',
        sort: 'disabled',
        width: 80
      },
      {
        label: 'Actions',
        field: 'actions',
        sort: 'disabled',
        width: 80
      }
    ],
    rows: [
        {
            title: 'Notice 1',
            description: 'Description',
            date: '29/06/2020',
            actions: 'Buttons'
        },
    ],
  });

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