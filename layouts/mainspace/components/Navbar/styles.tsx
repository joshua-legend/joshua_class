import styled from "@emotion/styled";

export const _Navbar = styled.nav`
  position: sticky;
  bottom: 0px;
  display: flex;
  height: 80px;
  width: 100%;
  max-width: 440px;
  border-top: 1px solid rgb(231, 231, 231);
`

export const NavbarContainer = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: white;
  transition: all 0.7s ease-in-out;

  & div {
    width: 25%;
  }

  & > :hover {
    box-shadow: 2px 2px #ffffff;
  }
`

export const NavbarItem = styled.ul`
  width: 25%;
  padding: 0;
  cursor: pointer;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0px;
  font-family: 'rokaf';
  color: #b0bec5;
  & a{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`