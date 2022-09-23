import {IBread} from "@/components/Display/BreadCrumb";

export default interface IContainer {
    contents:{
        header?: string,
        bread?: IBread[],
        value:()=>JSX.Element[] | JSX.Element,
    },
    gridRC:{
        rowNumber: number,
        columnNumber: number,
    }
}