import styled from "@emotion/styled";

export default function DdayCardSkeleton() {
  return (
    <Container>
      <Day />
      <Date />
      <Title />
    </Container>
  );
}

const shimmer = `
  background: linear-gradient(
    90deg,
    rgba(0,0,0,0.04) 25%,
    rgba(0,0,0,0.08) 37%,
    rgba(0,0,0,0.04) 63%
  );
  background-size: 400% 100%;
  animation: shimmer 1.4s ease infinite;

  @keyframes shimmer {
    0% { background-position: 100% 0 }
    100% { background-position: -100% 0 }
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 12px;
`;

const Day = styled.div`
  width: 140px;
  height: 52px;
  border-radius: 12px;
  margin: 20px 0 18px;
  ${shimmer}
`;

const Date = styled.div`
  width: 180px;
  height: 18px;
  border-radius: 8px;
  margin-bottom: 28px;
  ${shimmer}
`;

const Title = styled.div`
  width: 100%;
  max-width: 280px;
  height: 56px;
  border-radius: 14px;
  ${shimmer}
`;
