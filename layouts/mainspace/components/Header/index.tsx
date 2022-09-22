import React, {useEffect, useState} from "react";
import {_Header} from "@/layouts/mainspace/components/Header/styles";
import useScrollPosition from "../../../../hooks/useScrollPosition";

const Header = () => {

    const scrollPosition = useScrollPosition();
    const [isActive,setIsActive] = useState(false);

    useEffect(()=>{
        scrollPosition > 1 ? setIsActive(true) : setIsActive(false);
    },[scrollPosition])

    return (
        <_Header bgState={isActive} >
            조슈아 클래스
        </_Header>
    );
}

export default Header;