export default interface IScrollView {
    swiperProps:{
        height:number,
        slidesPerView:number,
        spaceBetween:number,
        loop?:boolean,
    },
    contents:{
        header?: string,
        value:()=>JSX.Element[] | JSX.Element,
    },
}