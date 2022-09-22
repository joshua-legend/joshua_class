import styled from "@emotion/styled";

export const _Footer = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1.5rem 1.75rem;
  background-color: rgb(245, 245, 245);
  border-top: 1px solid rgb(214, 214, 214);
  
  & section{
    display: flex;
    align-items: center;
    margin: 0.5rem 0;
    font-family: 'rokaf';
    & span{
      margin-left: 6px;
    }
  }
`