import React from 'react'
import { Button } from 'react-bootstrap'
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
                                <h6> NashFitness was founded in 2017 by Kevin and Nathalie to help their community <br /> gain more knowledge about Nutrition and encourage regular exercise. Sport<br /> shoud be a painful but fun experience for all.</h6>
                                <Button className='btn--outline'>Learn More</Button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutComponent
