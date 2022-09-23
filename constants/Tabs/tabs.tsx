import {JSX} from "@babel/types";
import React from "react";
import {SwiperSlide} from "swiper/react";
import TAB_DATA from "@/constants/Tabs/tabData";

const tabs: () => JSX.Element[] = () => {

    return TAB_DATA.map((tabs,id)=>{
        return (
            <SwiperSlide key={id}>
                {tabs}
            </SwiperSlide>
        )
    })
}

export default tabs
