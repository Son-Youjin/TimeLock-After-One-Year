import styled from "@emotion/styled";
import { colors } from "../../styles/theme";
import Clock from "./Clock";
import type { Letter } from "../../types/letter";
import TODAY_TIMESTAMP from "../../utils/todayTimestamp";
import calcDDay from "../../utils/calcDDay";

interface DDayCardProps {
  letter: Letter;
}

export default function DDayCard({ letter }: DDayCardProps) {
  if (!letter) return null;

  const totalDuration = letter.openAt - letter.createdAt;
  const passedDuration = TODAY_TIMESTAMP - letter.createdAt;
  const progress = passedDuration / totalDuration;

  const comingDDay = calcDDay(letter.openAt, TODAY_TIMESTAMP);

  return (
    <Container>
      <Border>
        <SubText>열리는 날까지 남은 시간</SubText>
        <Day> D-{comingDDay}</Day>

        <Clock progress={progress} />
      </Border>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  margin: 30px 0px;
`;

const Border = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 300px;
  height: 100%;

  padding: 24px;
  border: 1px solid silver;
  border-radius: 24px;
`;

const SubText = styled.p`
  font-size: 16px;
  color: ${colors.Text};
`;

const Day = styled.h1``;
