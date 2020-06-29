// import React from 'react';
// import { MDBTable } from 'mdbreact';

// export default function MealView() {
//   const [datatable, setDatatable] = React.useState({
//     columns: [
//         {
//             label: 'Day',
//             field: 'day',
//             sort: 'disabled',
//             width: 150,
//         },
//         {
//             label: 'Breakfast',
//             field: 'breakfast',
//             sort: 'disabled',
//             width: 150,
//         },
//         {
//             label: 'Lunch',
//             field: 'lunch',
//             sort: 'disabled',
//             width: 150,
//         },
//         {
//             label: 'Evening Snacks',
//             field: 'snacks',
//             sort: 'disabled',
//             width: 150,
//         },
//         {
//             label: 'Dinner',
//             field: 'dinner',
//             sort: 'disabled',
//             width: 150,
//         }
//     ],
//     rows: [
//         {   day: 'Monday',
//             breakfast: 'Puri',
//             lunch: 'Rice',
//             snacks: 'Bread Roll',
//             dinner: 'Butter Chicken'
//         },
      
//     ],
//   });

//   return (
//     <MDBTable
//       hover
//       entriesOptions={[5, 20, 25]}
//       entries={5}
//       pagesAmount={4}
//       data={datatable}
//       pagingTop
//       searchTop
//       searchBottom={false}
//       scrollX
//     />
//   );
// }

import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

const BasicTable = () => {
  return (
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
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </MDBTableBody>
    </MDBTable>
  );
}

export default BasicTable;