import { useNavigate } from "react-router-dom";
import { colors } from "../../styles/theme";
import Button from "./Button";

export default function CreateButton() {
  const navigate = useNavigate();

  const handleGoWrite = () => {
    navigate(`/write`);
  };

  return (
    <Button
      style={{ width: "100%", height: "46px" }}
      bgcolor={colors.ClearBlue}
      color={colors.Background}
      onClick={handleGoWrite}
    >
      새 편지 쓰기
    </Button>
  );
}
