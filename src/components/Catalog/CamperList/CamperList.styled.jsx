import styled from "styled-components";
import { mobileScrennForElements } from "../../../medaiQuery";

export const BoxList = styled.div`
display: flex;
flex-direction: column;
gap: 50px;
align-items: center;
justify-content: center;
margin: 0 auto;
${mobileScrennForElements`
gap: 20px;
`}
`;