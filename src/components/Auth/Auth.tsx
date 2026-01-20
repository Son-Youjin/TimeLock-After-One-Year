import styled from "@emotion/styled";
import AuthButton from "./AuthButton";
import type { AuthProvider } from "../../types/auth";

interface AuthProps {
  onLogin: (provider: AuthProvider) => void;
}

export default function Auth({ onLogin }: AuthProps) {
  return (
    <Container>
      <TextContainer>
        <Title>TimeLock</Title>
        <Subtitle>: 1년 뒤에 열리는 편지</Subtitle>
      </TextContainer>

      <AuthButton onLogin={onLogin} />
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
