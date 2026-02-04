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

      <AuthButton onLoginGoogle={() => signInWithGoogle()} />
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 70vh;
  padding: 20px;
  margin-top: 80px;
`;

const TextContainer = styled.div``;

const Title = styled.h1`
  font-size: 26px;
  margin-bottom: 6px;
`;

const Subtitle = styled.p`
  font-size: 16px;
`;
