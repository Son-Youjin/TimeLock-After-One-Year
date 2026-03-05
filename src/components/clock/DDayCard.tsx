import styled from "@emotion/styled";
import { colors } from "../../styles/theme";
import Clock from "./Clock";
import type { Letter } from "../../types/letter";
import { getLetterTime } from "../../utils/getLetterStatus";
import { formatDate } from "../../utils/formatDate";

interface DDayCardProps {
  letter: Letter;
}

export default function DDayCard({ letter }: DDayCardProps) {
  if (!letter) return null;

  const timeInfo = getLetterTime(letter);

  return (
    <Container>
      <Clock progress={timeInfo.progress} />

      <SubText>{formatDate(letter.openAt)}에 열립니다</SubText>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 24px 16px;
`;

const SubText = styled.p`
  font-size: 16px;
  color: ${colors.Text_light};
  margin-top: 16px;
`;
