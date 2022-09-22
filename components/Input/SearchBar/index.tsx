import React from "react";
import {Searchbar} from "@/components/Input/SearchBar/styles";
import {FiSearch} from "react-icons/fi";


const SearchBar = () => {
    return (
        <Searchbar>
            <form action="/">
                <input type="search" placeholder="조슈아 클래스에 궁금하거 쳐보셈"/>
            </form>
            <FiSearch />
        </Searchbar>
    );
}

export default SearchBar