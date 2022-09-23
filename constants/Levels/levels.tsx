import {JSX} from "@babel/types";
import React, {useState} from "react";
import Levelcon, {ILevelcon} from "@/components/Display/Icons/Levelcon";
import LEVEL_DATA from "@/constants/Levels/levelData";

const levels: () => JSX.Element[] = () => {
    const [levelIcons, setLevelIcons] = useState<ILevelcon[]>(LEVEL_DATA)
    return levelIcons.map((icons, id) => {
        return (<Levelcon key={id} {...icons} />)
    })
}
export default levels;
