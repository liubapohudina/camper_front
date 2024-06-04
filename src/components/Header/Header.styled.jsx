import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { mobileScrennForElements, container } from "../../medaiQuery";

export const NavMenu = styled(NavLink)`
${mobileScrennForElements`
font-size: 22px;
`};
font-size: 36px;
color: var(--main-text-color);
font-weight: 600;
text-decoration: none;
&.active {
    color: var( --main-btn-bg-color);
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
`;