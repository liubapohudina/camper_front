import styled from "styled-components";


export const Item = styled.li`
display: flex;
flex-direction: column;
gap: 16px;
`;

export const IconName = styled.p`
color: var(--main-btn-bg-color);
font-size: 24px;
font-weight: var(--semi-bold);
background-color: var(--bg-categories);
padding: 15px 25px;
border-radius: 60px;
width: max-content;
`;

export const BlockName = styled.div`
display: flex;
gap: 16px;
`;

export const UserName = styled.p`
font-size: 18px;
font-weight: var(--semi-bold);
color: var(--main-text-color);
margin-bottom: 4px;
`;

