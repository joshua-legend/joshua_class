import type {NextPage} from 'next'
import MainSpace from "@/layouts/mainspace";
import FrameSpace from "@/layouts/framespace";
import ScrollView from "@/components/Layout/ScrollView";
import Container from "@/components/Layout/Container";
import {useEffect, useState} from "react";
import IContainer from "@/components/Layout/Container/interface";
import IScrollView from "@/components/Layout/ScrollView/interface";
import largeCategoryIcons from "@/constants/Icons/largeCategory/largeCategoryIcons";
import promotionBanner from "@/constants/Banners/promotion/promotionBanner";
import cards from "@/constants/Cards/lorem/cards";


const Home: NextPage = () => {
    const [banner, setBanner] = useState<IScrollView>({...promotionBanner()});
    const [icon, setIcon] = useState<IContainer>({...largeCategoryIcons()});
    const [tech, setTech] = useState<IContainer>({...cards()});

    useEffect(()=>{
        console.log(icon)
    },[icon])

    return (
        <FrameSpace>
            <MainSpace>
                <ScrollView {...banner}/>
                <Container {...icon}/>
                {/*<Container {...tech}/>*/}
            </MainSpace>
        </FrameSpace>
    )
}

export default Home
