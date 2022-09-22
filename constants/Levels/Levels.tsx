import {JSX} from "@babel/types";
import React, {useState} from "react";
import Levelcon, {ILevelcon} from "@/components/Display/Icons/Levelcon";
import {HiOutlineVariable} from "react-icons/hi";
import {FaObjectGroup} from "react-icons/fa";
import {IoLogoWebComponent} from "react-icons/io5";
import {MdViewModule} from "react-icons/md";
import {AiFillCodeSandboxCircle} from "react-icons/ai";

const Levels: () => JSX.Element[] = () => {

    const [levelIcons, setLevelIcons] = useState<ILevelcon[]>([
        {toolTip: "Primitive", icon: <HiOutlineVariable/>, color: "0288d1", isPressed: false},
        {toolTip: "Object", icon: <FaObjectGroup/>, color: "00600f", isPressed: false},
        {toolTip: "Component", icon: <IoLogoWebComponent/>, color: "00600f", isPressed: false},
        {toolTip: "Module", icon: <MdViewModule/>, color: "00600f", isPressed: false},
        {toolTip: "Product", icon: <AiFillCodeSandboxCircle/>, color: "00600f", isPressed: false},
    ])

    return levelIcons.map((icons, id) => {
        return (<Levelcon key={id} {...icons} />)
    })
}

export default Levels;
