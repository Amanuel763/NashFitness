import React from 'react'
import './AboutComponent.css'

function AboutComponent() {
    return (
        <>
            <div className='About'>
                <div className='About-container'>
                    <div className='Row'>
                        <div className='Col'>
                            <div className='about-image'/>                            
                        </div>
                        <div className='Col'>
                            <div className='About-header'>
                                <h5>NashFitness</h5>
                                <h6> NashFitness was founded in 2017 by Kevin and Nathalie to help their community <br /> improve and educate their knowledge about the body and what they consume.</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutComponent
