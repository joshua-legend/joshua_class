import {JSX} from "@babel/types";
import React from "react";
import {RiFacebookFill} from "react-icons/ri";
import {Icon, Tooltip} from "@/constants/Levels/styles";

const Levels: () => JSX.Element[] = () => {
    const levelIcons = [
        <Icon>
            <Tooltip>Facebook</Tooltip>
            <span><RiFacebookFill/></span>
        </Icon>,
        <Icon>
            <Tooltip>Facebook</Tooltip>
            <span><RiFacebookFill/></span>
        </Icon>,
    ]
    return levelIcons.map((icons, id) => {
        return (
            <>
                {icons}
            </>
        )
    })
}

export default Levels;
