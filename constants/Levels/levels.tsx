import React, {useState} from "react";
import Levelcon, {ILevelcon} from "@/components/Display/Icons/Levelcon";
import LEVEL_DATA from "@/constants/Levels/levelData";

const levels = () => {
    const [levelIcons, setLevelIcons] = useState<ILevelcon[]>(LEVEL_DATA)
    return levelIcons.map((icons, id) => <Levelcon key={id} {...icons} />)
}
export default levels;
