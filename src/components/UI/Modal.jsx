import React from "react";
import styled from "styled-components";
import { createPortal } from "react-dom";
export const Modal = ({ children, onClose }) => {
  return createPortal(
    <Overlay onClick={onClose}>
      <ModalContent>{children}</ModalContent>
    </Overlay>,
    document.getElementById("modal")
  );
};
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(2px);
`;
const ModalContent = styled.div`
  width: 600px;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 16px;
`;
