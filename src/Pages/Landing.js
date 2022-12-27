import React from 'react';
import Hero from '../Components/Hero'
import Collections from '../Components/Molecules/Collections';
import Instagram from '../Components/Molecules/Instagram';
import About from '../Components/Organisms/Cards/About';
import LandingTab from '../Components/Organisms/Tabs/LandingTab';
import {
        LandingBody} from '../Stylesheets/Landing.styled.js';

const Landing = () => {
    return (
        <>
        <LandingBody>
            <Hero/>
            <About/>
            <LandingTab/>
            <Collections/>
            <Instagram/>
        </LandingBody>
        </>
    )
}

export default Landing