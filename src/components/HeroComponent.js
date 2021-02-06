import React from 'react';
import { AiOutlineArrowDown } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './HeroComponent.css'


function HeroComponent() {
    return (
        <>
            <div className='Hero-container'>
                <h1 className='Hero-Nash'>NashFitness</h1>
                <h2>Where Greatness is made</h2>
                <div className='Arrowdown'>
                    <Button>Learn More</Button>
                </div>
            </div>
        </>
    )
}

export default HeroComponent;
