import {JSX} from "@babel/types";
import React from "react";
import {SwiperSlide} from "swiper/react";
import {BANNER_DATA} from "@/constants/Banners/bannerData";


const banners: () => JSX.Element[] = () => {
    return BANNER_DATA.map((banner,id)=>{
        return (
            <SwiperSlide key={id}>
                {banner}
            </SwiperSlide>
        )
    })
}

export default banners
