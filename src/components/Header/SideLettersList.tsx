import styled from "@emotion/styled";
import type { Letter } from "../../types/letter";
import { colors } from "../../styles/theme";

interface SideLettersListProps {
  letters: Letter[];
  onGoLetter: (id: string) => void;
  onClose: () => void;
}

export default function SideLettersList({
  letters,
  onGoLetter,
  onClose,
}: SideLettersListProps) {
  const lettersList = [...letters];

  return (
    <Container>
      {lettersList.map((letter) => (
        <ListItem
          onClick={() => {
            onClose();
            onGoLetter(letter.id);
          }}
          key={letter.id}
        >
          {letter.title}
        </ListItem>
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

  transition:
    background-color 0.3s ease,
    transform 0.15s ease,
    box-shadow 0.2s ease;

  &:active {
    transform: translateY(0) scale(0.98);
    background-color: ${colors.Active};
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid ${colors.Focus};
    outline-offset: 2px;
  }

  @media (hover: hover) {
    &:hover {
      background-color: ${colors.Active};
      transform: translateY(-1px);
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.06);
    }
  }
`;
