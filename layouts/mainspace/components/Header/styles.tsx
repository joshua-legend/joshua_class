import styled from "@emotion/styled";

interface IHeader {
    bgState: boolean,
}

export const _Header = styled.header<IHeader>`
  position: sticky;
  top: 0px;
  padding: 8px 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 100%;
  font-size: 24px;
  font-family: "rokaf";
  z-index: 9999;
  background-color: ${props => props.bgState ? "white" : "transparent"};
  box-shadow: ${props => props.bgState ? "0 4px 16px rgb(22 22 49 / 24%);" : undefined}; 
  transition: all 0.7s ease-in-out;
`