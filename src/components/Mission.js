import React from 'react'
import { Link } from 'react-router-dom'
import './Mission.css'

function Mission() {
    return (
        <>
            <div className='Mission'>
                <div className='Mission-container'>
                    <div className='Mission-header'>
                        <h1>Our Mission</h1>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <div className='card'>
                                <h6>Motivate to Exercise</h6>
                                <hr/>
                                <Link>
                                <div className='card-body'>
                                    <div className='overlay'>
                                        <p>Helping to create a individualistic training plan</p>
                                    </div>
                                </div>
                                </Link>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='card'>
                                    <h6>Community Engagement</h6>
                                <hr/>
                                <Link to='/wellness'>
                                <div className='card-body'>
                                    <div className='overlay'>
                                        <p>
                                            Creating a safe environment for our children
                                        </p>
                                    </div>      
                                </div>
                                </Link>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='card'>
                                <h6>Healthy Lifestyle</h6>
                                <hr/>
                                <Link>
                                <div className='card-body'>
                                    <div className='overlay'>
                                        <p>
                                            Cooking classes for a better diet and a healthy life.
                                        </p>
                                    </div>
                                </div>
                                </Link>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='card'>
                                <h6>Youth Sports Club</h6>
                                <hr/>
                                <Link>
                                <div className='card-body'>
                                    <div className='overlay'>
                                        <p>
                                            Getting children into the outdoors.
                                        </p>
                                    </div>
                                </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Mission
