import styled from "styled-components";
import { fromMobileScrennForElements, desktopScreenForElements } from "../../../../../mediaQuery.js";

export const FeatureContent = styled.div`
display: flex;
${fromMobileScrennForElements`
  flex-direction: column;
  `};
${desktopScreenForElements`
  flex-direction: row;
`}; 
gap: 24px;
justify-content: space-between;
`;

export const BoxContent = styled.div`
display: flex;
flex-direction: column;
gap: 44px;
max-width: 430px;
`;
