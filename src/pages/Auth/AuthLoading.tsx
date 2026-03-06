import styled from "@emotion/styled";

export default function AuthLoading() {
  return (
    <Container>
      <h1>TimeLock</h1>
      <p>시간을 맞추는 중입니다</p>
      <Dot>
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </Dot>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  transform: translateY(-60px);
`;

const Dot = styled.div`
  line-height: 1;
  font-size: 34px;

  span {
    opacity: 0;
    animation: loadingDots 1.4s infinite;
  }

  span:nth-of-type(2) {
    animation-delay: 0.25s;
  }

  span:nth-of-type(3) {
    animation-delay: 0.5s;
  }

  @keyframes loadingDots {
    0% {
      opacity: 0;
    }
    40% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
