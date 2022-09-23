import React, {useState} from "react";
import Techcon from "@/components/Display/Icons/Techcon";
import ICON_DATA from "@/constants/Icons/iconData";

const icons = () => {
    const [iconsList, setIconsList] = useState(ICON_DATA)
    return iconsList.map((icon, id) => <Techcon key={id} {...icon} />)
}
export default icons

