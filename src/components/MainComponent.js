import React from 'react'
import Header from './Header'
import Bar from './NavComponent'
import Footer from './Footer'
import Home from './HomeComponent'



function Main(){
    return (
        <div>
                <div className="container-fluid topSection">
                    <Header />
                    <Bar />
                </div>
                <Home />   
            <Footer />
        </div>
    )
}

export default Main;