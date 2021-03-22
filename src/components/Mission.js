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
                            <div className='Card'>
                                <h5>Hello</h5>

                                <div className='Card-Info'>
                                    <p>Card Info</p>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='Card'>
                                <h5>Hello</h5>

                                <div className='Card-Info'>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='Card'>
                                <h5>Hello</h5>

                                <div className='Card-Info'>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Mission
