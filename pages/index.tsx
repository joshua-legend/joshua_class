import type {NextPage} from 'next'
import MainSpace from "@/layouts/mainspace";
import FrameSpace from "@/layouts/framespace";
import ScrollView from "@/components/Layout/ScrollView";
import Container from "@/components/Layout/Container";
import {useState} from "react";
import IContainer from "@/components/Layout/Container/interface";
import IScrollView from "@/components/Layout/ScrollView/interface";
import cards from "@/constants/Cards/cards";
import icons from "@/constants/Icons/icons";
import {AiOutlineHome} from "react-icons/ai";
import banners from "@/constants/Banners/banners";


const Home: NextPage = () => {

    const [banner, setBanner] = useState<IScrollView>({...banners()});

    const [icon, setIcon] = useState<IContainer>({
        contents: {header: "관심 있는 기술 스택을 선택하세요", bread: [{icon: <AiOutlineHome/>, name: "home"}], value: icons},
        gridRC: {rowNumber: 3, columnNumber: 3}
    });

    const [tech, setTech] = useState<IContainer>({
        contents: {header: "관심 있는 직군을 선택하세요", value: cards},
        gridRC: {rowNumber: 2, columnNumber: 2},
    });
    return (
        <FrameSpace>
            <MainSpace>
                <ScrollView swiperProps={{...banner.swiperProps}} contents={{...banner.contents}}/>
                <Container contents={{...icon.contents}} gridRC={{...icon.gridRC}}/>
                {/*<Container contents={{...tech.contents}} gridRC={{...tech.gridRC}}/>*/}
            </MainSpace>
        </FrameSpace>
    )
}

export default Home
