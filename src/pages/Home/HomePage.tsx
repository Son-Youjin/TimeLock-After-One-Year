import { useState } from "react";
import LoginMain from "../../components/main/LoginMain";
import PreviewMain from "../../components/main/PreviewMain";
import Header from "../../components/common/Header";
import styled from "@emotion/styled";

export default function HomePage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <Btn onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Logoff" : "Login"}
      </Btn>
      <Header />

      {isLogin ? <LoginMain /> : <PreviewMain />}
    </>
  );
}

const Btn = styled.button`
  display: flex;
  justify-content: center;
  width: 50px;
  border-radius: 25px;
  border: none;
  background-color: #ddd;
`;
