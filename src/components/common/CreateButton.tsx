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
      bgcolor={colors.Active}
      text="편지 작성하기"
      color={colors.Background}
      onClick={handleGoWrite}
    />
  );
}
