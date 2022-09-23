import React from "react";
import {BreadCrumbBox, BreadCrumbContainer, BreadCrumbLayout} from "@/components/Display/BreadCrumb/styles";

export interface IBread {
    icon:JSX.Element,
    name:string,
}
interface IBreadCrumb {
    Breads?: IBread[];
}
const BreadCrumb = ({Breads}:IBreadCrumb) => {
    return (
        <BreadCrumbLayout>
            <BreadCrumbContainer>
                {Breads?.map((breadCrumb,id)=>{
                    return(<BreadCrumbBox key={id}>
                        {breadCrumb.icon}
                        <span>{breadCrumb.name}</span>
                    </BreadCrumbBox>)
                })}
            </BreadCrumbContainer>
        </BreadCrumbLayout>
    );
}

export default BreadCrumb