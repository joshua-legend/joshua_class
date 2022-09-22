import React from "react";
import {CardDescription, CardHashTags, CardImage, CardLayout} from "@/components/Display/Card/styles";

export interface ICard {
    imageUrl:string,
    hashTags:string[],
    description?:string
}

const Card = ({imageUrl,hashTags,description}:ICard) => {
    return (
        <CardLayout>
            <CardImage>
                <img src={imageUrl} alt=""/>
            </CardImage>
            <CardHashTags>
                {hashTags.map((elem,id)=>{
                    return(<span key={id}>{elem}</span>)
                })}
            </CardHashTags>
            <CardDescription>
                {description}
            </CardDescription>
        </CardLayout>
    );
}

export default Card