import styled from "@emotion/styled";
import type { Letter } from "../../types/letter";
import Iframe from "./Iframe";
import { colors } from "../../styles/theme";
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
  gap: 32px;
  margin: 24px 0 40px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: ${colors.Text};
  line-height: 1.4;
`;

const Music = styled.div`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.5);
`;

const Content = styled.div`
  border-radius: 20px;
  padding: 24px;
  font-size: 16px;
  line-height: 1.9;
  letter-spacing: -0.2px;
  white-space: pre-wrap;

  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.05);

  box-shadow:
    0 1px 0 rgba(255, 255, 255, 0.6),
    0 12px 30px rgba(0, 0, 0, 0.05);
`;

const DateText = styled.div`
  margin-top: 24px;
  font-size: 14px;
  text-align: right;
  color: rgba(0, 0, 0, 0.5);
  letter-spacing: 1px;
`;
