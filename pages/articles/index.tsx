import type {NextPage} from 'next'
import MainSpace from "@/layouts/mainspace";
import FrameSpace from "@/layouts/framespace";
import {useState} from "react";
import ScrollView from "@/components/Layout/ScrollView";
import IScrollView from "@/components/Layout/ScrollView/interface";
import Tabs from "@/constants/Tabs";
import Container from "@/components/Layout/Container";
import IContainer from "@/components/Layout/Container/interface";
import icons from "@/constants/Icons/Icons";
import levels from "@/constants/Levels/Levels";

const Articles: NextPage = () => {

    const [icon, setIcon] = useState<IContainer>({
        contents: {value: levels},
        gridRC: {rowNumber: 1, columnNumber: 5}
    });
    const [tabs, setTabs] = useState<IScrollView>({
        swiperProps: {slidesPerView: 4, spaceBetween: 70, height: 94},
        contents: {value: Tabs, header: undefined}
    });

    return (
        <FrameSpace>
            <MainSpace>
                <Container contents={{...icon.contents}} gridRC={{...icon.gridRC}}/>
                <ScrollView swiperProps={{...tabs.swiperProps}} contents={{...tabs.contents}}/>
            </MainSpace>
        </FrameSpace>
    )
}

export default Articles
