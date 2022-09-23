import React from "react";
import {ContainerSection,GridSection, Header} from "@/components/Layout/Container/styles";
import IContainer from "@/components/Layout/Container/interface";
import BreadCrumb from "@/components/Display/BreadCrumb";

const Container: React.FC<IContainer> = ({contents,gridRC}) => {
    return (
        <ContainerSection>
            {contents.header ?  <Header>{contents.header}</Header> : undefined}
            <BreadCrumb Breads={contents.bread} />
            <GridSection rowNumber={gridRC.rowNumber} columnNumber={gridRC.columnNumber} >
                {contents.value}
            </GridSection>
        </ContainerSection>
    );
}
export default Container