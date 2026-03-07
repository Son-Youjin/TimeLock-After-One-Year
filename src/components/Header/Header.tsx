import styled from "@emotion/styled";
import { GiHamburgerMenu } from "react-icons/gi";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";
import { colors } from "../../styles/theme";
import { AiOutlineInfoCircle } from "react-icons/ai";

interface HeaderProps {
  onClickSide: () => void;
  onClickInfo: () => void;
}

export default function Header({ onClickSide, onClickInfo }: HeaderProps) {
  const navigate = useNavigate();

  return (
    <Container>
      <IconButton onClick={onClickSide}>
        <GiHamburgerMenu size={22} />
      </IconButton>

      <Title onClick={() => navigate("/")}>TimeLock</Title>

      <IconButton onClick={onClickInfo}>
        <AiOutlineInfoCircle size={22} />
      </IconButton>
    </Container>
  );
}

const Container = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 60px;
  padding: 0 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
`;

const Title = styled.h1`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.3px;

  color: ${colors.Text};
  cursor: pointer;
`;

const IconButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;

  color: ${colors.Text};
  opacity: 0.85;
  cursor: pointer;

  @media (hover: hover) {
    &:hover {
      background-color: ${colors.Active};
      border-radius: 25px;
    }
  }
`;
