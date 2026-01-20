import styled from "@emotion/styled";
import Button from "../common/Button";
import { colors } from "../../styles/theme";
import ProgressBar from "../ProgressBar";
import { useNavigate } from "react-router-dom";

export default function PreviewMain({ onLogin }: { onLogin: () => void }) {
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <SubText>올해의 시간이 흘러가고 있어요.</SubText>

        <ProgressBar />

        <SubText>시간이 지나야 열리는 편지를 미래의 나에게 남겨보세요.</SubText>
      </Container>
      <Button
        style={{ width: "100%", height: "46px" }}
        bgcolor={colors.Text}
        color={colors.Background}
        onClick={() => navigate("/auth")}
      >
        로그인하고 편지 쓰기
      </Button>
    </>
  );
}

const Container = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 10px 0px 20px 0px;
`;

const SubText = styled.p`
  font-size: 16px;
  color: ${colors.Text};
  align-items: center;
`;
