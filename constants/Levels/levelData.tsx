import {ILevelcon} from "@/components/Display/Icons/Levelcon";
import {HiOutlineVariable} from "react-icons/hi";
import {FaObjectGroup} from "react-icons/fa";
import {IoLogoWebComponent} from "react-icons/io5";
import {MdViewModule} from "react-icons/md";
import {AiFillCodeSandboxCircle} from "react-icons/ai";
import React from "react";

const LEVEL_DATA:ILevelcon[] = [
    {toolTip: "Primitive", icon: <HiOutlineVariable/>, color: "0288d1", isPressed: false},
    {toolTip: "Object", icon: <FaObjectGroup/>, color: "00600f", isPressed: false},
    {toolTip: "Component", icon: <IoLogoWebComponent/>, color: "00600f", isPressed: false},
    {toolTip: "Module", icon: <MdViewModule/>, color: "00600f", isPressed: false},
    {toolTip: "Product", icon: <AiFillCodeSandboxCircle/>, color: "00600f", isPressed: false},
];

export default LEVEL_DATA;
