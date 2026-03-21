import styled from "@emotion/styled";
import type { Letter } from "../../types/letter";
import { style } from "../../styles/theme";
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
  margin: ${style.spacing.tightGap} ${style.spacing.contentGap};
  padding: 0;
`;

const Title = styled.div`
  font-size: ${style.font.sectionTitle};
  font-weight: 600;
  color: ${style.colors.Text};

  margin-top: ${style.spacing.sectionGap};
  padding-bottom: ${style.spacing.contentGap};
  border-bottom: 1px solid ${style.colors.Border};
`;

const ListItem = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: ${style.spacing.contentGap} 0;

  transition: ${style.motion.card};

  &:active {
    background-color: ${style.colors.Active};
  }

  @media (hover: hover) {
    &:hover {
      background-color: ${style.colors.Active};
    }
  }
`;

const Text = styled.p`
  /* TODO: 사이즈 확인 후 수정 */
  font-size: ${style.font.body};
  /* font-size: ${style.font.littleTitle}; */
  color: ${style.colors.Text};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  margin-left: ${style.spacing.tightGap};
  color: ${style.colors.Text_light};
`;
