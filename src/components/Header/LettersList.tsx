import styled from "@emotion/styled";
import type { Letter } from "../../types/letter";

interface LettersListProps {
  letters: Letter[];
}

export default function LettersList({ letters }: LettersListProps) {
  const lettersList = [...letters];

  return (
    <Container>
      {lettersList.map((letter) => (
        <ListItem>{letter.title}</ListItem>
      ))}
    </Container>
  );
}

const Container = styled.ul`
  display: flex;
  flex-direction: column;
`;

const ListItem = styled.li`
  list-style: none;
  font-size: 12px;
`;
