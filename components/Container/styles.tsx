import styled from '@emotion/styled';


export const ContainerSection = styled.section`
  display: flex;
  flex-direction: column;
`
export const Header = styled.nav`
  display: flex;
`

export const GridSection = styled.ul`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(4, 1fr);
  padding: 0;
`

export const Item = styled.li`
    width:20%;
    height:94px;
`