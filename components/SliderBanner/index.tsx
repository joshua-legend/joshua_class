import React from "react";
import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import {SwiperWrapper} from "@/components/SliderBanner/styles";
const SliderBanner = () => {
    return (
        <SwiperWrapper>
            <Swiper
                spaceBetween={100}
                loop
                navigation
                modules={[Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <a href="www.youtube.com">
                        <img src="/images/code.jpg" alt=""/>
                    </a>
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
            </Swiper>
        </SwiperWrapper>
    );
}

export default SliderBanner