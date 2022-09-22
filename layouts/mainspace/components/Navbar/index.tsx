import React from "react";
import {_Navbar, NavbarContainer, NavbarItem} from "@/layouts/mainspace/components/Navbar/styles";
import Link from "next/link";
import {AiOutlineHome} from "react-icons/ai";
import {MdOutlineArticle} from "react-icons/md";
import {BiRocket} from "react-icons/bi";
import {RiQuestionAnswerLine} from "react-icons/ri";
import {JSX} from "@babel/types";

interface INavbarIcons {
    link: string,
    jsx: JSX.Element,
    name: string,
}

const Navbar = () => {

    const navIcons: INavbarIcons[] = [
        {link: "/", jsx: <AiOutlineHome color="#b0bec5" size={30}/>, name: "Home"},
        {link: "/articles", jsx: <MdOutlineArticle color="#b0bec5" size={30}/>, name: "Articles"},
        {link: "/", jsx: <BiRocket color="#b0bec5" size={30}/>, name: "Projects"},
        {link: "/", jsx: <RiQuestionAnswerLine color="#b0bec5" size={30}/>, name: "Q&A"},
    ]

    return (
        <_Navbar>
            <NavbarContainer>
                {navIcons.map((icons, id) => {
                    return (
                        <NavbarItem key={id}>
                            <Link href={icons.link}>
                                <a>
                                    {icons.jsx}
                                    <span>{icons.name}</span>
                                </a>
                            </Link>
                        </NavbarItem>
                    )
                })}
            </NavbarContainer>
        </_Navbar>
    );
}

export default Navbar;