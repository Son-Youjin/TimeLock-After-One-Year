import styled from "@emotion/styled";
import AuthButton from "./AuthButton";
import { signInWithGoogle } from "../../api/auth";
import { style } from "../../styles/theme";
import { useState } from "react";
import SignUpEmail from "./SignUpEmail";

export default function Auth() {
  const [isEmailMode, setIsEmailMode] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      <TextContainer>
        <Title>TimeLock</Title>
        <Subtitle>지금의 나를, 미래의 나에게</Subtitle>
      </TextContainer>

      {!isEmailMode ? (
        <AuthButton
          onLoginGoogle={signInWithGoogle}
          onLoginEmail={() => setIsEmailMode(true)}
        />
      ) : (
        <>
          <SignUpEmail
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
          />
        </>
      )}
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
  width: 100%;
  max-width: ${style.layout.maxWidth};

  padding: ${style.layout.padding};
  margin: 0 auto;
`;

const TextContainer = styled.div`
  text-align: center;
  margin-bottom: 48px;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
  letter-spacing: -0.4px;
  color: ${style.colors.Text};
  margin-bottom: 8px;
`;

const Subtitle = styled.p`
  font-size: ${style.font.body};
  color: ${style.colors.Text_light};
  letter-spacing: -0.2px;
`;
