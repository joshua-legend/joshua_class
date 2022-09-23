import React, {useState} from "react";
import {SwiperSlide} from "swiper/react";
import {BANNER_DATA} from "@/constants/Banners/bannerData";
const banners = () => {
    const [bannersList, setBannersList] = useState(BANNER_DATA)
    return bannersList.map((banner,id)=><SwiperSlide key={id}>{banner}</SwiperSlide>)
}
export default banners;