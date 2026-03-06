import styled from "@emotion/styled";
import { colors } from "../../styles/theme";
import { IoCheckmark } from "react-icons/io5";
import { useEffect, useState } from "react";

interface SuccessModalProps {
  onClose: () => void;
}

export default function SuccessModal({ onClose }: SuccessModalProps) {
  const [timer, setTimer] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((acc) => (acc > 0 ? acc - 1 : 0));
    }, 1000);

    const closeTimer = setTimeout(onClose, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(closeTimer);
    };
  }, [onClose]);

  return (
    <Container onClick={(e) => e.stopPropagation()}>
      <Header>
        <Icon>
          <IoCheckmark size={34} color="#62c080" />
        </Icon>

        <Title>저장 완료</Title>
        <Text>편지가 봉인되었습니다.</Text>
      </Header>

      <Guide>
        {timer > 0 ? `${timer}초 후 홈으로 이동합니다` : "닫는 중..."}
      </Guide>
    </Container>
  );
}

const Container = styled.div`
  transform: translateY(-20px);

  width: 260px;
  min-height: 100px;
  padding: 22px 20px;

  background-color: ${colors.Surface};
  border-radius: 14px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.div`
  margin-bottom: 6px;

  animation: pop 0.4s ease;

  @keyframes pop {
    0% {
      transform: scale(0.6);
      opacity: 0;
    }
    70% {
      transform: scale(1.15);
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

const Title = styled.h1`
  font-size: 17px;
  margin-bottom: 4px;
`;

const Text = styled.p`
  font-size: 14px;
`;

const Guide = styled.p`
  font-size: 12px;
  color: gray;
  text-align: center;
  margin-top: 20px;
`;
