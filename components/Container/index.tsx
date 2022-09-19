import React from "react";
import {ContainerSection, GridSection, Header, Item} from "@/components/Container/styles";
import {icons} from "@/constants/icons";



const Container = () => {
    return (
        <ContainerSection>
            <Header>관심있는 기술스택을 선택해보세요.</Header>
            <GridSection>
                {icons.map((icon) => {
                    return (
                        <Item>
                            <div>
                                {icon.jsx}
                                {icon.name}
                            </div>
                        </Item>
                    )})}
            </GridSection>
        </ContainerSection>
    );
}

export default Container