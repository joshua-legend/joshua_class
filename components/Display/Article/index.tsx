import React from "react";
import {ArticleLayout} from "@/components/Display/Article/styles";

export interface IArticle {
    imageUrl:string,
    hashTags:string[],
}

const Article = ({imageUrl,hashTags}:IArticle) => {
    return (
        <ArticleLayout>

        </ArticleLayout>
    );
}

export default Article