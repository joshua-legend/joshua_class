import {IBread} from "@/components/Display/BreadCrumb";

export default interface IContainer {
    contents:{
        contents?: IBread;
        header?: string,
        bread?: IBread[],
        value:()=>(JSX.Element[]),
    },
    gridRC:{
        rowNumber: number,
        columnNumber: number,
    }
}