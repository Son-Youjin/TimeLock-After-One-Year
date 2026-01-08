import styled from "@emotion/styled";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoBell } from "react-icons/go";

interface HeaderProps {
  onClickSide: () => void;
  onClickBell: () => void;
}

export default function Header({ onClickSide, onClickBell }: HeaderProps) {
  return (
    <Container>
      <Btn onClick={onClickSide}>
        <GiHamburgerMenu />
      </Btn>
      <Btn onClick={onClickBell}>
        <GoBell />
      </Btn>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  width: 100%;
  height: 3vh;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px;
  margin: 10px 0;
`;

const Btn = styled.button`
  display: flex;
  border: none;
`;
