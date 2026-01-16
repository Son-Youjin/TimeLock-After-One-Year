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
  onClose,
}: MusicListProps) {
  return (
    <Backdrop onClick={onClose}>
      {onSearchResults.length > 0 && (
        <Ul>
          {onSearchResults.map((track, idx) => (
            <Li key={idx} onClick={() => onSelectedMusic(track)}>
              {track.artist} - {track.name}
            </Li>
          ))}
        </Ul>
      )}
    </Backdrop>
  );
}

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: transparent;
  z-index: 30;
`;

const Ul = styled.ul`
  position: absolute;
  top: 135px;
  left: 29px;
  width: 85%;
  height: 200px;
  border-radius: 10px;
  padding-left: 10px;
  margin: 14px 0px;

  overflow-y: auto;
`;

const Li = styled.li`
  list-style: none;
  font-size: 16px;
  width: 100%;
  padding: 10px;

  &:hover,
  &:active {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
