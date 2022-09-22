import {JSX} from "@babel/types";
import React from "react";
import {SwiperSlide} from "swiper/react";
import styled from "@emotion/styled";

const tabs: () => JSX.Element[] = () => {

    const Tab = styled.div`
      font-family: 'rokaf';
      font-size: 12px;
      white-space: nowrap;
    `
    const tabsArray = [
        <Tab>전체</Tab>,
        <Tab>웹 퍼블리싱</Tab>,
        <Tab>자바스크립트</Tab>,
        <Tab>타입스크립트</Tab>,
        <Tab>리액트</Tab>,
        <Tab>웹 브라우저</Tab>,
        <Tab>클린코드</Tab>,
        <Tab>컴퓨터 개론</Tab>,
    ]
    return tabsArray.map((tabs,id)=>{
        return (
            <SwiperSlide key={id}>
                {tabs}
            </SwiperSlide>
        )
    })
}

export default tabs
