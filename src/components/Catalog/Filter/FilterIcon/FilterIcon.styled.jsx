import styled from "styled-components";

export const BoxSearchVehincle = styled.div`
  margin-top: 24px;
  margin-bottom: 32px;
  flex-wrap: ${(props) => props.$nowrap};
  display: flex;
  gap: 9px;
`;

export const FilterBtn = styled.svg`
  cursor: pointer;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  fill: ${(props) => props.fill};
  stroke: ${(props) => props.stroke};
`;


export const FilterInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

export const CustomCheckbox = styled.label`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 112px;
  height: 95px;
  border: ${(props) => props.$isactive === 'true' ? '1px solid #E44848' : '1px solid #10182833'};
  border-radius: 10px;
`;