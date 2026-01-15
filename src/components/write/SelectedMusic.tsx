import styled from "@emotion/styled";
import type { MusicMeta } from "../../types/musicMeta";
import { IoIosMusicalNotes } from "react-icons/io";

interface SelectedMusicProps {
  onSelectedMusic: MusicMeta;
}

export default function SelectedMusic({ onSelectedMusic }: SelectedMusicProps) {
  return (
    <Container>
      <Icon>
        <IoIosMusicalNotes size={18} />
      </Icon>
      {onSelectedMusic.artist} - {onSelectedMusic.name}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const Icon = styled.div`
  display: flex;
  margin-right: 4px;
  padding: 4px 4px 4px 0px;
`;
