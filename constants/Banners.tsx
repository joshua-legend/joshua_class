import {JSX} from "@babel/types";
import React from "react";
import {SwiperSlide} from "swiper/react";

const banners: () => JSX.Element[] = () => {
    const bannerArray = [
        <img src="/images/code.jpg" alt=""/>,
        <img src="/images/code.jpg" alt=""/>,
        <img src="/images/code.jpg" alt=""/>,
        <img src="/images/code.jpg" alt=""/>,
    ]
    return bannerArray.map((banner,id)=>{
        return (
            <SwiperSlide key={id}>
                {banner}
            </SwiperSlide>
        )
    })
}

export default banners
