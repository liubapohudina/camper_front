import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { mobileScrenn400pxForElements, fromTabletScreenForElements } from "../../../../../mediaQuery.js";

export const StyledDatePicker = styled(DatePicker)`
  width: 95%;
  position: relative;
  background: var(--input-bg-color);
  font-family: var(--font-family);
  padding: 16px;
  font-size: 16px;
  font-weight: var(--regular);
  border: 1px solid var(--input-bg-color);
  border-radius: 10px;
  color: var(--main-text-color);
  &:focus {
    border: none;
    outline: none;
  }
`;

export const FormBox = styled.div`
  border-radius: 10px;
  padding: 24px;
  border: 1px solid #10182833;
  ${fromTabletScreenForElements`
    min-width: 448px;
    `};
  ${mobileScrenn400pxForElements`
    min-width: 300px;
    `};
`;

export const Hform = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: var(--main-text-color);
  padding-bottom: 8px;
`;

export const SpanError = styled.span`
color: var(--main-btn-bg-color);
`;

export const TextForm = styled.p`
  font-size: 16px;
  font-weight: var(--regular);
  color: var(--second-text-color);
  margin-bottom: 24px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const Label = styled.label`
  font-size: 16px;
  position: relative;
`;

export const Input = styled.input`
  width: ${(props) => props.width || '95%'};
  background: var(--input-bg-color);
  font-family: var(--font-family);
  padding: ${(props) => props.$paddingleft ? '16px 16px 16px 44px' : '16px'};
  font-size: 16px;
  font-weight: var(--regular);
  border: 1px solid var(--input-bg-color);
  border-radius: 10px;
  color: var(--main-text-color);
  margin-top: ${(props) => props.$margintop || '0'};
  &:focus {
    border: none;
    outline: none;
  }
`;

export const TextArea = styled.textarea`
  width: 95%;
  background: var(--input-bg-color);
  font-family: var(--font-family);
  padding: 16px 16px 76px 16px;
  font-size: 16px;
  font-weight: var(--regular);
  border: 1px solid var(--input-bg-color);
  border-radius: 10px;
  color: var(--main-text-color);
  &:focus {
    border: none;
    outline: none;
  }
`;

