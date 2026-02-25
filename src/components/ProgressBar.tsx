import styled from "@emotion/styled";
import { colors } from "../styles/theme";

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
        <Fill style={{ width: `${progress}%` }} />
      </BarLine>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  height: 140px;
  border-radius: ${colors.radius};

  background-color: #fffdf8;
  border: 1px solid #e2e8f0;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);

  padding: 6px 18px;
  margin: 20px 0px;
`;

const BarLine = styled.div`
  height: 16px;
  background-color: ${colors.Gray};
  border-radius: 8px;
  overflow: hidden;
`;

const Fill = styled.div`
  height: 100%;
  border-radius: 8px;
  background-color: ${colors.Skyblue};
  transition: width 0.6s ease;
`;

const SubText = styled.p`
  font-size: 18px;
  text-align: center;
  margin-bottom: 14px;
`;

const Number = styled.span`
  font-size: 20px;
  font-weight: 600;
  color: ${colors.Darkblue};
`;
