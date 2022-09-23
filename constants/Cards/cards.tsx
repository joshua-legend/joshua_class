import React, {useState} from "react";
import Card from "@/components/Display/Card";
import CARD_DATA from "@/constants/Cards/cardData";
const cards = () => {
    const [cardsList, setCardList] = useState(CARD_DATA)
    return cardsList.map((card, id)=><Card key={id} {...card} />);
}
export default cards;