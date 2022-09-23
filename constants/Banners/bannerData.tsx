import React from "react";
import IScrollView from "@/components/Layout/ScrollView/interface";

export const BANNER_SWIPER: IScrollView["swiperProps"] = {
    slidesPerView: 1, spaceBetween: 50, height: 240, loop: true
}

export const BANNER_DATA: JSX.Element[] = [
    <img src="/images/code.jpg" alt=""/>,
    <img src="/images/code.jpg" alt=""/>,
    <img src="/images/code.jpg" alt=""/>,
    <img src="/images/code.jpg" alt=""/>,
];