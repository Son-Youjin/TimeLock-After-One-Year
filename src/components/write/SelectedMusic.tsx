import styled from "@emotion/styled";
import type { MusicMeta } from "../../types/musicMeta";
import { IoIosMusicalNotes } from "react-icons/io";
import { style } from "../../styles/theme";

interface SelectedMusicProps {
  music: MusicMeta;
  onOpen: () => void;
}

export default function SelectedMusic({ music, onOpen }: SelectedMusicProps) {
  return (
    <Container onClick={onOpen}>
      <Icon>
        <IoIosMusicalNotes size={18} />
      </Icon>

      <Text>
        {music.artist} - {music.name}
      </Text>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;

  height: ${style.size.inputHeight};
  padding: 0 ${style.spacing.contentGap};
  border: 1px solid ${style.colors.Border};
  border-radius: ${style.radius.input};
  background-color: ${style.colors.Surface};

  cursor: pointer;

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

const Icon = styled.div`
  display: flex;
  align-items: center;
  margin-right: ${style.spacing.tightGap};
  color: ${style.colors.Text_light};
`;

const Text = styled.div`
  font-size: ${style.font.body};
  color: ${style.colors.Text};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
