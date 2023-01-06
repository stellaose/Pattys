import React from 'react';
import { NavLink } from 'react-router-dom'
import { 
        FooterBody,
        FooterContent,
        PageLeftDiv,
        PageMidDiv,
        PageSocialDiv,
        Social,
        Subscribe } from '../../../Stylesheets/Footer.styled'
import { 
        AiFillFacebook,
        AiFillTwitterCircle,
        AiFillLinkedin,
        AiOutlineInstagram} from 'react-icons/ai'

const Footer = () => {
  return (
    <>
      <FooterBody>
        <FooterContent>
          <PageLeftDiv>
            <NavLink to = 'shop-now' exact='true' activeclassName = 'active'>
              <p>
                Shop
              </p>
            </NavLink>
                        
            <NavLink to='sales' exact='true' activeclassName = 'active'>
              <p>
                Sales
              </p>
            </NavLink>
                        
                        
                        
            <NavLink to ='about-us' exact='true' activeclassName = 'active'>
              <p>
                About Us
              </p>
            </NavLink>
                        
            <NavLink to ='my-wishlist' exact='true' activeclassName = 'active'>
              <p>
                Wishlist
              </p>
            </NavLink>
          </PageLeftDiv>
          <PageMidDiv>
            <h3>Address</h3>
            <p>Lagos, Nigeria</p>
            <br/>
            <br/>
            <br/>
          </PageMidDiv>
          <PageMidDiv>
            <h3>Email Address</h3>
            <p>stellaoseinc@gmail.com</p>
                        
            <NavLink to ='contact-us' exact='true' activeclassName = 'active'>
              <p>
                Contact Us
              </p>
            </NavLink>
            <NavLink to ='checkout' exact='true' activeclassName = 'active'>
              <p>
                Checkout
              </p>
            </NavLink>
          </PageMidDiv>
          <PageSocialDiv>
            <Subscribe>
              <h3> Subscribe to our Newsletter</h3>
              <input type="text" placeholder='Enter email here'/>
              <input  style= {{cursor: 'pointer'}} type="submit"  value='Enter'/>
            </Subscribe>
            <Social>
              <h3>Follow us</h3>
                <div>
                  <a href = 'https://www.instagram.com/stellaose/' target='_blank' rel='noreferrer'>
                    <p>
                      <AiFillFacebook/>
                    </p>
                  </a>
                                
                  <a href = 'https://twitter.com/stellaose_' target='_blank' rel='noreferrer'>
                    <p>
                      <AiFillTwitterCircle/>
                    </p>
                  </a>
                                
                  <a href = 'https://www.linkedin.com/in/stella-oseyomon-8a2836103' target='_blank' rel='noreferrer'>
                    <p>
                      <AiFillLinkedin/>
                    </p>
                  </a>
                                
                  <a href = 'https://web.facebook.com/stella.oseyomon' target='_blank' rel='noreferrer'>
                    <p>
                      <AiOutlineInstagram/>
                    </p>
                  </a>
                </div>
                            
              </Social>
            </PageSocialDiv>
          </FooterContent>
        </FooterBody>
      </>
  )
}

export default Footer