import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { mobileScrennForElements, container, tabletScreenForElements } from "../../medaiQuery";

export const NavMenu = styled(NavLink)`
  ${mobileScrennForElements`
    font-size: 22px;
  `};
  position: relative;
  font-size: 36px;
  color: var(--main-text-color);
  font-weight: 600;
  text-decoration: none;

  &.active {
    color: var(--main-btn-bg-color);
  }
`;


export const HeaderW = styled.header`
  padding-top: 30px;
  padding-bottom: 30px;
  ${container}
  ${mobileScrennForElements`
    padding-top: 15px;
    padding-bottom: 15px;
  `};
`;

export const NavList = styled.nav`
  display: flex;
  gap: 40px;
  position: relative;
`;

export const Amount = styled.p`
  color: var(--main-btn-bg-color);
  font-size: 24px;
  font-weight: 600;
  position: absolute;
  top: 30px;
  left: 520px;
  ${mobileScrennForElements`
  font-size: 18px;
  top: 1px;
  left: 330px;
  `};
  ${tabletScreenForElements`
  left: 500px;
  `};
`;

