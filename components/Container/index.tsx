import React from "react";
import {ContainerSection, GridSection, Header, Item} from "@/components/Container/styles";
import {
    SiCss3,
    SiFirefoxbrowser,
    SiGithub,
    SiHtml5, SiInternetexplorer,
    SiJavascript, SiNodedotjs,
    SiPython,
    SiReact,
    SiTypescript
} from "react-icons/si";
import {AiOutlineLaptop} from "react-icons/ai";
import {RiNodeTree} from "react-icons/ri";
import {TbBrandNextjs} from "react-icons/tb";

const Container = () => {

    const icons = [
        <AiOutlineLaptop />,
        <SiHtml5 />,
        <SiCss3 />,
        <SiJavascript color="#cabf45" />,
        <SiTypescript />,
        <SiInternetexplorer />,
        <SiReact />,
        <SiPython />,
        <RiNodeTree />,
        <SiGithub />,
        <SiNodedotjs />,
        <TbBrandNextjs />,
        <div>11</div>,
        <div>12</div>,
    ]

    return (
        <ContainerSection>
            <Header>관심있는 기술스택을 선택해보세요.</Header>
            <GridSection>
                {icons.map((icon)=>{
                    return <Item>{icon}</Item>
                })}
            </GridSection>
        </ContainerSection>
    );
}

export default Container