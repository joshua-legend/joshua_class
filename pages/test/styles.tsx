import styled from '@emotion/styled';

export const Wrapper = styled.ul`
  display: inline-flex;
  list-style: none;
`
export const Tooltip = styled.span`
  position: absolute;
  top: 10px;
  font-size: 14px;
  background: #1877F2;
  color: #ffffff;
  padding: 5px 8px;
  border-radius: 5px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  ::before {
    position: absolute;
    content: "";
    height: 8px;
    width: 8px;
    background: #1877F2;
    bottom: -3px;
    left: 50%;
    transform: translate(-50%) rotate(45deg);
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
`

export const Icon = styled.li`
  position: relative;
  background: #ffffff;
  border-radius: 50%;
  padding: 15px;
  margin: 10px;
  width: 50px;
  height: 50px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  &:hover span{
    top: -45px;
    opacity: 1;
    pointer-events: auto;
  }
`