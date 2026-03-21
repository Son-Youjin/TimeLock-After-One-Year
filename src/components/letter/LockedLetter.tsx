import styled from "@emotion/styled";
import DDayCard from "../clock/DDayCard";
import { style } from "../../styles/theme";
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

        <Text>{letter?.title}</Text>
      </Title>

      <DDayCard letter={letter} />
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  margin-top: ${style.spacing.sectionGap};
  padding: ${style.spacing.cardPadding};
  background-color: ${style.colors.Surface};
  border-radius: ${style.radius.card};
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${style.spacing.tightGap};
  margin-top: ${style.spacing.contentGap};
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  color: ${style.colors.Text_light};
`;

const Text = styled.div`
  font-size: ${style.font.sectionTitle};
  font-weight: 600;
  color: ${style.colors.Text};
  text-align: center;
  line-height: 1.5;
  word-break: keep-all;
`;
