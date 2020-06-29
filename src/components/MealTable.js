import React, { Component } from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

export default class MealView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Days: [
        {
          day: 'Monday',
          breakfast: [
            'Bread-Jam + Corn Flakes',
            'Omlette + Fruit',
            'Milk/Tea + Butter',
            'Aloo Paratha'
          ],
          lunch: [
            'Kadhi Pakoda + Aloo Zeera',
            'Jeera Rice + Chapati',
            'Pickle + Salad'
          ],
          snacks: [
            'Samosa',
            'Tea',
            'Biscuit + Rusk'
          ],
          dinner: [
            'Butter Chicker + Masoor Sabut',
            'Paneer Bhurji/ Matar Paneer',
            'Simple Rice + Chapati',
            'Gulab Jabun'
          ] 
        },
        {
          day: 'Tuesday',
          breakfast: [
            'Bread-Jam + Corn Flakes',
            'Boiled Egg + Fruit',
            'Milk/Tea + Butter',
            'Mix Paratha'
          ],
          lunch: [
            'White Chole + Aloo Baingan',
            'Simple Rice + Chapati + Butter',
            'Pickle + Salad + Lassi(sweet)'
          ],
          snacks: [
            'Bread Roll/ Spring Roll',
            'Tea',
            'Cream Biscuit + Rusk'
          ],
          dinner: [
            'Dal Makhni + Aloo Gajar Matar',
            'Jeera Rice + Chapati + Curd',
            'Moongdal Halwa/ Suji Halwa'
          ] 
        }
      ]
    }
  }
  RenderMenu() {
    return(
      <MDBTableBody>
        {
          this.state.Days.map((Day)=>{
            return(
              <tr>
                <td>{Day.day}</td>
                <td>
                  <ul>
                    {
                      Day.breakfast.map((Break) => {
                        return(
                          <li>{Break}</li>
                        )
                      })
                    }
                  </ul>
                </td>
                <td>
                  <ul>
                    {
                      Day.lunch.map((Lunch) => {
                        return(
                          <li>{Lunch}</li>
                        )
                      })
                    }
                  </ul>
                </td>
                <td>
                  <ul>
                    {
                      Day.snacks.map((Snack) => {
                        return(
                          <li>{Snack}</li>
                        )
                      })
                    }
                  </ul>
                </td>
                <td>
                  <ul>
                    {
                      Day.dinner.map((Dine) => {
                        return(
                          <li>{Dine}</li>
                        )
                      })
                    }
                  </ul>
                </td>
              </tr>
            )
          })
        }
      </MDBTableBody>
    );
  }

  render() {
    return( 
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
          {this.RenderMenu()}
        </MDBTable>
        </div>
     );
  }
}