import styled from "styled-components";
import { fromMobileScrennForElements, mobileScrennForElements,fromTabletScreenForElements, desktopScreenForElements } from "../../mediaQuery.js";

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 40px;
  padding-bottom: 40px;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  position: relative;
  background: white;
  ${fromTabletScreenForElements`
     padding: 40px;
    `};
  ${mobileScrennForElements`
  padding: 16px;
    `};
  border-radius: 20px;
  max-width: 982px;
  max-height: 600px;
  overflow-y: auto;

  /* Custom Scrollbar */
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 24px;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  color: black;
`;

export const ListImg = styled.ul`
  display: flex;
  ${fromMobileScrennForElements`
    flex-direction: column;
    `};
   ${desktopScreenForElements`
    flex-direction: row;
    `};
  justify-content: space-between;
`;

