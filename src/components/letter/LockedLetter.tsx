import styled from "@emotion/styled";
import DDayCard from "../clock/DDayCard";
import { colors } from "../../styles/theme";
import type { Letter } from "../../types/letter";
import { FaLock } from "react-icons/fa";
import { useEffect, useState } from "react";

interface LockedLetterProps {
  letter: Letter | null;
}

export default function LockedLetter({ letter }: LockedLetterProps) {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (!letter) return;

    const now = Date.now();
    const untilOpen = letter.openAt - now;

    if (untilOpen <= 0) return;

    const timer = setTimeout(() => {
      setTick((acc) => acc + 1);
    }, untilOpen);

    return () => clearTimeout(timer);
  }, [letter]);

  if (!letter) return null;

  return (
    <Container>
      <Title>
        <Icon>
          <FaLock size={18} />
        </Icon>

        <Text>{letter?.title}</Text>
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

  background-color: ${colors.Background};
  border-radius: 20px;

  padding: 20px 10px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 8px;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  color: ${colors.Text};
  margin-bottom: 2px;
`;

const Text = styled.div`
  font-size: 18px;
  color: ${colors.Text};
  font-weight: 600;

  text-align: center;
  white-space: normal;
  word-break: keep-all;
  line-height: 1.5;
  max-width: 280px;
`;
