import React, {Dispatch, useState} from "react";
import {TechconIcon, TechconLayout, TechconName} from "@/components/Display/Icons/Techcon/styles";
import {JSX} from "@babel/types";
import {IBread} from "@/components/Display/BreadCrumb";

export interface ITechconElem {
    techIcon: JSX.Element,
    name: string,
}

interface ITechcon {
    values:ITechconElem,
    bread:IBread[],
    clickDispatch:Dispatch<IBread[]>
}


const Techcon = ({values, bread,clickDispatch}: ITechcon) => {

    const [clicked, setClicked] = useState(false);
    const click = () => {
        clickDispatch([...bread,{icon:values.techIcon,name:values.name}])
        setClicked(!clicked);
    }
    return (
        <TechconLayout onClick={click} clicked={clicked}>
            <TechconIcon>{values.techIcon}</TechconIcon>
            <TechconName>{values.name}</TechconName>
        </TechconLayout>
    );
}

export default Techcon;