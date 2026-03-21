import styled from "@emotion/styled";
import { style } from "../../styles/theme";
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
          <IoCheckmark size={34} color={style.colors.Green} />
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -80%);

  width: 260px;
  min-height: 100px;
  padding: ${style.spacing.cardPadding};

  background-color: ${style.colors.Surface};
  border-radius: ${style.radius.modal};
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Icon = styled.div`
  margin-bottom: ${style.spacing.tightGap};

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
  font-size: ${style.font.sectionTitle};
  font-weight: 600;
  margin-bottom: ${style.spacing.tightGap};
  color: ${style.colors.Text};
`;

const Text = styled.p`
  font-size: ${style.font.body};
  color: ${style.colors.Text_light};
`;

const Guide = styled.p`
  font-size: ${style.font.caption};
  color: ${style.colors.Text_light};
  text-align: center;
  margin-top: ${style.spacing.sectionGap};
`;
