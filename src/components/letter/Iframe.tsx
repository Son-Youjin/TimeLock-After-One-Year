import styled from "@emotion/styled";

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

  border-radius: 16px;
  overflow: hidden;

  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);

  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(2px);
`;

const StyledIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
`;
