import styled from "@emotion/styled";

interface SuccessModalProps {
  onClose: () => void;
}

export default function SuccessModal({ onClose }: SuccessModalProps) {
  return (
    <BackDrop onClick={onClose}>
      <Container>
        <Title>저장 완료</Title>
        <Text>1년 뒤에 열릴 편지가 안전하게 저장되었어요.</Text>
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

  width: min(90% 320px);
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
