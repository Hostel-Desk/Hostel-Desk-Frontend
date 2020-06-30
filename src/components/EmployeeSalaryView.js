import React from 'react';
import { MDBDataTableV5} from 'mdbreact';

export default function EmployeeSalaryView({employeeSal}) {

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
  data={employeeSal}
  pagingTop
  searchTop
  searchBottom={false}
  scrollX
/>
</div>
</div>
);
}