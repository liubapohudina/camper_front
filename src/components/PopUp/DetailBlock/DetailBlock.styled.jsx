import styled, {css} from "styled-components";

export const DetailBox = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 40px;
  margin-top: 44px;
  margin-bottom: 44px;
  border-bottom: 1px solid #10182833;
  padding-bottom: 20px;
`;

export const HeadernpopUp = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: var(--main-text-color);
  `;
export const NavBtnpopUp = styled.button`
  font-size: 20px;
  font-weight: 600;
  color: var(--main-text-color);
  cursor: pointer;
  position: relative;

  ${(props) =>
    props.$active &&
    css`
      border-bottom: none;

      &::after {
        content: '';
        position: absolute;
        bottom: -24px; /* Відстань знизу */
        left: 0;
        width: 100%;
        height: 5px; /* Висота псевдоелемента */
        background-color: #e44848; /* Колір псевдоелемента */
      }
    `}
`;
