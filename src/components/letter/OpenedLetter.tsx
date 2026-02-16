import styled from "@emotion/styled";
import type { Letter } from "../../types/letter";
import Iframe from "./Iframe";

interface OpenedLetterProps {
  letter: Letter;
}

export default function OpenedLetter({ letter }: OpenedLetterProps) {
  return (
    <Container>
      <Title>{letter.title}</Title>

      {/* <Music>{`${letter.song.artist} - ${letter.song.name}`}</Music> */}
      <Iframe videoId={letter.song.videoId} />

      <Content>{letter.content}</Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div``;

const Music = styled.div``;

const Content = styled.div``;
