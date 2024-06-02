import styled from "styled-components";
import switchImage from '../../assets/img/noleggio-camper.jpg'; 
import { container, mobileScrennForElements } from "../../medaiQuery";

export const HeroBox = styled.div`
  background-image: url(${switchImage});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
`;

export const InfoBox = styled.div`
${container}
text-align: end;
padding-top: 130px;
font-weight: 600;
${mobileScrennForElements`
padding-top: 20px;
`};
`;
export const TextBox = styled.h1`
font-size: 32px;
font-weight: 600;
`;