import type {NextPage} from 'next'
import {Icon, Tooltip, Wrapper} from "./styles";
import {RiFacebookFill} from "react-icons/ri";


const Test: NextPage = () => {
    return (
        <Wrapper>
            <Icon>
                <Tooltip>Facebook</Tooltip>
                <span><RiFacebookFill/></span>
            </Icon>
            <Icon>
                <Tooltip>Facebook</Tooltip>
                <span><RiFacebookFill/></span>
            </Icon>
        </Wrapper>
    )
}

export default Test
