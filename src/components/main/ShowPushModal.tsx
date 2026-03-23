import styled from "@emotion/styled";
import { style } from "../../styles/theme";
import Button from "../common/Button";
import Modal from "../common/Modal";
import { FaBell } from "react-icons/fa";

interface ShowPushModalProps {
  onClose: () => void;
  onClick: () => void;
}
// TODO: 모달 사이즈 재수정
export default function ShowPushModal({
  onClose,
  onClick,
}: ShowPushModalProps) {
  return (
    <Modal title="알림 설정" onClose={onClose}>
      <Container>
        <Icon>
          <FaBell color="#ffcf00" size={28} />
        </Icon>

        <Text>
          편지가 열리면
          <br />
          바로 알려드릴게요
        </Text>

        <Button
          onClick={onClick}
          bgcolor={style.colors.ClearBlue}
          color={style.colors.Background}
          style={{
            width: "100%",
            height: "60px",
          }}
        >
          알림 허용하기
        </Button>
      </Container>
    </Modal>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${style.spacing.contentGap};
`;

const Icon = styled.div`
  text-align: center;
  margin: ${style.spacing.tightGap} 0;
  animation: shake 0.5s ease-out 1;

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

const Text = styled.p`
  font-size: ${style.font.littleTitle};
  color: ${style.colors.Text};
  text-align: center;
  line-height: 1.5;
  margin-bottom: ${style.spacing.contentGap};
`;
