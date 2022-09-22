import React from "react";
import {TechconIcon, TechconLayout, TechconName} from "@/components/Display/Icons/Techcon/styles";
import {JSX} from "@babel/types";

export interface ITechcon {
    techIcon: JSX.Element,
    name: string,
}

const Techcon = ({techIcon, name}: ITechcon) => {
    return (
        <TechconLayout>
            <TechconIcon>{techIcon}</TechconIcon>
            <TechconName>{name}</TechconName>
        </TechconLayout>
    );
}

export default Techcon;