import React from 'react'
import Header from './Header'
import Bar from './NavComponent'
import Footer from './Footer'
import Home from './HomeComponent'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Admin from './AdminMainComponent'

function Main(){
    return (
        <div>
                <div className="container-fluid topSection">
                    <Header />
                    <Bar />
                </div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/home" component={Home}/>
                        <Route exact path="/admin" component={Admin}/>
                        <Redirect to="/home"/>
                    </Switch>
                </BrowserRouter>   
            <Footer />
        </div>
    )
}

export default Main;