import styled from "@emotion/styled";
import DDayCard from "../clock/DDayCard";
import { colors } from "../../styles/theme";
import type { Letter } from "../../types/letter";
import { FaLock } from "react-icons/fa";

interface LockedLetterProps {
  letter: Letter | null;
}

export default function LockedLetter({ letter }: LockedLetterProps) {
  if (!letter) return null;

  return (
    <Container>
      <Title>
        <Icon>
          <FaLock size={18} />
        </Icon>
        {letter?.title}
      </Title>

      <DDayCard letter={letter} />
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  align-items: center;
  margin-top: 40px;
`;

const Title = styled.h1`
  display: flex;
  font-size: 20px;
  color: ${colors.Text};
  padding: 10px 0px;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  margin-right: 8px;
`;
