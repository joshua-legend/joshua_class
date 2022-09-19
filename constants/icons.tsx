import {AiOutlineLaptop} from "react-icons/ai";
import {
    SiCss3,
    SiGit,
    SiGooglechrome,
    SiHtml5,
    SiJavascript,
    SiNodedotjs,
    SiPython,
    SiReact,
    SiTypescript
} from "react-icons/si";
import {TbBrandNextjs} from "react-icons/tb";
import React from "react";
import {JSX} from "@babel/types";
import {BiNetworkChart} from "react-icons/bi";

interface Iicons {
    jsx: JSX.Element,
    name: String,
}

export const icons: Iicons[] = [
    {jsx: <AiOutlineLaptop color="#E1E0E6" size={45}/>, name: "CS"},
    {jsx: <SiHtml5 color="#DD4D25" size={45}/>, name: "HTML"},
    {jsx: <SiCss3 color="#31A4D5" size={45}/>, name: "CSS"},
    {jsx: <SiJavascript color="#F7DF38" size={45}/>, name: "Javascript"},
    {jsx: <SiTypescript color="#2F74C0" size={45}/>, name: "Typescript"},
    {jsx: <SiGooglechrome color="#186EE1" size={45}/>, name: "Web"},
    {jsx: <SiReact color="#48CEF7" size={45}/>, name: "React"},
    {jsx: <SiPython color="#F7DC65" size={45}/>, name: "Python"},
    {jsx: <BiNetworkChart color="#181818" size={45}/>, name: "Algorithm"},
    {jsx: <SiGit color="#ED8978" size={45}/>, name: "Git"},
    {jsx: <SiNodedotjs color="#6FA560" size={45}/>, name: "Node"},
    {jsx: <TbBrandNextjs color="#333A54" size={45}/>, name: "Next.js"},
]