import styled from "styled-components";
import { mobileScrennForElements, tabletScreenForElements } from "../../medaiQuery";

export const CatalogBox = styled.div`
padding-bottom: 100px;
display: flex;
gap: 64px;
justify-content: space-between;
${mobileScrennForElements`
flex-direction: column;
gap: 24px;
`};
${tabletScreenForElements`
flex-direction: column;
gap: 44px;
`}
`;