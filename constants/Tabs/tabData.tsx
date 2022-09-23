import React from "react";
import styled from "@emotion/styled";
const Tab = styled.div`
      font-family: 'rokaf';
      font-size: 12px;
      white-space: nowrap;
    `
const TAB_DATA:JSX.Element[] = [
    <Tab>전체</Tab>,
    <Tab>웹 퍼블리싱</Tab>,
    <Tab>자바스크립트</Tab>,
    <Tab>타입스크립트</Tab>,
    <Tab>리액트</Tab>,
    <Tab>웹 브라우저</Tab>,
    <Tab>클린코드</Tab>,
    <Tab>컴퓨터 개론</Tab>,
];

export default TAB_DATA;
