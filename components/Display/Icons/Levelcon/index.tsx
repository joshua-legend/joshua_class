import React, {useState} from "react";
import {LevelIcon, LevelTooltip} from "@/components/Display/Icons/Levelcon/styles";

export interface ILevelcon {
    toolTip: string,
    icon: JSX.Element,
    color: string,
    isPressed: boolean,
}

const Levelcon = ({toolTip, icon, color, isPressed}: ILevelcon) => {

    const [isPress, setIsPress] = useState(isPressed)
    const onClickButton = () =>{
        setIsPress(!isPress)
    }

    return (
        <LevelIcon onClick={onClickButton} color={isPress ? color : "white"}>
            <LevelTooltip color={isPress ? color : "white"}>{toolTip}</LevelTooltip>
            <span>{icon}</span>
        </LevelIcon>
    );
}

export default Levelcon;