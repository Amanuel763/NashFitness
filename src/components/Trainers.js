import React from 'react'
import './Trainers.css'

function Trainers() {
    return (
        <>
            <div className='Trainers'>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <div className='Header'>
                                <h1>Our Trainers</h1>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <div className='Trainer-1'></div>
                            <h2>Jason Terry</h2>
                        </div>
                        <div className='col'>
                            <div className='Trainer-2'>
                            </div>
                            <h2>Roberta DeMaria</h2>

                        </div>
                        <div className='col'>
                            <div className='Trainer-3'>
                            </div>
                            <h2>Nathanial Daniel</h2>

                        </div>
                    </div>
                </div>
            </div>    
        </>
    )
}

export default Trainers
