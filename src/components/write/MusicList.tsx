import styled from "@emotion/styled";
import type { MusicMeta } from "../../types/musicMeta";
import { colors } from "../../styles/theme";

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
  top: 194px;
  left: 29px;
  width: 85%;
  height: 200px;
  border-radius: 12px;
  padding-left: 12px;
  margin: 14px 0px;
  background-color: ${colors.Background};

  overflow-y: auto;
`;

const Li = styled.li`
  list-style: none;
  font-size: 16px;
  width: 100%;
  padding: 12px;

  &:active {
    transform: translateY(0) scale(0.98);
    background-color: ${colors.Border};
  }

  @media (hover: hover) {
    &:hover {
      background-color: ${colors.Border};
      transform: translateY(-1px);
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.06);
    }
  }
`;
