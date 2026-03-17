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
    <Modal onClose={onClose} title="푸시 알림 받기">
      기다린 편지, 열리는 순간 바로 알려드릴게요 📩
      <Button
        onClick={onClick}
        bgcolor={colors.ClearBlue}
        color={colors.Background}
        style={{ width: "100%", height: "60px" }}
      >
        알림받기
      </Button>
    </Modal>
  );
}
