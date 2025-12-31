import styled from "@emotion/styled";
import { colors } from "../../styles/theme";
import Clock from "./Clock";

export default function DDayCard() {
  return (
    <Container>
      <SubText>열리는 날까지 남은 시간</SubText>
      <Day>D-135</Day>

      <Clock />
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 300px;

  padding: 24px;
  border: 1px solid silver;
  border-radius: 24px;

  /* margin-top: 60%; */
  margin-bottom: 20px;
`;

const SubText = styled.p`
  font-size: 14px;
  color: ${colors.Text};
  line-height: 0;
`;

const Day = styled.h1`
  line-height: 0;
`;
