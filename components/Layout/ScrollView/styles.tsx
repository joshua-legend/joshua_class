import styled from '@emotion/styled';
interface ISwiperWrapper {
    height:number,
    isClick:boolean,
}

export const SwiperWrapper = styled.section<ISwiperWrapper>`
  height:${props => props.height}px;
  .swiper {
    width: 100%;
    height: 100%;
    padding: 0px 1rem;
    cursor: ${props => props.isClick ? "grabbing" : "grab"};
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`