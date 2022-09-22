import type {NextPage} from 'next'
import MainSpace from "@/layouts/mainspace";
import FrameSpace from "@/layouts/framespace";
import {useState} from "react";
import ScrollView from "@/components/Layout/ScrollView";
import IScrollView from "@/components/Layout/ScrollView/interface";
import Tabs from "@/constants/Tabs";
import Container from "@/components/Layout/Container";
import IContainer from "@/components/Layout/Container/interface";
import levels from "@/constants/Levels/Levels";
import cards from "@/constants/Cards/Cards";

const Articles: NextPage = () => {

    const [icon, setIcon] = useState<IContainer>({
        contents: {value: levels},
        gridRC: {rowNumber: 1, columnNumber: 5}
    });
    const [tabs, setTabs] = useState<IScrollView>({
        swiperProps: {slidesPerView: 4, spaceBetween: 70, height: 94},
        contents: {value: Tabs, header: undefined}
    });
    const [tech, setTech] = useState<IContainer>({
        contents: {header: "관심 있는 직군을 선택하세요", value: cards},
        gridRC: {rowNumber: 2, columnNumber: 2},
    });

    return (
        <FrameSpace>
            <MainSpace>
                <Container contents={{...icon.contents}} gridRC={{...icon.gridRC}}/>
                <ScrollView swiperProps={{...tabs.swiperProps}} contents={{...tabs.contents}}/>
                <Container contents={{...tech.contents}} gridRC={{...tech.gridRC}}/>
            </MainSpace>
        </FrameSpace>
    )
}

export default Articles
