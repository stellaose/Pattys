import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {  Navigation } from "swiper";
import { FirstSlide } from "./Slide";


const Slide = () => {
    return (
        <>
            <div >
            <Swiper
                    // pagination={{
                    // type: "fraction",
                    // }}
                    navigation={true}
                    modules={[ Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide><FirstSlide/></SwiperSlide>
                    <SwiperSlide><FirstSlide/></SwiperSlide>
                    <SwiperSlide><FirstSlide/></SwiperSlide>
                    <SwiperSlide><FirstSlide/></SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

export default Slide