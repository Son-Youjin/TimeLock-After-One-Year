import styled from "@emotion/styled";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoBell } from "react-icons/go";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  onClickSide: () => void;
  onClickBell: () => void;
}

export default function Header({ onClickSide, onClickBell }: HeaderProps) {
  const navigate = useNavigate();

  return (
    <Container>
      <Button onClick={onClickSide}>
        <GiHamburgerMenu size={18} />
      </Button>

      <Title onClick={() => navigate("/")}>TimeLock</Title>

      <Button onClick={onClickBell}>
        <GoBell size={18} />
      </Button>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  width: 100%;
  height: 40px;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px 10px;
  margin: 10px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
`;

const Title = styled.h1`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;
