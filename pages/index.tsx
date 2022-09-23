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
import banners from "@/constants/Banners/banners";


const Home: NextPage = () => {

    const [banner, setBanner] = useState<IScrollView>({...banners()});
    const [icon, setIcon] = useState<IContainer>({...icons()});
    const [tech, setTech] = useState<IContainer>({...cards()});
    return (
        <FrameSpace>
            <MainSpace>
                {/*<ScrollView swiperProps={{...banner.swiperProps}} contents={{...banner.contents}}/>*/}
                <ScrollView {...banner}/>
                <Container {...icon}/>
                {/*<Container contents={{...tech.contents}} gridRC={{...tech.gridRC}}/>*/}
            </MainSpace>
        </FrameSpace>
    )
}

export default Home
