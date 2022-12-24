import React from 'react';
import Hero from '../Components/Hero'
import About from '../Components/Organisms/Cards/About';
import {
        LandingBody} from '../Stylesheets/Landing.styled.js';

const Landing = () => {
    return (
        <>
        <LandingBody>
            <Hero/>
            <About/>
        </LandingBody>
        </>
    )
}

export default Landing