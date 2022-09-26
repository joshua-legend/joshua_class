interface ISwiperProps {
    height: number,
    slidesPerView: number,
    spaceBetween: number,
    loop?: boolean,
}
interface IContents {
    header?: string,
    value:()=>JSX.Element[],
}
export default interface IScrollView {
    swiperProps: ISwiperProps,
    contents: IContents,
}