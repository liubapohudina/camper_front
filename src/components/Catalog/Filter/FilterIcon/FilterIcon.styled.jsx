import styled from "styled-components";

// Стилі для обгортки пошуку
export const BoxSearchVehincle = styled.div`
  margin-top: 24px;
  flex-wrap: wrap;
  display: flex;
`;

// Стилі для кнопки
export const FilterBtn = styled.svg`
  cursor: pointer;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  fill: ${(props) => props.fill};
  stroke: ${(props) => props.stroke};
`;

// Стилі для чекбокса
export const FilterInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

// Додаткові стилі для кастомного чекбокса
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