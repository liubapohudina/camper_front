import styled from "styled-components";
import { container, mobileScrennForElements } from "../../mediaQuery";

export const HeroBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const InfoBox = styled.div`
${container}
text-align: end;
padding-top: 50px;
font-weight: 600;
${mobileScrennForElements`
padding-top: 20px;
`};
`;
export const TextBox = styled.h1`
font-size: 32px;
font-weight: 600;
margin-bottom: 24px;
`;