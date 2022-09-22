import styled from '@emotion/styled';


export const ContainerSection = styled.section`
  display: flex;
  flex-direction: column;
`
export const Header = styled.nav`
  display: flex;
  margin: 1rem;
  font-family: "rokaf";
  font-size: 16px;
`

interface IGrid {
    rowNumber:number,
    columnNumber:number,
}
export const GridSection = styled.ul<IGrid>`
  display: grid;
  padding: 0 1.5rem;
  grid-template-rows: repeat(${props => props.rowNumber}, 1fr);
  grid-template-columns: repeat(${props => props.columnNumber}, 1fr);
`
