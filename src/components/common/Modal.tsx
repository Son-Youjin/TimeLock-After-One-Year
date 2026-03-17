import styled from "@emotion/styled";
import { useEffect, type ReactNode } from "react";
import Button from "./Button";
import { IoMdClose } from "react-icons/io";

interface ModalProps {
  onClose?: () => void;
  title?: string;
  children: ReactNode;
}

export default function Modal({ onClose, title, children }: ModalProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    function handlesEsc(e: KeyboardEvent) {
      if (e.key === "Escape") onClose?.();
    }

    window.addEventListener("keydown", handlesEsc);
    return () => window.removeEventListener("keydown", handlesEsc);
  }, [onClose]);

  return (
    <BackDrop onClick={onClose}>
      <Container onClick={(e) => e.stopPropagation()}>
        <Header>
          <Title>{title}</Title>
          <Button onClick={onClose}>
            <IoMdClose size={20} />
          </Button>
        </Header>

        <Content>{children}</Content>
      </Container>
    </BackDrop>
  );
}

const BackDrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const Container = styled.section`
  width: 320px;
  min-height: 200px;
  max-height: 420px;
  overflow-y: auto;
  padding: 24px 20px;
  transform: translateY(-20%);

  background: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);

  animation: modalIn 0.25s ease;

  @keyframes modalIn {
    from {
      opacity: 0;
      transform: translateY(-30%);
    }
    to {
      opacity: 1;
      transform: translateY(-20%);
    }
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const Title = styled.h2`
  font-size: 16px;
  font-weight: 600;
`;

const Content = styled.div`
  flex: 1;
`;
