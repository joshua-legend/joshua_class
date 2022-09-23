export interface ISwiperProps {
    height:number,
    slidesPerView:number,
    spaceBetween:number,
    loop?:boolean,
}

export interface IContents{
    header?: string,
    value:()=>JSX.Element[] | JSX.Element,
}

export default interface IScrollView {
    swiperProps:ISwiperProps,
    contents:IContents,
}