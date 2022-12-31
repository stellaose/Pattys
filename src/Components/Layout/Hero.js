import React from "react";
import {
  BottomGrid,
  BottomHero,
  HeroBody,
  HeroGrid,
} from "../../Stylesheets/Landing.styled";
import Slide from "../Organisms/Slide";
import { FiSend } from "react-icons/fi";
import { AiOutlineUndo, AiOutlineLock } from "react-icons/ai";
import { RiPriceTag3Line } from "react-icons/ri";

const Hero = () => {
  return (
    <>
      <HeroBody>
        <Slide />
        <HeroGrid>
          <BottomGrid>
            <FiSend />
            <BottomHero>
              <h3>Free Shipping</h3>
              <p>Orders over &#8358;2,000</p>
            </BottomHero>
          </BottomGrid>
          <BottomGrid>
            <AiOutlineUndo />
            <BottomHero>
              <h3>Free Return</h3>
              <p>Within 30 days</p>
            </BottomHero>
          </BottomGrid>

          <BottomGrid>
            <AiOutlineLock />
            <BottomHero>
              <h3>100% Secure</h3>
              <p>Payment online</p>
            </BottomHero>
          </BottomGrid>

          <BottomGrid>
            <RiPriceTag3Line />
            <BottomHero>
              <h3>Best Price</h3>
              <p>Guaranteed</p>
            </BottomHero>
          </BottomGrid>
        </HeroGrid>
      </HeroBody>
    </>
  );
};

export default Hero;
