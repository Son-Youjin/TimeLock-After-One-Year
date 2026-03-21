import styled from "@emotion/styled";
import googleLogo from "../../assets/googleLogo.svg";
import appleLogo from "../../assets/appleLogo_black.svg";
import { style } from "../../styles/theme";

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
        <img
          src={googleLogo}
          width={20}
          height={20}
          alt=""
          aria-hidden="true"
        />
        Google로 시작하기
      </AuthBtn>

      {/* TODO:  애플 로그인*/}
      <AuthBtn
        bgcolor="#ffffff"
        aria-label="애플 로그인"
        // onClick={() => onLogin("apple")}
      >
        <img src={appleLogo} width={20} height={20} alt="" aria-hidden="true" />
        Apple로 시작하기
      </AuthBtn>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${style.spacing.contentGap};
  width: 100%;
`;

const AuthBtn = styled.button<{ bgcolor: string }>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 300px;
  height: ${style.size.buttonHeight};
  gap: ${style.spacing.tightGap};

  border: none;
  border-radius: ${style.radius.pill};
  background-color: ${({ bgcolor }) => bgcolor};
  box-shadow: ${style.shadow.button};

  font-size: ${style.font.body};
  font-weight: 500;
  color: ${style.colors.Text};

  cursor: pointer;

  transition: ${style.motion.card};

  img {
    flex-shrink: 0;
  }

  &:active {
    transform: scale(0.97);
    background-color: ${style.colors.Active};
  }

  @media (hover: hover) {
    &:hover {
      background-color: ${style.colors.Active};
    }
  }
`;
