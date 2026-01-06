import styled from "@emotion/styled";
import Button from "../common/Button";
import { colors } from "../../styles/theme";

export default function PreviewMain() {
  return (
    <Container>
      <SubText>올해의 시간이 이렇게 흘러가고 있어요.</SubText>

      {/* [ 2026년 진행률 (게이지 바) ] */}
      <SubText>시간이 지나야 열리는 편지를 미래의 나에게 남겨보세요.</SubText>
      <Button
        bgcolor={colors.Text}
        color={colors.Background}
        text="로그인하고 편지 쓰기"
      />
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
