import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookSquare } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { AiFillTwitterCircle } from 'react-icons/ai'
import './Footer.css'


function Footer(props) {
    return (
        <footer className="site">
            <div className="container">
                <div className="row">             
                    <div className="col-md-3 col-sm-3 mx-auto  text-center">
                        <h5 className = "headerFooter">Links</h5>
                        <hr className = "hr" />
                        <ul className="list-unstyled">
                            <li className = "links"><Link to='/home'>Home</Link></li>
                            <li className = "links"><Link to='/directory'>Directory</Link></li>
                            <li className = "links"><Link to='/aboutus'>About</Link></li>
                            <li className = "links"><Link to='/contactus'>Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-3 mx-auto text-center">
                            <h5 className = "headerFooter">Address</h5>
                            <hr className = "hr" />
                            <p className = "footerText">8th Avenue South, Nashville, Tennessee 37215</p>
                    </div>
                    <div className="col-md-3 col-sm-3 mx-auto text-center">
                            <h5 className = "headerFooter">Disclaimer</h5>
                            <hr className = "hr" />
                            <p className = "footerText">Some of our Products may contain nuts. You are responsible to look after yourself and ask questions if you have any alergens.</p>
                    </div>
                    <div className="col-md-3 col-sm-3 mx-auto text-center">
                        <h5 className = "header-Footer"><span className='Nash'>Nash</span>Fitness</h5>
                        <p className = "footerText">Our staff will help you reach your goal. Check out our Social Media to see our Success Stories.</p>
                        <div className='socialmedia social-container'>
                            <div className='row'>
                                <div className='col'>
                                    <div className='Twitter'>
                                        <AiFillTwitterCircle />
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className='Instagram'>
                                        <FiInstagram />
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className='Facebook'>
                                        <FaFacebookSquare />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "col-md-12 text-center">
                <hr className = "hr-footer" />
                <h5 id="footer">&copy; All Rights reserved to NashFitness | FAQ | Privacy Policy</h5>

                </div>
            </div>
        </footer>
        
    );
}

export default Footer;