import React from "react";
import Card, {ICard} from "@/components/Display/Card";


const cards = () => {
    const cardValues:ICard[] =[
        {imageUrl:"images/frontend.png",hashTags:["프론트엔드"]},
        {imageUrl:"images/backend.png",hashTags:["백엔드"]},
        {imageUrl:"images/fullstack.png",hashTags:["풀스택"]},
        {imageUrl:"images/mobile.png",hashTags:["모바일"]},
    ]
    return(
      <>
          {cardValues.map((card, id)=>{
              return <Card key={id} {...card} />
          })}
      </>
    );
}
export default cards;