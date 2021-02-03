import React from 'react';
import { Link } from 'react-router-dom';


function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">             
                    <div className="col-md-4 col-sm-3 mx-auto  text-center">
                        <hr  className = "hr"/>
                        <h5 className = "headerFooter">Links</h5>
                        <hr className = "hr" />
                        <ul className="list-unstyled">
                            <li className = "links"><Link to='/home'>Home</Link></li>
                            <li className = "links"><Link to='/directory'>Directory</Link></li>
                            <li className = "links"><Link to='/aboutus'>About</Link></li>
                            <li className = "links"><Link to='/contactus'>Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-4 col-sm-3 mx-auto text-center">
                        <hr className = "hr" />
                        <h5 className = "headerFooter">Address</h5>
                        <hr className = "hr" />
                        <p className = "footerText">8th Avenue South, Nashville, Tennessee 37215</p>
                    </div>
                    <div className="col-md-4 col-sm-3 mx-auto text-center">
                        <hr className = "hr" />
                        <h5 className = "headerFooter">Disclaimer</h5>
                        <hr className = "hr" />
                        <p className = "footerText">Some of our Products may contain nuts. You are responsible to look after yourself and ask questions if you have any alergens.</p>
                    </div>
                </div>
                <div className = "col-md-12 text-center">
                <hr className = "hr" />
                <h5 id="footer">&copy; by NashFitness Inc.</h5>

                </div>
            </div>
        </footer>
        
    );
}

export default Footer;