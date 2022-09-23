import React, {useState} from "react";
import {JSX} from "@babel/types";
import Techcon from "@/components/Display/Icons/Techcon";
import ICON_DATA from "@/constants/Icons/iconData";

const icons: () => JSX.Element[] = () => {
    const [iconsList, setIconsList] = useState(ICON_DATA)
    return iconsList.map((icon, id) => {
        return (<Techcon key={id} {...icon} />)
    })
}
export default icons

