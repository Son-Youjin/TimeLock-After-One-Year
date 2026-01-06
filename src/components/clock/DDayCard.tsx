import styled from "@emotion/styled";
import { colors } from "../../styles/theme";
import Clock from "./Clock";
import Border from "../common/Border";

export default function DDayCard() {
  return (
    <Border>
      <SubText>열리는 날까지 남은 시간</SubText>
      <Day>D-135</Day>

      <Clock />
    </Border>
  );
}

const SubText = styled.p`
  font-size: 14px;
  color: ${colors.Text};
  line-height: 0;
`;

const Day = styled.h1`
  line-height: 0;
`;
