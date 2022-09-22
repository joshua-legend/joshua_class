import React, {PropsWithChildren} from "react";
import {Main} from "@/layouts/mainspace/styles";
import SearchBar from "@/components/Input/SearchBar";
import Header from "@/layouts/mainspace/components/Header";
import Footer from "@/layouts/mainspace/components/Footer";
import Navbar from "@/layouts/mainspace/components/Navbar";


const MainSpace: React.FC<PropsWithChildren> = ({children}) => {
    return (
        <>
            <Main>
                <Header/>
                <SearchBar/>
                {children}
                <Footer/>
                <Navbar/>
            </Main>
        </>
    );
}

export default MainSpace
