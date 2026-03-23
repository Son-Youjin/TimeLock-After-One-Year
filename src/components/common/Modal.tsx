import styled from "@emotion/styled";
import { useEffect, type ReactNode } from "react";
import Button from "./Button";
import { IoMdClose } from "react-icons/io";
import { style } from "../../styles/theme";

interface ModalProps {
  onClose?: () => void;
  title?: ReactNode;
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
          <Button
            style={{
              width: "40px",
              height: "40px",
            }}
            onClick={onClose}
          >
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
  padding: ${style.spacing.sectionGap};
  z-index: 999;
`;

const Container = styled.section`
  width: 100%;
  max-width: ${style.layout.maxWidth};
  min-height: 200px;
  max-height: 80vh;
  overflow-y: auto;

  display: flex;
  flex-direction: column;

  padding: ${style.spacing.cardPadding};

  background: ${style.colors.Surface};
  border-radius: ${style.radius.modal};
  box-shadow: ${style.shadow.modal};

  animation: modalIn ${style.motion.modal};

  @keyframes modalIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${style.spacing.contentGap};
`;

const Title = styled.h2`
  font-size: ${style.font.sectionTitle};
  font-weight: 600;
  color: ${style.colors.Text};
`;

const Content = styled.div`
  flex: 1;
`;
