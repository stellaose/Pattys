import React from 'react'
import { 
        AboutDiv, 
        AboutImg, 
        LandingAbout } from '../../../Stylesheets/Card.styled'

const About = () => {
    return (
        <>
            <LandingAbout>
                <AboutImg src='/asset/logo.png'/>
                <AboutDiv>
                    <h2>Introduce</h2>
                    <p>
                        Pattys store is a business concept created to deliver fashion at the best and affordable price. It was established in 2022 ans has since grown into one of the best Fashion Enterprise at Stella Ose Inc. 
                    </p>
                    <img src="/asset/sign.png" alt=""/>
                </AboutDiv>
            </LandingAbout>
        </>
    )
}

export default About