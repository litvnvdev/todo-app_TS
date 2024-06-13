import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";
import styled, { keyframes } from "styled-components";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const handleModal = (e: any) => {
    const isModal = e.target.closest("[data-id=modal]");
    if (isModal) return;
    onClose();
  };

  return createPortal(
    <ModalContainer onClick={handleModal}>
      <ModalContent data-id="modal">
        <ModalText>
          The text field must not be empty! <br /> Type something please
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
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 2;
  backdrop-filter: blur(10px);
  background: rgba(34, 34, 34, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ModalContent = styled.div`
  position: relative;
  padding: 0 50px;
  border-radius: 20px;
  max-width: 700px;
  width: 100%;
  min-height: 600px;
  background: #fff;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 25px;
`;
const ModalText = styled.p`
  font-weight: 500;
  text-align: center;
  color: #000;
  font-size: 1.5rem;
`;
const ModalButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  transition: 0.4s;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 200px;
  background-color: transparent;
  padding: 0;
  font: inherit;
  color: #797979;
  top: 10px;
  right: 10px;
  &:hover {
    color: #444444;
    transform: rotate(360deg);
  }
`;
