import React, {useState} from "react";
import Card from "@/components/Display/Card";
import CARD_DATA from "@/constants/Cards/lorem/cardData";
import IContainer from "@/components/Layout/Container/interface";
import {AiOutlineHome} from "react-icons/ai";
const cards = ():IContainer => {
    const [cardsList, setCardList] = useState(CARD_DATA)
    return {
        gridRC:{rowNumber: 2, columnNumber: 2},
        contents:{
            header: "관심 있는 직군을 선택하세요",
            bread: [{icon: <AiOutlineHome/>, name: "home"},{icon: <AiOutlineHome/>, name: "home"},{icon: <AiOutlineHome/>, name: "home"}],
            value:()=>cardsList.map((card, id)=><Card key={id} {...card} />),
        }
    };
}
export default cards;