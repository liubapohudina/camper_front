import styled from "styled-components";
import { mobileScrennForElements, tabletScreenForElements } from "../../../../medaiQuery";


export const CamperItemWrapper = styled.li`
  border: 1px solid #ccc;
  padding: 24px;
  margin: 8px 0;
  border-radius: 20px;
  background-color: #f9f9f9;
  color: black;
  display: flex;
  gap: 24px;
  max-width: ${(props) => props.$favoriteStyleLi || "888px"};
  ${mobileScrennForElements`
    max-width: 300px;
    flex-direction: column;
  `}
  @media screen and (min-width: 500px) and (max-width: 767.98px) {
    max-width: 400px;
  }
  ${tabletScreenForElements`
  flex-direction: column;
  `}
`;

export const Img = styled.img`
  width: ${(props) => props.$favoriteStyleImg || "290px"};
  height: 310px;
  object-fit: cover;
  border-radius: 10px;
  ${mobileScrennForElements`
  width: 100%;
  `}
  ${tabletScreenForElements`
  width: 100%;
  `};
`;

export const Description = styled.p`
  white-space: ${(props) => props.$wrap || "nowrap"};
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
  max-width: ${(props) => props.$maxwidth || "525px"};
  margin-top: 24px;
  margin-bottom: 24px;
  color: var(--second-text-color);
`;

export const Name = styled.h2`
  color: var(--main-text-color);
  font-size: 24px;
  font-weight: 600;
`;

export const Price = styled.p`
  color: var(--main-text-color);
  font-size: 24px;
  font-weight: 600;
`;

export const Icon = styled.svg`
  cursor: ${(props) => props.cursor || "none"};
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  fill: ${(props) => props.fill};
  stroke: ${(props) => props.stroke};
  margin-right: 4px;
  right: ${(props) => props.$right}px;
  left: ${(props) => props.$left}px;
  top: ${(props) => props.$top}px;
  position: ${(props) => props.$absolute || "none"};
  bottom: ${(props) => props.$bottom}px;
`;

export const Wrap1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const Wrap2 = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const RewieBox = styled.div`
  padding-top: 8px;
  gap: 16px;
  display: flex;
`;

export const TextReview = styled.p`
  color: ${(props) => props.color};
  font-size: 16px;
  font-weight: ${(props) => props.fontWeight};
  text-transform: capitalize;
  border-bottom: ${(props) => props.$borderbottom || 'none'};
`;
export const LocationBox = styled.div`
  display: flex;
  align-items: center;
`;
