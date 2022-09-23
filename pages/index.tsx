import type {NextPage} from 'next'
import MainSpace from "@/layouts/mainspace";
import FrameSpace from "@/layouts/framespace";
import ScrollView from "@/components/Layout/ScrollView";
import Container from "@/components/Layout/Container";
import {useState} from "react";
import IContainer from "@/components/Layout/Container/interface";
import IScrollView from "@/components/Layout/ScrollView/interface";
import cards from "@/constants/Cards/lorem/cards";
import largeCategoryIcons from "@/constants/Icons/largeCategory/largeCategoryIcons";
import promotionBanner from "@/constants/Banners/promotion/promotionBanner";


const Home: NextPage = () => {

    const [banner, setBanner] = useState<IScrollView>({...promotionBanner()});
    const [icon, setIcon] = useState<IContainer>({...largeCategoryIcons()});
    const [tech, setTech] = useState<IContainer>({...cards()});
    return (
        <FrameSpace>
            <MainSpace>
                {/*<ScrollView swiperProps={{...banner.swiperProps}} contents={{...banner.contents}}/>*/}
                <ScrollView {...banner}/>
                <Container {...icon}/>
                <Container {...tech}/>
            </MainSpace>
        </FrameSpace>
    )
}

export default Home
