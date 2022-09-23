import React, {useState} from "react";
import "swiper/css";
import {Navigation} from 'swiper';
import {Swiper} from 'swiper/react';
import {SwiperWrapper} from "@/components/Layout/ScrollView/styles";
import IScrollView from "@/components/Layout/ScrollView/interface";

const ScrollView = ({swiperProps,contents}: IScrollView) => {
    const [isClick,setIsClick] = useState(false);

    return (
        <SwiperWrapper height={swiperProps.height} isClick={isClick}>
            <Swiper
                slidesPerView={swiperProps.slidesPerView}
                spaceBetween={swiperProps.spaceBetween}
                loop={swiperProps.loop}
                modules={[Navigation]}
            >
                {contents.value()}
            </Swiper>
        </SwiperWrapper>
    );
}

export default ScrollView