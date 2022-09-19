import styled from '@emotion/styled';


export const ContainerSection = styled.section`
  display: flex;
  flex-direction: column;
`
export const Header = styled.nav`
  display: flex;
  margin: 1rem;
  font-family: "rokaf";
`

export const GridSection = styled.ul`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(4, 1fr);
  padding: 0;
`
export const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 94px;
  font-family: 'HBIOS-SYS';
  & div{
    transition: box-shadow .3s;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 80%;
    &:hover {
      box-shadow: 0 0 11px rgba(33,33,33,.2);
    }
  }
`