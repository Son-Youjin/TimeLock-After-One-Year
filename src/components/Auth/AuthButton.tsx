import styled from "@emotion/styled";
import googleLogo from "../../assets/googleLogo.svg";
import appleLogo from "../../assets/appleLogo_black.svg";
import { colors } from "../../styles/theme";

interface AuthButtonProps {
  onLoginGoogle: () => void;
}

export default function AuthButton({ onLoginGoogle }: AuthButtonProps) {
  return (
    <Container>
      <AuthBtn
        bgcolor="#ffffff"
        aria-label="구글 로그인"
        onClick={onLoginGoogle}
      >
        <img src={googleLogo} width={20} height={20} alt="Google 로고" />
        Google로 시작하기
      </AuthBtn>

      <AuthBtn
        bgcolor="#ffffff"
        aria-label="애플 로그인"
        // onClick={() => onLogin("kakao")}
      >
        <img src={appleLogo} width={20} height={20} alt="Apple 로고" />
        Apple로 시작하기
      </AuthBtn>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AuthBtn = styled.button<{ bgcolor: string }>`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 16px;
  font-weight: 500;

  width: 100%;
  max-width: 300px;
  height: 56px;
  gap: 8px;

  border: none;
  border-radius: 28px;
  margin-bottom: 12px;
  cursor: pointer;

  background-color: ${({ bgcolor }) => bgcolor};
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);

  transition:
    background-color 0.3s ease,
    transform 0.15s ease,
    box-shadow 0.2s ease;

  &:active {
    transform: translateY(0) scale(0.98);
    background-color: ${colors.Active};
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid ${colors.Focus};
    outline-offset: 2px;
  }

  @media (hover: hover) {
    &:hover {
      background-color: ${colors.Active};
      transform: translateY(-1px);
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.06);
    }
  }
`;
