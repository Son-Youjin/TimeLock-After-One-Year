import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { IoLockClosedOutline, IoLockOpenOutline } from "react-icons/io5";
import { colors } from "../../styles/theme";

export default function UnlockTransition() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Container>
      {open ? (
        <OpenIcon>
          <IoLockOpenOutline size={42} />
        </OpenIcon>
      ) : (
        <ClosedIcon>
          <IoLockClosedOutline size={42} />
        </ClosedIcon>
      )}

      <Title>과거의 편지를 여는 중입니다</Title>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-height: 60vh;
  gap: 14px;

  animation: fadeIn 0.5s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(6px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const OpenIcon = styled.div`
  color: #4b6cff;

  animation: pop 0.5s ease;

  @keyframes pop {
    0% {
      transform: scale(0.6);
      opacity: 0;
    }

    60% {
      transform: scale(1.1);
    }

    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

const ClosedIcon = styled.div`
  color: ${colors.DeepBlue};

  animation: shake 0.5s ease;

  @keyframes shake {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(-10deg);
    }
    50% {
      transform: rotate(10deg);
    }
    75% {
      transform: rotate(-6deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -0.2px;

  opacity: 0.85;

  animation: textFade 0.6s ease;

  @keyframes textFade {
    from {
      opacity: 0;
    }
    to {
      opacity: 0.85;
    }
  }
`;
