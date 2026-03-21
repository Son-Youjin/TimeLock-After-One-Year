import styled from "@emotion/styled";
import { style } from "../../styles/theme";

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
    ${style.colors.Background} 25%,
    ${style.colors.Border} 37%,
    ${style.colors.Background} 63%
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
  margin-top: ${style.spacing.contentGap};
`;

const Day = styled.div`
  width: 120px;
  height: 48px;
  border-radius: ${style.radius.input};
  margin: ${style.spacing.sectionGap} 0 ${style.spacing.contentGap};
  ${shimmer}
`;

const Date = styled.div`
  width: 160px;
  height: 16px;
  border-radius: ${style.radius.input};
  margin-bottom: ${style.spacing.sectionGap};
  ${shimmer}
`;

const Title = styled.div`
  width: 100%;
  max-width: 260px;
  height: ${style.size.inputHeight};
  border-radius: ${style.radius.button};
  ${shimmer}
`;
