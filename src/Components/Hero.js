import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { HeroLand, LeftButton, LeftSide, RightSide } from '../Stylesheets/Landing.styled'

const Hero = () => {
  return (
    <>
      <HeroLand>
        <LeftSide>
          <h1>
            sale: get up to 50% off now
          </h1>
          <p>
            The greatest selection of sale pieces from Nigeria's finest fashion boutiques and brands - only on <span>PATTYS</span>  
          </p>

          <LeftButton>
            Shop now
          </LeftButton>
        </LeftSide>
        <br />
        <RightSide>
         <img src="/asset/bags.jpg" alt="" />
          <div>
            <p>
              The greatest selection of sale pieces from Nigeria's finest fashion boutiques and brands - only on <span>PATTYS</span>  
            </p>

            <Link to = 'sale'>View Collection <FontAwesomeIcon icon = {faAngleRight}  size= {'sm'}/></Link>
          </div>
         
        </RightSide>
      </HeroLand>
    </>
  )
}

export default Hero