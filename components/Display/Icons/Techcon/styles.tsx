import styled from '@emotion/styled';


interface ILi {
    clicked:boolean
}

export const TechconLayout = styled.li<ILi>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 94px;
  font-family: 'rokaf';
  transition: box-shadow .3s;
  box-shadow: ${props => props.clicked ? "0 0 0" :"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"}
`

export const TechconIcon = styled.div`
`

export const TechconName = styled.span`

`