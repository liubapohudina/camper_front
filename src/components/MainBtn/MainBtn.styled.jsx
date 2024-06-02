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
    transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease; 

    &:hover,
    &:focus {
        background-color: var(--main-btn-bg-color-hover);
        transform: scale(1.1); 
    }

    &.a {
        display: inline-block;
        border: none;
        cursor: pointer;
    }
`;

