import styled from "@emotion/styled";
import AuthButton from "./AuthButton";
import { signInWithGoogle } from "../../api/auth";
import { colors } from "../../styles/theme";

export default function Auth() {
  return (
    <Container>
      <TextContainer>
        <Title>TimeLock</Title>
        <Subtitle>지금의 나를, 미래의 나에게</Subtitle>
      </TextContainer>

      <AuthButton onLoginGoogle={signInWithGoogle} />
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: 100%;
  max-width: 380px;

  padding: 160px 0 140px;
  margin-bottom: 20px;
`;

const TextContainer = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 30px;
  letter-spacing: -0.5px;
  margin-bottom: 12px;
`;

const Subtitle = styled.p`
  color: ${colors.Text};
  opacity: 0.8;
  letter-spacing: -0.2px;
`;
