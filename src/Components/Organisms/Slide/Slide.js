import React from 'react'
import { Link } from 'react-router-dom'
import { Fade } from 'react-reveal';
import { LeftSlide, RightImg, RightSlide, SlideBody } from '../../../Stylesheets/Slide.styled';


export const FirstSlide = () => {
    return (
        <>
            <SlideBody>
                <LeftSlide>
                    <Fade top>
                        <h3>New Arrivals</h3>
                        
                        <h1>Denim Full Of Spirit</h1>
                   
                        <p>
                            The perfect fit. Giving you the desired shape while making a statement.
                        </p>
                        
                        <Link to='/products'>
                            <button>Explore Now</button>
                        </Link>
                    </Fade> 
                </LeftSlide>
                <RightSlide >
                    <RightImg src="/asset/hero-jeans.png" alt="slide"/>
                </RightSlide>
                
                
            </SlideBody>
        </>
    )
}

export const SecondSlide = () => {
    return (
        <>
            <div >
                <div >
                    <img src="/assets/farm-portfolio.png" alt="slide"/>
                </div>
                <div >
                    <Fade top>
                        <h1>C & M FarmTechs</h1>
                        
                        <p>C&M FarmTech offers a comprehensive solution for specialized farming that transforms it into various products for commercial and individual purposes. </p>
                    </Fade>
                   
                    <Fade bottom>
                        {/* <Link href='/case-study/farmTechs'  passHref> */}
                            <button>See more</button>
                        {/* </Link> */}
                    </Fade> 
                </div>
            </div>
        </>
    )
}


export const ThirdSlide = () => {
    return (
        <>
            <div >
                 
                <div >
                    <img src="/assets/da-portfolio.jpg" alt="slide"/>
                </div>
                
                <div >
                    <Fade top>
                        <h1>Destiney Arkaden</h1>
                        
                        <p>Destiney Arkaden provides an educational platform that enables prospective international students to find the right study programs and universities abroad, especially in Germany and other EU countries.</p>
                    </Fade>
                   
                    <Fade bottom>
                        
                        
                            <button>See more</button>
                        
                    </Fade> 
                </div>
               
            </div>
        </>
    )
}

export const FourthSlide = () => {
    return (
        <>
            <div >
                <div >
                    <img src="/assets/man-portfolio.jpg" alt="slide"/>
                </div>
                <div >
                    <Fade top>
                        <h1>Mandigo Discothek</h1>
                        
                        <p>Transforming Berlin’s Elite Nightlife With Its Impeccable Design And Finishing, Complemented With Stunning And First Of Its Kind Decor And Lighting, World Class Customer Service And Hospitality. </p>
                    </Fade>
                   
                    <Fade bottom>
                            <button>See more</button>
                    </Fade> 
                </div>
            </div>
        </>
    )
}