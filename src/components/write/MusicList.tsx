import styled from "@emotion/styled";
import type { MusicMeta } from "../../types/musicMeta";
import { colors } from "../../styles/theme";

interface MusicListProps {
  onSearchResults: MusicMeta[];
  onSelectedMusic: (music: MusicMeta) => void;
}

export default function MusicList({
  onSearchResults,
  onSelectedMusic,
}: MusicListProps) {
  if (onSearchResults.length === 0) return null;

  return (
    <>
      <Ul>
        {onSearchResults.map((track, idx) => (
          <Li key={idx} onClick={() => onSelectedMusic(track)}>
            {track.artist} - {track.name}
          </Li>
        ))}
      </Ul>
    </>
  );
}

const Ul = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;

  max-height: 240px;
  overflow-y: auto;

  border-radius: 16px;
  padding: 8px 0;
  margin: 0;

  background: ${colors.White};
  border: 1px solid rgba(0, 0, 0, 0.08);

  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);

  z-index: 50;
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
