import styled from "@emotion/styled";
import googleLogo from "../../assets/googleLogo.svg";
import { MdEmail } from "react-icons/md";
import { style } from "../../styles/theme";

interface AuthButtonProps {
  onLoginGoogle: () => void;
  onLoginEmail: () => void;
}

export default function AuthButton({
  onLoginGoogle,
  onLoginEmail,
}: AuthButtonProps) {
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
        Google로 로그인하기
      </AuthBtn>

      <AuthBtn
        bgcolor="#ffffff"
        aria-label="이메일 로그인"
        onClick={onLoginEmail}
      >
        <MdEmail size={20} />
        이메일로 로그인하기
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
