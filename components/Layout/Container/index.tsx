import React, {useState} from "react";
import {ContainerSection, GridSection, Header} from "@/components/Layout/Container/styles";
import IContainer from "@/components/Layout/Container/interface";
import BreadCrumb, {IBread} from "@/components/Display/BreadCrumb";

const Container: React.FC<IContainer> = ({contents, gridRC}) => {

    const [bread, setBread] = useState<IBread[]>([...contents.bread])

    return (
        <ContainerSection>
            {contents.header ? <Header>{contents.header}</Header> : undefined}
            <BreadCrumb Breads={contents.bread}/>
            <GridSection rowNumber={gridRC.rowNumber} columnNumber={gridRC.columnNumber}>
                {contents.value}
            </GridSection>
        </ContainerSection>
    );
}
export default Container


