import React, { Component } from 'react'
import Header from './Header'
import Bar from './NavComponent'
import Footer from './Footer'
import Home from './HomeComponent'
import { Switch, Route, Redirect } from 'react-router-dom'
import Admin from './AdminMainComponent'
import Contact from './ContactComponent'
import Student from './StudentMainComponent'
class Main extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            changedValue: ''
        }
    }

    changelink = (value) => {
        console.log(value);
        this.setState({
            changedValue: value,
        })
    }
    
    render() {
        return (
            <div>
                <div className="container-fluid topSection">
                    <Header />
                    <Bar changelink = {this.changelink} changedValue={this.state.changedValue}/>
                </div>
    
                    <Switch >
                        <Route path="/home" component={() => <Home/>}/>
                        <Route path="/admin" component={() => <Admin changedValue = {this.state.changedValue}/>}/>
                        <Route path="/contactus" component={Contact}/>
                        <Route path="/student" component={() => <Student changedValue = {this.state.changedValue}/>}/>
                        <Redirect to="/home"/>
                    </Switch>
                <Footer />
            </div>
        )
    }
}

export default Main;
