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
`;

const StyledIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
