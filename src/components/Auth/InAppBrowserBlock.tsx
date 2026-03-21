import styled from "@emotion/styled";
import { style } from "../../styles/theme";

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
        <StepText>
          하단
          <Icon src="/shareIcon.png" />
          공유 버튼을 선택하거나
        </StepText>
        <Image src="/share.png" />

        <Line>또는</Line>

        <StepText>
          <Icon src="/dotIcon.png" />
          버튼을 선택하여
        </StepText>
        <Image src="/androidShare.png" />
      </StepCard>

      <StepCard>
        <Step>STEP 2</Step>
        <StepText>"Safari에서 열기"나</StepText>
        <Image src="/openSafari.png" />

        <Line>또는</Line>

        <StepText>"다른 브라우저로 열기"를 선택해주세요</StepText>
        <Image src="/androidOpen.png" />
      </StepCard>
    </Container>
  );
}

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: ${style.layout.maxWidth};
  padding: ${style.layout.padding};
`;

const Title = styled.h2`
  font-size: ${style.font.title};
  font-weight: 700;
  text-align: center;
  margin-bottom: ${style.spacing.contentGap};
`;

const Desc = styled.p`
  font-size: ${style.font.body};
  color: ${style.colors.Text_light};
  text-align: center;
  line-height: 1.5;
  margin-bottom: ${style.spacing.sectionGap};
`;

const StepCard = styled.div`
  background: ${style.colors.Surface};
  border-radius: ${style.radius.card};
  padding: ${style.spacing.cardPadding};
  margin-bottom: ${style.spacing.sectionGap};
  box-shadow: ${style.shadow.card};
`;

const Step = styled.p`
  font-size: ${style.font.caption};
  color: ${style.colors.ClearBlue};
  font-weight: 600;
  margin-bottom: 6px;
`;

const StepText = styled.p`
  font-size: ${style.font.littleTitle};
  font-weight: 600;
  margin-bottom: 12px;
`;

const Icon = styled.img`
  height: 14px;
  margin: 0 6px;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 12px;
`;

const Line = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${style.colors.Line};
  font-size: ${style.font.caption};
  padding: 10px 0;

  &::before,
  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background: ${style.colors.Line};
  }
`;
