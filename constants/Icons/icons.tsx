import React, {useState} from "react";
import Techcon from "@/components/Display/Icons/Techcon";
import ICON_DATA from "@/constants/Icons/iconData";
import IContainer from "@/components/Layout/Container/interface";
import {AiOutlineHome} from "react-icons/ai";

const icons = ():IContainer => {
    const [iconsList, setIconsList] = useState(ICON_DATA)
    return {
        gridRC:{rowNumber: 3, columnNumber: 3},
        contents:{
            header: "관심 있는 기술 스택을 선택하세요",
            bread: [{icon: <AiOutlineHome/>, name: "home"}],
            value:iconsList.map((icon, id) => <Techcon key={id} {...icon} />)
        }
    }
}
export default icons

