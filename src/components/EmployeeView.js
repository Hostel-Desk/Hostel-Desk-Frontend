import React from 'react';
import { MDBDataTableV5} from 'mdbreact';

export default function EmployeeView({employees}) {

  return (
    <div>
    <div className="row">
                    <div className="col-12 container-fluid">
                        <h2 className="feature-heading ">Employees</h2>
                        <hr className="feature-line" /> 
                    </div>  
    </div>
    <div>
    <MDBDataTableV5
      hover
      responsiveMd
      bordered
      entriesOptions={[5, 20, 25]}
      entries={5}
      pagesAmount={4}
      data={employees}
      pagingTop
      searchTop
      searchBottom={false}
      scrollX
    />
    </div>
    </div>
  );
}