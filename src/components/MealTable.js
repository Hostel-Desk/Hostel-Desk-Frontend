import React, { Component } from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { Loading } from './LoadingComponent';
export default class MealView extends Component {

  RenderMenu() {
    return (
      <MDBTableBody>
        {
          this.props.meals.map((meal) => {
            return (
              <tr>
                <td>{meal.day}</td>
                <td>
                  <ul>
                    {
                      meal.breakfast.map((Break) => {
                        return (
                          <li>{Break}</li>
                        )
                      })
                    }
                  </ul>
                </td>
                <td>
                  <ul>
                    {
                      meal.lunch.map((Lunch) => {
                        return (
                          <li>{Lunch}</li>
                        )
                      })
                    }
                  </ul>
                </td>
                <td>
                  <ul>
                    {
                      meal.snacks.map((Snack) => {
                        return (
                          <li>{Snack}</li>
                        )
                      })
                    }
                  </ul>
                </td>
                <td>
                  <ul>
                    {
                      meal.dinner.map((Dine) => {
                        return (
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
    if (this.props.isLoading) {
      return (<Loading />);
    }
    else if (this.props.errMess) {
      return (
        <div><p>{this.props.errMess} Please try again</p></div>);
    }

    else {
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
            {this.RenderMenu()}
          </MDBTable>
        </div>
      );
    }

  }
}