import React from 'react';
import Hero from '../Components/Hero'
import {
        LandingBody} from '../Stylesheets/Landing.styled.js';

const Landing = () => {
  return (
    <>
      <LandingBody>
        <Hero/>
      </LandingBody>
    </>
  )
}

export default Landing