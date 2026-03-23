import { useNavigate } from "react-router-dom";
import { style } from "../../styles/theme";
import Button from "./Button";

export default function CreateButton() {
  const navigate = useNavigate();

  const handleGoWrite = () => {
    navigate(`/write`);
  };

  return (
    <Button
      style={{ width: "100%", height: "60px" }}
      bgcolor={style.colors.ClearBlue}
      color={style.colors.Background}
      onClick={handleGoWrite}
    >
      새 편지 쓰기
    </Button>
  );
}
