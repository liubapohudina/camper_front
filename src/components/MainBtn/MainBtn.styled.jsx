import styled from "styled-components";

export const Btn = styled.button`
    background-color: ${props => props.$bgcolor || 'var(--main-btn-bg-color)'};
    color: ${props => props.$textcolor || 'white'};
    padding: ${props => props.$padding || '16px 60px'};
    font-size: ${props => props.$fontsize || '16px'};
    font-weight: 500;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    border:  ${props => props.$border || 'none'};
    cursor: pointer;
    border-radius: 200px;
    width: max-content;
    transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease, border 0.3s ease, color 0.3s ease, transform 0.3s ease; 

    &:hover,
    &:focus {
        background-color: ${props => props.$bgcolorhover || 'var(--main-btn-bg-color-hover)'};
        border:  ${props => props.$borderhover || 'none'};
    }

    &.a {
        display: inline-block;
        border: none;
        cursor: pointer;
    }
`;
