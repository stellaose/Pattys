import React from 'react'
import { Link } from 'react-router-dom'
import { Fade } from 'react-reveal';
import { LeftSlide, RightImg, RightSlide, SlideBody } from '../../../Stylesheets/Slide.styled';


export const FirstSlide = () => {
    return (
        <>
            <SlideBody id='slideBody'>
                <LeftSlide>
                    <Fade top>
                        <h3>New Arrivals</h3>
                        
                        <h1>It's in your Jeans.</h1>
                   
                        <p>
                            The perfect fit. Giving you the desired shape while making a statement.
                        </p>
                        
                        <Link to='/shop-now' onClick={() => {window.scroll(0, 0)}}>
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
            <SlideBody>
                <LeftSlide>
                    <Fade top>
                        <h3>New Arrivals</h3>
                        
                        <h1>Wear the Fashion.</h1>
                   
                        <p>
                            Feel trendy, feel authentic. Express your style with us while looking perfect from every angle.
                        </p>
                        
                        <Link to='/shop-now' onClick={() => {window.scroll(0, 0)}}>
                            <button>Explore Now</button>
                        </Link>
                    </Fade> 
                </LeftSlide>
                <RightSlide >
                    <RightImg src="/asset/shirt1.jpg" alt="slide"/>
                </RightSlide>
                
                
            </SlideBody>
        </>
    )
}


export const ThirdSlide = () => {
    return (
        <>
            <SlideBody>
                <LeftSlide>
                    <Fade top>
                        <h3>New Arrivals</h3>
                        
                        <h1>Feet With a Beat.</h1>
                   
                        <p>
                            Be comfy, be stylish, make your walk better. It's all about your needs.
                        </p>
                        
                        <Link to='/shop-now' onClick={() => {window.scroll(0, 0)}}>
                            <button>Explore Now</button>
                        </Link>
                    </Fade> 
                </LeftSlide>
                <RightSlide >
                    <RightImg src="/asset/heels.jpg" alt="slide"/>
                </RightSlide>
                
                
            </SlideBody>
        </>
    )
}

export const FourthSlide = () => {
    return (
        <>
            <SlideBody>
                <LeftSlide>
                    <Fade top>
                        <h3>New Arrivals</h3>
                        
                        <h1>Long Live Bag.</h1>
                   
                        <p>
                            Welcome to Backpack Country. It's A New Backpack Every Day. 
                        </p>
                        
                        <Link to='/shop-now' onClick={() => {window.scroll(0, 0)}}>
                            <button>Explore Now</button>
                        </Link>
                    </Fade> 
                </LeftSlide>
                <RightSlide >
                    <RightImg src="/asset/bag.jpg" alt="slide"/>
                </RightSlide>
                
                
            </SlideBody>
        </>
    )
}