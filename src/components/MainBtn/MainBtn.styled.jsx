import styled from "styled-components";

export const Btn = styled.button`
    background-color: var(--main-btn-bg-color);
    color: white;
    padding: 16px 60px;
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    border: none;
    cursor: pointer;
    border-radius: 200px;

    &:hover,
    &:focus {
        background-color: var(--main-btn-bg-color-hover);
    }

    &.a {
        display: inline-block;
        border: none;
        cursor: pointer;
    }
`;
