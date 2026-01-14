import styled from "@emotion/styled";
import type { MusicMeta } from "../../types/musicMeta";

interface MusicListProps {
  onSearchResults: MusicMeta[];
  onSelectedMusic: (music: MusicMeta) => void;
}

export default function MusicList({
  onSearchResults,
  onSelectedMusic,
}: MusicListProps) {
  return (
    <Ul>
      {onSearchResults.map((track, idx) => (
        <Li key={idx} onClick={() => onSelectedMusic(track)}>
          {track.artist} - {track.name}
        </Li>
      ))}
    </Ul>
  );
}

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  margin: 20px 0px;
`;

const Li = styled.li`
  width: 100%;
  padding: 10px;

  &:hover,
  &:active {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
