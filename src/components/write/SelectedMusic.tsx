import styled from "@emotion/styled";
import type { MusicMeta } from "../../types/musicMeta";
import { IoIosMusicalNotes } from "react-icons/io";
import { colors } from "../../styles/theme";

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
  height: 34px;
  border-radius: 16px;
  padding: 0 12px;

  cursor: pointer;
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease;

  &:active {
    background-color: rgba(120, 140, 255, 0.1);
  }

  @media (hover: hover) {
    &:hover {
      background-color: rgba(120, 140, 255, 0.1);
    }
  }
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  margin-right: 8px;
  color: rgba(0, 0, 0, 0.45);
`;

const Text = styled.div`
  font-size: 16px;
  color: ${colors.Text};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
