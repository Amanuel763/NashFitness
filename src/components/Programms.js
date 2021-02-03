import React from 'react'
import './Programms.css'
import {AiFillEye} from 'react-icons/ai'
import { Link } from 'react-router-dom'

function Programms() {
    return (
        <>
            <div className='Programms'>
                <div className='Programms-container'>
                    <div className='Programm-header'>
                        <h1>Programms</h1>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <div className='card'>
                                <h6>Exercise</h6>
                                <hr/>
                                <Link>
                                <div className='card-body'>
                                    <div className='overlay'>
                                        <div className='overlay-image'>
                                            <AiFillEye />
                                        </div>
                                    </div>
                                </div>
                                </Link>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='card'>
                                    <h6>Wellness</h6>
                                <hr/>
                                <Link to='/wellness'>
                                <div className='card-body'>
                                    <div className='overlay'>
                                        <div className='overlay-image'>
                                            <AiFillEye />

                                        </div>
                                    </div>      
                                </div>
                                </Link>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='card'>
                                <h6>Aerobics</h6>
                                <hr/>
                                <Link>
                                <div className='card-body'>
                                    <div className='overlay'>
                                        <div className='overlay-image'>
                                            <AiFillEye />
                                        </div>
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
                                        <div className='overlay-image'>
                                        <div className='overlay2' />
                                            <AiFillEye />
                                        </div>
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

export default Programms
