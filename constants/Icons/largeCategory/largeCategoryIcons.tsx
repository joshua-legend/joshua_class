import React, {useEffect, useState} from "react";
import Techcon from "@/components/Display/Icons/Techcon";
import ICON_DATA from "@/constants/Icons/largeCategory/largeCategoryIconData";
import IContainer from "@/components/Layout/Container/interface";
import {AiOutlineHome} from "react-icons/ai";
import {IBread} from "@/components/Display/BreadCrumb";

const largeCategoryIcons = ():IContainer => {
    const [iconsList, setIconsList] = useState(ICON_DATA)
    const [breadIcon,setBreadIcon] = useState<IBread[]>([{icon: <AiOutlineHome/>, name: "home"},]);

    useEffect(()=>{
    },[breadIcon])

    return {
        gridRC:{rowNumber: 3, columnNumber: 3},
        contents:{
            header: "관심 있는 기술 스택을 선택하세요",
            bread: [...breadIcon],
            value:()=>iconsList.map((icon, id) => <Techcon key={id} values={icon} clickDispatch={setBreadIcon}   bread={breadIcon}/>)
        }
    }
}
export default largeCategoryIcons

