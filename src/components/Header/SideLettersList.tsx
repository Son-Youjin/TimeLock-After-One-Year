import styled from "@emotion/styled";
import type { Letter } from "../../types/letter";
import { colors } from "../../styles/theme";
import { IoIosArrowForward } from "react-icons/io";

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
      <Title>보관된 편지 ({lettersList.length})</Title>

      {lettersList.map((letter) => (
        <ListItem
          onClick={() => {
            onClose();
            onGoLetter(letter.id);
          }}
          key={letter.id}
        >
          <Text>{letter.title}</Text>
          <Icon>
            <IoIosArrowForward size={18} />
          </Icon>
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

const Title = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${colors.Text};
  margin: 20px 12px 0px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  padding-bottom: 12px;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;

  list-style: none;

  padding: 14px 10px;

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

const Text = styled.p`
  font-size: 16px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${colors.Text};
`;

const Icon = styled.div`
  color: ${colors.Text_light};
  display: flex;
  align-items: center;
  padding-left: 6px;
`;
