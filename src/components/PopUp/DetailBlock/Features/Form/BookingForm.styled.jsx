import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const StyledDatePicker = styled(DatePicker)`
  position: relative;
  background: var(--input-bg-color);
  font-family: var(--font-family);
  padding: 16px;
  font-size: 16px;
  font-weight: var(--regular);
  border: 1px solid var(--input-bg-color);
  border-radius: 10px;
  color: var(--main-text-color);
  width: 400px;
  &:focus {
    border: none;
    outline: none;
  }
`;

export const FormBox = styled.div`
  border-radius: 10px;
  padding: 24px;
  min-width: 448px;
  border: 1px solid #10182833;
`;

export const Hform = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: var(--main-text-color);
  padding-bottom: 8px;
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
  background: var(--input-bg-color);
  font-family: var(--font-family);
  padding: 16px;
  font-size: 16px;
  font-weight: var(--regular);
  border: 1px solid var(--input-bg-color);
  border-radius: 10px;
  color: var(--main-text-color);
  width: 400px;
  &:focus {
    border: none;
    outline: none;
  }
`;

export const TextArea = styled.textarea`
  background: var(--input-bg-color);
  font-family: var(--font-family);
  padding: 16px 16px 76px 16px;
  font-size: 16px;
  font-weight: var(--regular);
  border: 1px solid var(--input-bg-color);
  border-radius: 10px;
  color: var(--main-text-color);
  width: 400px;
  &:focus {
    border: none;
    outline: none;
  }
`;

