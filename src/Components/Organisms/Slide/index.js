import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {  Navigation } from "swiper";
import { 
        FirstSlide,
        SecondSlide,
        ThirdSlide,
        FourthSlide } from "./Slide";


const Slide = () => {
    return (
        <>
            <div >
            <Swiper
                    navigation={true}
                    modules={[ Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide><FirstSlide/></SwiperSlide>
                    <SwiperSlide><SecondSlide/></SwiperSlide>
                    <SwiperSlide><ThirdSlide/></SwiperSlide>
                    <SwiperSlide><FourthSlide/></SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

export default Slide