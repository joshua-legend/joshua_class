import type { NextPage } from 'next'
import MainSpace from "@/layouts/mainspace";
import FrameSpace from "@/layouts/framespace";
import SliderBanner from "@/components/SliderBanner";
import Container from "@/components/Container";


const Home: NextPage = () => {
  return (
    <FrameSpace>
        <MainSpace>
            <SliderBanner />
            <Container />
        </MainSpace>
    </FrameSpace>
  )
}

export default Home
