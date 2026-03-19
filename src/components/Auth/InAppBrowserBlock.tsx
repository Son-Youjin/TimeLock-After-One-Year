import styled from "@emotion/styled";

export default function InAppBrowserBlock() {
  return (
    <Container>
      <Title>외부 브라우저에서 열어주세요</Title>

      <Desc>
        인앱 브라우저에서는 Google 로그인이 제한됩니다.
        <br />
        Safari 또는 Chrome에서 이용해주세요.
      </Desc>

      <StepCard>
        <Step>STEP 1</Step>
        <StepText>하단 공유 버튼을 선택하거나</StepText>
        <Image src="/share.png" />

        <Line>또는</Line>

        <StepText>: 버튼을 선택하여</StepText>
        {/* 이미지 안드로이드 버전으로 수정 예정 */}
        <Image src="/linkShare.png" />
      </StepCard>

      <StepCard>
        <Step>STEP 2</Step>
        <StepText>"Safari에서 열기"나</StepText>
        <Image src="/openSafari.png" />

        <Line>또는</Line>

        {/* 안드로이드 버전으로 이미지 수정 예정 */}
        <StepText>"인터넷에서 열기"를 선택해주세요</StepText>
        <Image src="/openSafari.png" />
      </StepCard>
    </Container>
  );
}

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 360px;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 12px;
`;

const Desc = styled.p`
  font-size: 14px;
  color: #666;
  text-align: center;
  line-height: 1.5;
  margin-bottom: 24px;
`;

const StepCard = styled.div`
  background: #fff;
  border-radius: 20px;
  padding: 16px;
  margin-bottom: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
`;

const Step = styled.p`
  font-size: 12px;
  color: #4a90e2;
  font-weight: 600;
  margin-bottom: 6px;
`;

const StepText = styled.p`
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 12px;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 12px;
`;

const Line = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #aaa;
  font-size: 12px;
  padding: 10px 0;

  &::before,
  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background: rgba(0, 0, 0, 0.2);
  }
`;
