import React from 'react'
// import { Link } from 'react-router-dom'
import { 
        InstagramBody,
        InstagramContent } from '../../../Stylesheets/Organism.styled'

const Instagram = () => {
    return (
        <>
            <InstagramBody>
                <h2>Our Instagram</h2>
                
                <InstagramContent>
                    <img src="/asset/Landing/ties.jpg" alt="ties"/>
                    <img src="/asset/Landing/socks.jpg" alt="socks"/>
                    <img src="/asset/Landing/belt.jpg" alt="belt"/>
                    <img src="/asset/Landing/hats.jpg" alt="hats"/>
                    <img src="/asset/Landing/sunglasses.jpg" alt="sunglasses"/>
                    
                </InstagramContent>
               
            </InstagramBody>
        </>
    )
}

export default Instagram