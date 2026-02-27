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
  border-radius: 12px;
  margin-bottom: 20px;
`;

const Icon = styled.div`
  display: flex;
  margin-right: 4px;
  padding: 4px 4px 4px 0px;
  color: ${colors.Text};
`;

const Text = styled.div`
  font-size: 16px;
  color: ${colors.Text};
`;
