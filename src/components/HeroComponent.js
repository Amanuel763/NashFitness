import React from 'react';
import { Button } from 'react-bootstrap';
import './HeroComponent.css'


function HeroComponent() {
    return (
        <>
            <div className='Hero-container'>
                <h1>NashFitness</h1>
                <h2>Where Greatness is made</h2>
                <div className='Hero-overlay'>
                    <h4>Learn more about eating healthy with this cool application.</h4>
                    <button href='#'>Learn More</button>
                </div>
            </div>
        </>
    )
}

export default HeroComponent;
