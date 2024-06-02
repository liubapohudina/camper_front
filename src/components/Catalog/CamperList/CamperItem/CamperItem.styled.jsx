import styled from "styled-components";

export const CamperItemWrapper = styled.div`
  border: 1px solid #ccc;
  padding: 24px;
  margin: 8px 0;
  border-radius: 20px;
  background-color: #f9f9f9;
  color: black;
  display: flex;
  gap: 24px;
  max-width: 888px;
`;

export const Img = styled.img`
  width: 290px;
  height: 310px;
  object-fit: cover;
  border-radius: 10px;
`;

export const Description = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
  max-width: 525px;
  margin-top: 24px;
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
  width: ${props => props.size}px; 
  height: ${props => props.size}px;
  fill: ${props => props.fill};
  stroke: ${props => props.stroke};
  margin-right: 4px;
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
display: flex
`;

export const TextReview = styled.p`
color: ${props => props.color};
font-size: 16px;
font-weight: 400;
`;
export const LocationBox = styled.div`
display: flex;
align-items: center;
`;
