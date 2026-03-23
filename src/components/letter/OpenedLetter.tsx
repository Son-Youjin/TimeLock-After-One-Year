import styled from "@emotion/styled";
import type { Letter } from "../../types/letter";
import Iframe from "./Iframe";
import { style } from "../../styles/theme";
import { formatLetterDate } from "../../utils/formatDate";

interface OpenedLetterProps {
  letter: Letter;
}

export default function OpenedLetter({ letter }: OpenedLetterProps) {
  return (
    <Container>
      <Header>
        <Title>{letter.title}</Title>
        <Music>{`${letter.song.artist} - ${letter.song.name}`}</Music>
      </Header>

      <Iframe videoId={letter.song.videoId} />
      <Content>
        {letter.content}
        <DateText>{formatLetterDate(letter.createdAt)}</DateText>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${style.spacing.sectionGap};
  margin: ${style.layout.padding} 0 ${style.spacing.sectionGap};
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${style.spacing.tightGap};
`;

const Title = styled.h1`
  font-size: ${style.font.title};
  font-weight: 600;
  color: ${style.colors.Text};
  line-height: 1.4;
`;

const Music = styled.div`
  font-size: ${style.font.body};
  color: ${style.colors.Text_light};
`;

const Content = styled.div`
  font-size: ${style.font.body};
  line-height: 1.8;
  letter-spacing: -0.2px;
  white-space: pre-wrap;

  background: ${style.colors.Surface};
  border: 1px solid ${style.colors.Border};
  border-radius: ${style.radius.card};
  box-shadow: ${style.shadow.card};
  padding: ${style.spacing.cardPadding};
`;

const DateText = styled.div`
  margin-top: 24px;
  font-size: 14px;
  text-align: right;
  color: rgba(0, 0, 0, 0.5);
  letter-spacing: 1px;
`;
