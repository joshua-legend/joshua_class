import React, {useState} from "react";
import {SwiperSlide} from "swiper/react";
import {BANNER_DATA, BANNER_SWIPER} from "@/constants/Banners/bannerData";
import IScrollView from "@/components/Layout/ScrollView/interface";

const banners = ():IScrollView => {
    const [bannersList, setBannersList] = useState(BANNER_DATA)
    return{
        swiperProps: BANNER_SWIPER,
        contents: {
            value: bannersList.map((banner, id) => <SwiperSlide key={id}>{banner}</SwiperSlide>),
        },
    }
}
export default banners;