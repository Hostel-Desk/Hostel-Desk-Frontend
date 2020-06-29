import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

const BasicTable = () => {
  return (
    <div className="mealTable">
        <div className="row">
        <div className="col-12 container-fluid">
            <h4 className="feature-heading ">Menu</h4>
            <hr className="feature-line" /> 
        </div>  
    </div>
    <MDBTable hover responsive>
      <MDBTableHead>
        <tr>
          <th>Day</th>
          <th>Breakfast</th>
          <th>Lunch</th>
          <th>Snacks</th>
          <th>Dinner</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>Monday</td>
          <td><ul>
            <li>BreadJam+Cornflakes</li>   
            <li>Omelate + Fruit</li> 
          </ul></td>
          <td><ul>
            <li>Rice</li>
            <li>Rajmah</li></ul></td>
          <td><ul>
              <li>Bread Roll</li></ul></td>
          <td><ul><li>Daal</li>
          <li>Roti</li></ul></td>
        </tr>
        <tr>
          <td>Monday</td>
          <td><ul>
            <li>BreadJam+Cornflakes</li>   
            <li>Omelate + Fruit</li> 
          </ul></td>
          <td><ul>
            <li>Rice</li>
            <li>Rajmah</li></ul></td>
          <td><ul>
              <li>Bread Roll</li></ul></td>
          <td><ul><li>Daal</li>
          <li>Roti</li></ul></td>
        </tr>
        <tr>
          <td>Monday</td>
          <td><ul>
            <li>BreadJam+Cornflakes</li>   
            <li>Omelate + Fruit</li> 
          </ul></td>
          <td><ul>
            <li>Rice</li>
            <li>Rajmah</li></ul></td>
          <td><ul>
              <li>Bread Roll</li></ul></td>
          <td><ul><li>Daal</li>
          <li>Roti</li></ul></td>
        </tr>
      </MDBTableBody>
    </MDBTable>
    </div>
  );
}

export default BasicTable;