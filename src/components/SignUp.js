import React from 'react'
import { Button } from 'react-bootstrap'
import './SignUp.css'

function SignUp() {
    return (
        <>
            <div className='Signup'>
                <div className='container'>
                    <div className='Header'>
                        <h1 className='text'>Check out our great offer this month. Become a member now!</h1>
                        <Button className='btn'>Sign Up</Button>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default SignUp
