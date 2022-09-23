import React, {useState} from "react";
import Techcon from "@/components/Display/Icons/Techcon";
import ICON_DATA from "@/constants/Icons/largeCategory/largeCategoryIconData";
import IContainer from "@/components/Layout/Container/interface";
import {AiOutlineHome} from "react-icons/ai";

const largeCategoryIcons = ():IContainer => {
    const [iconsList, setIconsList] = useState(ICON_DATA)
    console.log(ICON_DATA.find(value => value.techIcon));
    return {
        gridRC:{rowNumber: 3, columnNumber: 3},
        contents:{
            header: "관심 있는 기술 스택을 선택하세요",
            bread: [{icon: <AiOutlineHome/>, name: "home"},{icon: <AiOutlineHome/>, name: "home"},{icon: <AiOutlineHome/>, name: "home"}],
            value:iconsList.map((icon, id) => <Techcon key={id} {...icon} />)
        }
    }
}
export default largeCategoryIcons

