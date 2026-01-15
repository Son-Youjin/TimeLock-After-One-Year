import styled from "@emotion/styled";
import type { MusicMeta } from "../../types/musicMeta";

interface MusicListProps {
  onSearchResults: MusicMeta[];
  onSelectedMusic: (music: MusicMeta) => void;
  onClose: () => void;
}

export default function MusicList({
  onSearchResults,
  onSelectedMusic,
}: MusicListProps) {
  return (
    <Backdrop>
      <Ul>
        {onSearchResults.map((track, idx) => (
          <Li key={idx} onClick={() => onSelectedMusic(track)}>
            {track.artist} - {track.name}
          </Li>
        ))}
      </Ul>
    </Backdrop>
  );
}

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: transparent;
  z-index: 1;
`;

const Ul = styled.ul`
  position: absolute;
  top: 140px;
  left: 0;
  width: 80%;
  height: 200px;
  background-color: skyblue;
  margin: 14px 0px;
`;

const Li = styled.li`
  width: 100%;
  padding: 10px;

  &:hover,
  &:active {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
