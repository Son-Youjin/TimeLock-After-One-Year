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
      bgcolor={colors.Active}
      color={colors.Background}
      onClick={handleGoWrite}
    >
      편지 작성하기
    </Button>
  );
}
