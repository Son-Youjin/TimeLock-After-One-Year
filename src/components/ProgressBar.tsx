import styled from "@emotion/styled";
import { style } from "../styles/theme";

export default function ProgressBar() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 1);
  const end = new Date(now.getFullYear() + 1, 0, 1);

  const progress =
    ((now.getTime() - start.getTime()) / (end.getTime() - start.getTime())) *
    100;

  return (
    <Container>
      <SubText>
        {now.getFullYear()}년의
        <Number> {Math.floor(progress)}%</Number>가 지났어요.
      </SubText>

      <BarLine>
        <Fill progress={progress} />
      </BarLine>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  min-height: 140px;

  border-radius: ${style.radius.card};
  background-color: ${style.colors.Surface};
  border: 1px solid ${style.colors.Border};
  box-shadow: ${style.shadow.card};

  padding: ${style.spacing.cardPadding};
  margin: ${style.spacing.sectionGap} 0;
`;

const BarLine = styled.div`
  height: 14px;
  background-color: ${style.colors.Gray};
  border-radius: ${style.radius.pill};
  overflow: hidden;
`;

const Fill = styled.div<{ progress: number }>`
  width: ${({ progress }) => progress}%;
  height: 100%;
  border-radius: ${style.radius.pill};
  background-color: ${style.colors.Skyblue};
  transition: width ${style.motion.card};
`;

const SubText = styled.p`
  font-size: ${style.font.littleTitle};
  text-align: center;
  margin-bottom: ${style.spacing.contentGap};
  color: ${style.colors.Text};
`;

const Number = styled.span`
  font-size: ${style.font.sectionTitle};
  font-weight: 600;
  color: ${style.colors.Darkblue};
`;
