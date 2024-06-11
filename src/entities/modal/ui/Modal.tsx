import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";
import styled, { keyframes } from "styled-components";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return createPortal(
    <ModalContainer>
      <ModalContent>
        <ModalText>
          The text field must not be empty! Type something please
        </ModalText>
        <ModalButton onClick={onClose}>
          <IoClose size={35} />
        </ModalButton>
      </ModalContent>
    </ModalContainer>,
    document.getElementById("modal")!
  );
};

const fadeAnimation = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`;
const ModalContainer = styled.div`
  animation: ${fadeAnimation} 200ms linear;
  border-radius: 20px;
  position: absolute;
  top: 12%;
  left: 17%;
  width: 65vw;
  min-height: 75vh;
  z-index: 2;
  background: rgba(34, 34, 34, 0.8);
  display: flex;
  justify-content: center;
`;
const ModalContent = styled.div`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ModalText = styled.p`
  font-size: 1.5rem;
`;
const ModalButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  transition: 0.3s;
  cursor: pointer;
  position: absolute;
  background-color: transparent;
  padding: 0;
  font: inherit;
  color: #fff;
  top: 10px;
  right: 10px;
  &:hover {
    color: #4b4b4b;
  }
`;
