import React from 'react'
import Header from './Header'
import Bar from './NavComponent'
import Footer from './Footer'
import Home from './HomeComponent'
import { BrowserRouter, Switch, Route, Redirect, useLocation } from 'react-router-dom'
import Admin from './AdminMainComponent'
import Contact from './ContactComponent'
function Main(){
    return (
        <div>
            <div className="container-fluid topSection">
                <Header />
                <Bar />
            </div>

                <Switch >
                    <Route path="/home" component={Home}/>
                    <Route path="/admin" component={Admin}/>
                    <Route path="/contactus" component={Contact}/>
                    <Redirect to="/home"/>
                </Switch>


            <Footer />
        </div>
    )
}

export default Main;
