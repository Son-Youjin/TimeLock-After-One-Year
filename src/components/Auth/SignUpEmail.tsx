import styled from "@emotion/styled";
import { style } from "../../styles/theme";
import { signInWithEmail, signUpWithEmail } from "../../api/auth";
import Button from "../common/Button";
import { FirebaseError } from "firebase/app";
import { useState } from "react";

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
          await signUpWithEmail(email, password);
          break;

        case "auth/wrong-password":
          setErrorMsg("비밀번호가 틀렸습니다");
          break;

        case "auth/invalid-email":
          setErrorMsg("이메일 형식이 올바르지 않습니다");
          break;

        default:
          setErrorMsg("로그인 실패");
      }
    }
  };

  return (
    <>
      <Input
        type="email"
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {errorMsg && <ErrorText>{errorMsg}</ErrorText>}

      <Button onClick={handleEmailLogin}>시작하기</Button>
    </>
  );
}

const Input = styled.input`
  width: 100%;
  max-width: 300px;
  height: ${style.size.inputHeight};

  padding: 0 16px;
  border-radius: ${style.radius.pill};
  border: 1px solid #ddd;

  font-size: ${style.font.body};
`;

const ErrorText = styled.p`
  color: red;
  font-size: 12px;
  margin-top: 8px;
`;
