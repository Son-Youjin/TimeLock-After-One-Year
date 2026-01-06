import styled from "@emotion/styled";
import Border from "../common/Border";
import CreateButton from "../common/CreateButton";
import { colors } from "../../styles/theme";
import LetterItem from "../common/LetterItem";

export default function LoginMain() {
  return (
    <Container>
      <Border>
        <SubText>다음 편지가 열리기까지</SubText>
        <LetterItem text="나에게 쓰는 편지 1" />
        <Day>D-200</Day>
      </Border>
      <CreateButton />
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

const SubText = styled.p`
  font-size: 14px;
  color: ${colors.Text};
  /* line-height: 0; */
`;

const Day = styled.h1`
  color: ${colors.Text};
`;
