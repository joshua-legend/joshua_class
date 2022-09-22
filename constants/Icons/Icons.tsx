import React from "react";
import {JSX} from "@babel/types";
import {AiOutlineLaptop} from "react-icons/ai";
import {SiCss3, SiGit, SiGooglechrome, SiHtml5, SiJavascript, SiNodedotjs, SiPython, SiReact, SiTypescript} from "react-icons/si";
import {BiNetworkChart} from "react-icons/bi";
import {TbBrandNextjs} from "react-icons/tb";
import Techcon, {ITechcon} from "@/components/Display/Icons/Techcon";


const icons: () => JSX.Element[] = () => {
    const techIcons: ITechcon[] = [
        {techIcon: <AiOutlineLaptop color="#E1E0E6" size={45}/>, name: "CS"},
        {techIcon: <SiHtml5 color="#DD4D25" size={45}/>, name: "HTML"},
        {techIcon: <SiCss3 color="#31A4D5" size={45}/>, name: "CSS"},
        {techIcon: <SiJavascript color="#F7DF38" size={45}/>, name: "Javascript"},
        {techIcon: <SiTypescript color="#2F74C0" size={45}/>, name: "Typescript"},
        {techIcon: <SiGooglechrome color="#186EE1" size={45}/>, name: "Web"},
        {techIcon: <SiReact color="#48CEF7" size={45}/>, name: "React"},
        {techIcon: <SiPython color="#F7DC65" size={45}/>, name: "Python"},
        {techIcon: <BiNetworkChart color="#181818" size={45}/>, name: "Algorithm"},
        {techIcon: <SiGit color="#ED8978" size={45}/>, name: "Git"},
        {techIcon: <SiNodedotjs color="#6FA560" size={45}/>, name: "Node"},
        {techIcon: <TbBrandNextjs color="#333A54" size={45}/>, name: "Next.js"},
    ]
    return techIcons.map((icon, id) => {
        return (<Techcon key={id} {...icon} />)
    })
}

export default icons

