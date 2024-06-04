import { css } from "styled-components";
const mobile = css`	 
 padding-left: 20px;
 padding-right: 20px;
	`;
const tablet = css`
  padding-right: 44px;
  padding-left: 44px;
`;
const desktop = css`
  padding-right: 64px;
  padding-left: 64px;
`;

export const mobileScrenn = css`
  @media (min-width: 320px) and (max-width: 767.98px) {
    ${mobile}
  }
`;
export const mobileScrennForElements = styles => css`
  @media (min-width: 320px) and (max-width: 767.98px) {
    ${styles}
  }
`;
export const fromMobileScrennForElements = styles => css`
  @media (min-width: 320px) {
    ${styles}
  }
`;
export const tabletScreen = css`
  @media (min-width: 768px) and (max-width: 1439.98px) {
    ${tablet}
  }
`;
export const tabletScreenForElements = styles => css`
  @media (min-width: 768px) and (max-width: 1439.98px) {
    ${styles}
  }
`;
export const fromTabletScreenForElements = styles => css`
  @media (min-width: 768px) {
    ${styles}
  }
`;
export const desktopScreen = css`
  @media (min-width: 1440px) {
    ${desktop}
  }
`;
export const desktopScreenForElements = styles => css`
  @media (min-width: 1440px){
    ${styles}
  }
`;
export const container = css`
 ${mobileScrenn}
 ${tabletScreen}
 ${desktopScreen}
`;