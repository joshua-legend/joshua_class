import React, {useState} from "react";
import {SwiperSlide} from "swiper/react";
import TAB_DATA from "@/constants/Tabs/tabData";
const tabs = () => {
    const [tabsList, setTabsList] = useState(TAB_DATA)
    return tabsList.map((tabs,id)=><SwiperSlide key={id}>{tabs}</SwiperSlide>)
}

export default tabs
