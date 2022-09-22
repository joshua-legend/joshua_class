export default interface IContainer {
    contents:{
        header?: string,
        value:()=>JSX.Element[] | JSX.Element,
    },
    gridRC:{
        rowNumber: number,
        columnNumber: number,
    }
}