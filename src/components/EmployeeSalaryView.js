import React from 'react';
import { MDBDataTableV5} from 'mdbreact';

export default function EmployeeView() {
  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: 'Name',
        field: 'name',
        width: 150,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Name',
        },
      },
      {
        label: 'Salary Month',
        field: 'month',
        width: 150,
      },
      {
        label: 'Amount',
        field: 'amount',
        width: 150,
      },
     
      {
        label: 'Paid Date',
        field: 'date',
        width: 150,
      },
      
      {
        label: 'Actions',
        field: 'actions',
        
        width: 100,
      },

    ],
    rows: [
        {
        name: 'Jatin Bansal',
        month: 'June-2020',
        amount: 5000.00,
        date: '29th June,2020',
        actions: 'Buttons'
    },
  
],
});

return (
<div>
<div className="row">
                <div className="col-12 container-fluid">
                    <h2 className="feature-heading ">Employees Salary</h2>
                    <hr className="feature-line" /> 
                </div>  
</div>
<div>
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
</div>
);
}