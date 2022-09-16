import React, {PropsWithChildren} from "react";
import {Header, Main} from "@/layouts/mainspace/styles";
import SearchBar from "@/components/SearchBar";


const MainSpace: React.FC<PropsWithChildren> = ({children}) => {
    return (
        <Main>
            <Header>조슈아 클래스</Header>
            <SearchBar />
            {children}

        </Main>
    );
}

export default MainSpace