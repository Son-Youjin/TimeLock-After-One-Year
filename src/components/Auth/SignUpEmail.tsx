import styled from "@emotion/styled";
import { style } from "../../styles/theme";
import { signInWithEmail, signUpWithEmail } from "../../api/auth";
import { FirebaseError } from "firebase/app";
import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../api/firebase";

interface SignUpEmailProps {
  email: string;
  password: string;
  setEmail: (v: string) => void;
  setPassword: (v: string) => void;
}

export default function SignUpEmail({
  email,
  password,
  setEmail,
  setPassword,
}: SignUpEmailProps) {
  const [errorMsg, setErrorMsg] = useState("");

  const handleEmailLogin = async () => {
    setErrorMsg("");

    if (!email || !password) {
      setErrorMsg("이메일과 비밀번호를 입력하세요");
      return;
    }

    try {
      await signInWithEmail(email, password);
    } catch (error: unknown) {
      if (!(error instanceof FirebaseError)) return;

      switch (error.code) {
        case "auth/user-not-found":
        case "auth/invalid-credential":
          try {
            await signUpWithEmail(email, password);
          } catch {
            setErrorMsg("이메일 또는 비밀번호가 올바르지 않습니다");
          }
          break;

        case "auth/wrong-password":
          setErrorMsg("이메일 또는 비밀번호가 올바르지 않습니다");
          break;

        case "auth/invalid-email":
          setErrorMsg("이메일 형식이 올바르지 않습니다");
          break;

        default:
          setErrorMsg("로그인 실패");
      }
    }
  };

  const handleResetPassword = async () => {
    if (!email) {
      setErrorMsg("이메일을 먼저 입력하세요");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      alert("비밀번호 재설정 메일을 보냈습니다");
    } catch {
      setErrorMsg("가입된 이메일이 아닙니다");
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (errorMsg) setErrorMsg("");
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (errorMsg) setErrorMsg("");
  };

  return (
    <Wrapper>
      <Field>
        <Input
          type="email"
          placeholder="이메일 주소"
          value={email}
          onChange={handleEmailChange}
        />
      </Field>

      <Field>
        <Input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={handlePasswordChange}
        />
      </Field>

      {errorMsg && <ErrorText>{errorMsg}</ErrorText>}

      <StartButton onClick={handleEmailLogin} disabled={!email || !password}>
        시작하기
      </StartButton>

      <SubText onClick={handleResetPassword}>비밀번호 찾기</SubText>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 16px;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 320px;
  gap: 6px;
`;

const Input = styled.input`
  width: 100%;
  max-width: 320px;
  height: ${style.size.inputHeight};
  padding: 0 ${style.spacing.cardPadding};
  background: ${style.colors.Surface};

  border: 1px solid ${style.colors.Border};
  border-radius: ${style.radius.pill};

  font-size: ${style.font.body};

  transition: all 0.2s ease;

  &::placeholder {
    color: ${style.colors.Text_light};
    font-size: 13px;
  }

  &:focus {
    outline: none;
    border: 1px solid ${style.colors.Purple};
    box-shadow: ${style.shadow.focus};
  }

  &:active {
    transform: scale(0.995);
  }
`;

const ErrorText = styled.p`
  color: ${style.colors.Danger};
  font-size: 12px;
  margin-top: 6px;
  margin-left: 4px;
`;

const StartButton = styled.button`
  width: 100%;
  max-width: 320px;
  height: ${style.size.headerHeight};
  margin-top: 8px;

  border: none;
  border-radius: ${style.radius.pill};
  background: ${style.colors.DeepBlue};

  font-size: 16px;
  font-weight: 600;
  color: #fff;

  cursor: pointer;
  transition: all 0.2s ease;

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    background: ${style.colors.Active};
    cursor: not-allowed;
  }
`;

const SubText = styled.span`
  font-size: 12px;
  color: ${style.colors.Text_light};
  cursor: pointer;
  margin: 4px;
`;
