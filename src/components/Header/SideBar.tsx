import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { getLetters } from "../../mock/api/letters";
import type { Letter } from "../../types/letter";
import SideLettersList from "./SideLettersList";
import { IoMdClose } from "react-icons/io";
import Button from "../common/Button";

interface SideBarProps {
  isLogin: boolean;
  onLogin: () => void;
  onLogout: () => void;
  onClose: () => void;
}

export default function SideBar({
  isLogin,
  onLogin,
  onLogout,
  onClose,
}: SideBarProps) {
  const [letters, setLetters] = useState<Letter[]>([]);

  useEffect(() => {
    async function fetch() {
      const data = await getLetters();
      setLetters(data);
    }
    fetch();
  }, []);

  return (
    <BackDrop onClick={onClose}>
      <Container onClick={(e) => e.stopPropagation()}>
        <CloseWrapper>
          <Button style={{ width: "30px", height: "30px" }} onClick={onClose}>
            <IoMdClose size={20} />
          </Button>
        </CloseWrapper>

        <SideLettersList letters={letters} />

        <LogInOut onClick={isLogin ? onLogin : onLogout}>
          {isLogin ? "로그아웃" : "로그인"}
        </LogInOut>
      </Container>
    </BackDrop>
  );
}

const BackDrop = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 999;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  background-color: aliceblue;
  width: 60%;
  height: 100%;

  padding: 8px 12px;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  /* margin: 4px; */
`;

const LogInOut = styled.button`
  border: none;
  border-radius: 4px;
  margin-top: 4px;
  padding: 10px;

  background-color: rgba(0, 0, 0, 0.1);
`;
