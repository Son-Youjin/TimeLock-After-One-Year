import styled from "@emotion/styled";

export default function ProgressBar() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 1);
  const end = new Date(now.getFullYear() + 1, 0, 1);

  const progress =
    ((now.getTime() - start.getTime()) / (end.getTime() - start.getTime())) *
    100;

  return (
    <>
      <BarLine>
        <Fill style={{ width: `${progress}%` }} />
      </BarLine>
      <SubText>
        {now.getFullYear()}년의
        <Number> {Math.floor(progress)}%</Number>가 지났어요.
      </SubText>
    </>
  );
}

const BarLine = styled.div`
  display: flex;
  width: 100%;
  height: 16px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  overflow: hidden;
  margin: 12px 0 0px;
`;

const Fill = styled.div`
  height: 100%;
  background-color: skyblue;
  transition: width 0.6s ease;
`;

const SubText = styled.p`
  font-size: 12px;
  margin: 0 0 20px 0;
`;

const Number = styled.span`
  font-size: 12px;
  color: rebeccapurple;
`;
