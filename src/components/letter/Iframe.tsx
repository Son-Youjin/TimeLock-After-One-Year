import styled from "@emotion/styled";
import { style } from "../../styles/theme";

export default function Iframe({ videoId }: { videoId: string }) {
  if (!videoId) return null;

  return (
    <Wrapper>
      <StyledIframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title="Youtube video player"
        allowFullScreen
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;

  border: 1px solid ${style.colors.Border};
  border-radius: ${style.radius.card};
  box-shadow: ${style.shadow.card};
  background: ${style.colors.Surface};
  backdrop-filter: blur(1.5px);
`;

const StyledIframe = styled.iframe`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: none;
`;
