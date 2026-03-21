import styled from "@emotion/styled";
import type { MusicMeta } from "../../types/musicMeta";
import { style } from "../../styles/theme";

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

  border-radius: ${style.radius.card};
  background: ${style.colors.Surface};
  box-shadow: ${style.shadow.card};
  border: 1px solid ${style.colors.Border};
  padding: ${style.spacing.tightGap} 0;
  margin: 0;

  z-index: 50;
`;

const Li = styled.li`
  list-style: none;
  width: 100%;

  /* 사이즈 확인 */
  /* font-size: ${style.font.littleTitle}; */
  font-size: ${style.font.body};
  padding: ${style.spacing.contentGap};
  color: ${style.colors.Text};

  &:active {
    background-color: ${style.colors.Active};
  }

  @media (hover: hover) {
    &:hover {
      background-color: ${style.colors.Active};
    }
  }
`;
