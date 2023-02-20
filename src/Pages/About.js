import React from 'react'
import { 
        AboutBody, 
        AboutContainer, 
        Img,
        MissionPage} from '../Stylesheets/About.styled'

const About = () => {
  return (
    <>
      <AboutContainer>
        <AboutBody>
          <h1>Our Mission</h1>
          <p>A style for every story. Fashion & function with a purpose</p>
          
          <MissionPage>
            <h1>Our Story</h1>
            <p>
              Pattys store is a business concept created to deliver fashion at the best and affordable price. It was established in 2022 ans has since grown into one of the best Fashion Enterprise at Stella Ose Inc.
            </p>
            <br/>
            <p>
              We started as a small business in a small shop located at Balogun Market in Lagos, Nigeria, and through diligence, consistency and good communication with our customers, we are located in malls across countries in North America, Europe and last but not least Africa.
            </p>
            
            <Img src="/asset/lagos.jpg" alt=""/>
          </MissionPage>
          
          <MissionPage>
            <h1>Our Vision</h1>
            <p>
              We aim to offer our customers a variety of the latest fashion. We've come a long way, so we know exactly which direction to take when supplying you with high quality yet budget-friendly products. We offer all of this while providing excellent customer service and friendly support.

            </p>
            <br/>
            <p>
              We always keep an eye on the latest trends in Fashion and put our customers' wishes first. That is why we have satisfied customers all over the world, and are thrilled to be a part of the Fashion industry.  
            </p>
            <br/>
            <p>
              The interests of our customers are always top priority for us, so we hope you will enjoy our products as much as we enjoy making them available to you.
            </p>
            
            <Img src="/asset/vision.jpg" alt=""/>
          </MissionPage>
        </AboutBody>
      </AboutContainer>
      
    </>
  )
}

export default About