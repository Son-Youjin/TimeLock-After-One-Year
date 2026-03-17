import styled from "@emotion/styled";
import { colors } from "../../styles/theme";
import Button from "../common/Button";
import Modal from "../common/Modal";

interface ShowPushModalProps {
  onClose: () => void;
  onClick: () => void;
}

export default function ShowPushModal({
  onClose,
  onClick,
}: ShowPushModalProps) {
  return (
    <Modal onClose={onClose}>
      <Container>
        <Title>푸시 알림 받기</Title>

        <Text>
          기다린 편지,
          <br />
          열리는 순간 바로 알려드릴게요 📩
        </Text>

        <Button
          onClick={onClick}
          bgcolor={colors.ClearBlue}
          color={colors.Background}
          style={{ width: "100%", height: "48px" }}
        >
          알림받기
        </Button>
      </Container>
    </Modal>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
`;

const Text = styled.p`
  font-size: 16px;
  color: ${colors.Text};
  text-align: center;
  margin-bottom: 8px;
`;
