import styled from "@emotion/styled";
import Button from "../common/Button";
import { colors } from "../../styles/theme";
import ProgressBar from "../ProgressBar";
import { useNavigate } from "react-router-dom";

export default function PreviewMain() {
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <ProgressBar />

        <SubText>
          시간이 지나야 열리는 편지를
          <br /> 미래의 나에게 남겨보세요.
        </SubText>
      </Container>
      <Button
        style={{ width: "100%", height: "60px" }}
        bgcolor={colors.ClearBlue}
        color={colors.Background}
        onClick={() => navigate("/auth")}
      >
        지금 이 순간 기록하기
      </Button>
    </>
  );
}

const Container = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 20px 0px;
`;

const SubText = styled.p`
  font-size: 16px;
  color: ${colors.Text};
  text-align: center;
  line-height: 1.45;
  margin: 10px 0px;
`;
