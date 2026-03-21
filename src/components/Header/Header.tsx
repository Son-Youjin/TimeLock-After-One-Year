import styled from "@emotion/styled";
import { GiHamburgerMenu } from "react-icons/gi";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";
import { style } from "../../styles/theme";
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

  height: ${style.size.headerHeight};
  padding: 0 ${style.spacing.contentGap};

  border-bottom: 1px solid ${style.colors.Border};
`;

const Title = styled.h1`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  font-size: ${style.font.title};
  font-weight: 600;
  letter-spacing: -0.3px;
  color: ${style.colors.Text};
  cursor: pointer;

  line-height: 1;
  pointer-events: auto;
`;

const IconButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 44px;
  height: 44px;
  min-width: 44px;
  min-height: 44px;

  color: ${style.colors.Text};
  cursor: pointer;

  border-radius: ${style.radius.pill};

  &:active {
    background-color: ${style.colors.Active};
  }

  @media (hover: hover) {
    &:hover {
      background-color: ${style.colors.Active};
    }
  }
`;
