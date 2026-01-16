import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { getLetters } from "../../mock/api/letters";
import type { Letter } from "../../types/letter";
import SideLettersList from "./SideLettersList";
import { IoMdClose } from "react-icons/io";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";

interface SideBarProps {
  isLogin: boolean;
  isOpen: boolean;
  onLogin: () => void;
  onLogout: () => void;
  onClose: () => void;
}

export default function SideBar({
  isLogin,
  isOpen,
  onLogin,
  onLogout,
  onClose,
}: SideBarProps) {
  const navigate = useNavigate();
  const [letters, setLetters] = useState<Letter[]>([]);

  useEffect(() => {
    async function fetch() {
      const data = await getLetters();
      setLetters(data);
    }
    fetch();
  }, []);

  const handleGoLetter = (id: string) => {
    onClose();
    setTimeout(() => {
      navigate(`/letter/${id}`);
    }, 200);
  };

  return (
    <BackDrop onClick={onClose}>
      <Container isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
        <CloseWrapper>
          <Button style={{ width: "30px", height: "30px" }} onClick={onClose}>
            <IoMdClose size={20} />
          </Button>
        </CloseWrapper>

        <SideLettersList
          letters={letters}
          onGoLetter={handleGoLetter}
          onClose={onClose}
        />

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

const Container = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;

  background-color: aliceblue;
  width: 60%;
  height: 100%;

  padding: 8px 12px;
  transform: translateX(${({ isOpen }) => (isOpen ? "0" : "-100%")});
  transition: transform 0.25s ease;
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
