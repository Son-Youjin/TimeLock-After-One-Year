import styled from "@emotion/styled";
import googleLogo from "../../assets/googleLogo.svg";
import appleLogo from "../../assets/appleLogo_black.svg";

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
  max-width: 320px;
  height: 56px;
  gap: 8px;

  border: none;
  border-radius: 25px;
  margin-bottom: 12px;
  cursor: pointer;

  background-color: ${({ bgcolor }) => bgcolor};
`;
