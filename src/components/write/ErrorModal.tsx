import styled from "@emotion/styled";
import { style } from "../../styles/theme";
import { IoWarningOutline } from "react-icons/io5";

interface ErrorModalProps {
  message: string;
  onClose: () => void;
  onRetry: () => void;
  isPending: boolean;
}

export default function ErrorModal({
  message,
  onClose,
  onRetry,
  isPending,
}: ErrorModalProps) {
  return (
    <Container onClick={onClose}>
      <Inner onClick={(e) => e.stopPropagation()}>
        <Header>
          <Icon>
            <IoWarningOutline size={34} color={style.colors.Danger} />
          </Icon>

          <Title>문제가 발생했습니다</Title>
          <Text>{message}</Text>

          <RetryBtn onClick={onRetry}>
            {isPending ? "다시 저장 중..." : "다시 저장하기"}
          </RetryBtn>
        </Header>
      </Inner>
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

const Inner = styled.div``;

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

const RetryBtn = styled.button`
  width: 100%;
  height: 44px;

  margin-top: ${style.spacing.tightGap};

  font-size: ${style.font.body};
  font-weight: 600;

  color: ${style.colors.Background};
  background-color: ${style.colors.Danger};

  border: none;
  border-radius: ${style.radius.button};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);

  cursor: pointer;
  transition: ${style.motion.card};

  &:hover {
    filter: brightness(0.9);
  }

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
