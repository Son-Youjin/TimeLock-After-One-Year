import styled from "@emotion/styled";
import type { Letter } from "../../types/letter";

interface SideLettersListProps {
  letters: Letter[];
}

export default function SideLettersList({ letters }: SideLettersListProps) {
  const lettersList = [...letters];

  return (
    <Container>
      {lettersList.map((letter) => (
        <ListItem key={letter.id}>{letter.title}</ListItem>
      ))}
    </Container>
  );
}

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 8px 8px 10px 8px;
`;

const ListItem = styled.li`
  list-style: none;
  font-size: 14px;

  padding: 8px 6px 8px 12px;
  margin-bottom: 6px;
  border-left: 2px solid rgba(0, 0, 0, 0.2);

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  &:active {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
