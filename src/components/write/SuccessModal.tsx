import styled from "@emotion/styled";
import Button from "../common/Button";
import { colors } from "../../styles/theme";

interface SuccessModalProps {
  onClose: () => void;
}

export default function SuccessModal({ onClose }: SuccessModalProps) {
  return (
    <BackDrop onClick={onClose}>
      <Container>
        <Title>저장 완료</Title>
        <Text>편지가 안전하게 저장되었어요.</Text>

        <Layout>
          <Button
            style={{ width: "100%", height: "40px" }}
            bgcolor={colors.Active}
            color={colors.Background}
            onClick={onClose}
          >
            확인
          </Button>
          <Guide>2초 뒤에 자동으로 닫혀요!</Guide>
        </Layout>
      </Container>
    </BackDrop>
  );
}

const BackDrop = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.05);
  z-index: 999;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  transform: translateY(-40px);

  width: 260px;
  min-height: 100px;
  padding: 18px 14px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  background-color: aliceblue;
  border-radius: 14px;
`;

const Title = styled.h1`
  font-size: 16px;
  margin-bottom: 4px;
`;

const Text = styled.p`
  font-size: 14px;
`;

const Layout = styled.div`
  margin-top: 24px;
`;

const Guide = styled.p`
  font-size: 12px;
  color: gray;
  margin-top: 10px;
`;
