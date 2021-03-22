import React from 'react'
import AboutComponent from '../../AboutComponent'
import HeroComponent from '../../HeroComponent'
import SignUp from '../../SignUp'
import Trainers from '../../Trainers'

function Home() {
    return (
        <>
            <HeroComponent />
            <AboutComponent />
            <SignUp />
            <Trainers />
        </>
    )
}

export default Home
