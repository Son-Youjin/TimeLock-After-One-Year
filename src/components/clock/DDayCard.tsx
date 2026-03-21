import styled from "@emotion/styled";
import { style } from "../../styles/theme";
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
  margin: ${style.spacing.sectionGap} ${style.spacing.contentGap};
`;

const SubText = styled.p`
  font-size: ${style.font.body};
  color: ${style.colors.Text_light};
  margin-top: ${style.spacing.contentGap};
`;
