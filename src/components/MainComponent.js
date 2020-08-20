import React, { Component } from 'react'
import Header from './Header'
import Bar from './NavComponent'
import Footer from './Footer'
import Home from './HomeComponent'
import { Switch, Route, Redirect } from 'react-router-dom'
import Admin from './AdminMainComponent'
import Contact from './ContactComponent'
import Student from './StudentMainComponent'
import LoginForm from './LoginForm'
class Main extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            changedValue: '',
            token: ''
        }
    }

    changelink = (value) => {
        console.log(value);
        this.setState({
            changedValue: value,
        })
    }

    getToken = (token) => {
        this.setState({
            token: token
        })
        console.log(`Main Component State: ${this.state.token}`);
    }
    
    render() {
        return (
            <div>
                <div className="container-fluid topSection">
                    <Header />
                    <Bar getToken = {this.getToken} changelink = {this.changelink} changedValue={this.state.changedValue}/>
                </div>
    
                    <Switch >
                        <Route path="/home" component={() => <Home/>}/>
                        <Route path="/admin" component={() => <Admin token = {this.state.token} changedValue = {this.state.changedValue}/>}/>
                        <Route path="/contactus" component={Contact}/>
                        <Route path="/student" component={() => <Student token = {this.state.token} changedValue = {this.state.changedValue}/>}/>
                        <Route path="/login" component={() => <LoginForm changelink = {this.changelink} getToken = {this.getToken} token = {this.state.token} changedValue = {this.state.changedValue}/>}/>
                        <Redirect to="/home"/>
                    </Switch>
                <Footer />
            </div>
        )
    }
}

export default Main;
