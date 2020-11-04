import React from 'react'

function Footer() {
    return (
        <footer className="container-fluid" id="footer">
            <div className="row contactF">
                <div className="row mr-auto ml-auto ">

                    <a href="http://www.pec.ac.in" className="social-icon" target="_blank" rel="noopener noreferrer"><i className="fa fa-globe-asia social fa-2x"></i></a>

                    <a href="https://www.facebook.com/PunjabEngineeringCollege/" className="social-icon" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f fa-2x"></i></a>

                    <a href="https://www.linkedin.com/edu/school?id=20011" className="social-icon" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in fa-2x"></i></a>

                    <a href="mailto:" className="social-icon"><i className="fa fa-envelope fa-2x" target="_blank"></i></a>

                </div>
            </div>
            <p className="col-12 copyright">Copyright © 2020</p>
        </footer>
    )
}

export default Footer;