import styled from "@emotion/styled";
import AuthButton from "./AuthButton";
import { signInWithGoogle } from "../../api/auth";

export default function Auth() {
  return (
    <Container>
      <TextContainer>
        <Title>TimeLock</Title>
        <Subtitle>: 1년 뒤에 열리는 편지</Subtitle>
      </TextContainer>

      <AuthButton onLoginGoogle={signInWithGoogle} />
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;

  /* margin-top: 100px; */
  gap: 200px;
  max-width: 380px;
  /* padding: 40px 20px; */
  margin-bottom: 20px;
`;

const TextContainer = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 30px;
  letter-spacing: -0.5px;
  margin-bottom: 6px;
`;

const Subtitle = styled.p`
  font-size: 16px;
  opacity: 0.7;
`;
