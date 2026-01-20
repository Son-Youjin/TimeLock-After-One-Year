import styled from "@emotion/styled";
import type { AuthProvider } from "../../types/auth";

interface AuthButtonProps {
  onLogin: (provider: AuthProvider) => void;
}

export default function AuthButton({ onLogin }: AuthButtonProps) {
  return (
    <Container>
      <AuthBtn
        bgcolor="#FEE500"
        aria-label="네이버 로그인"
        onClick={() => onLogin("naver")}
      >
        네이버 로그인
      </AuthBtn>
      <AuthBtn
        bgcolor="#03A94D"
        aria-label="카카오 로그인"
        onClick={() => onLogin("kakao")}
      >
        카카오 로그인
      </AuthBtn>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

// TODO: 네이버 카카오 비율이 안 맞아서, 추후 직접 레이아웃
const AuthBtn = styled.button<{ bgcolor: string }>`
  width: 100%;
  height: 56px;
  border: none;
  border-radius: 8px;
  margin-bottom: 12px;
  font-size: 14px;
  cursor: pointer;

  background-color: ${({ bgcolor }) => bgcolor};
`;
