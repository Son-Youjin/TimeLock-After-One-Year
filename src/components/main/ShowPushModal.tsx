import styled from "@emotion/styled";
import { style } from "../../styles/theme";
import Button from "../common/Button";
import Modal from "../common/Modal";

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
    <Modal onClose={onClose}>
      <Container>
        <Title>푸시 알림 받기</Title>

        <Text>
          푸시 알림을 허용하면
          <br />
          기다린 편지가 열리는 순간 바로 알려드릴게요 📩
        </Text>

        <Button
          onClick={onClick}
          bgcolor={style.colors.ClearBlue}
          color={style.colors.Background}
          style={{
            width: "100%",
            height: style.size.buttonHeight,
          }}
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
  gap: ${style.spacing.contentGap};
`;

const Title = styled.h1`
  font-size: ${style.font.sectionTitle};
  font-weight: 600;
  color: ${style.colors.Text};
`;

const Text = styled.p`
  font-size: ${style.font.body};
  color: ${style.colors.Text_light};
  text-align: center;
  line-height: 1.5;
`;
