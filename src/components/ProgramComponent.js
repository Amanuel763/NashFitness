import React from 'react'
import './ProgramComponent.css'
import { FaHeartbeat } from 'react-icons/fa'
import { CgGym } from  'react-icons/cg'
import { FaChild } from 'react-icons/fa'

function ProgramComponent() {
    return (
        <> 
            <div className='Program'>
                <div className='Program-container'>
                    <div className='row'>
                        <div className='col'>
                            <h1>What we offer..</h1>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <div className='card'>  
                                <div className='card-info'>
                                    <FaHeartbeat className='icon'/>
                                    <p className='card-text'>We offer classes that gets the heart pumping. Join us for a Kickboxing session. Come run along with us in the morning, or join us for Zumba class.</p>
                                </div>  
                            </div>
                        </div>
                        <div className='col'>
                            <div className='card'>
                                <div className='card-info'>
                                    <CgGym className='icon'/>
                                    <p className='card-text'>We offer classes that gets the heart pumping. Join us for a Kickboxing session. Come run along with us in the morning, or join us for Zumba class.</p>

                                </div>                                    
                            </div>
                        </div>
                        <div className='col'>
                            <div className='card'>
                                <div className='card-info'>
                                    <FaChild className='icon'/>
                                    <p className='card-text'>We offer classes that gets the heart pumping. Join us for a Kickboxing session. Come run along with us in the morning, or join us for Zumba class.</p>

                                </div>   
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProgramComponent
