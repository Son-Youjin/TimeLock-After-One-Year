import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import type { Letter } from "../../types/letter";
import SideLettersList from "./SideLettersList";
import { IoMdClose } from "react-icons/io";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";
import { getLettersByUser } from "../../api/letters";
import type { User } from "firebase/auth";

interface SideBarProps {
  isLogin: boolean;
  isOpen: boolean;
  onLogin: () => void;
  onLogout: () => void;
  onClose: () => void;
  user: User | null;
}

export default function SideBar({
  isLogin,
  isOpen,
  user,
  onLogin,
  onLogout,
  onClose,
}: SideBarProps) {
  const navigate = useNavigate();
  const [letters, setLetters] = useState<Letter[]>([]);
  const [visible, setVisible] = useState(false);
  const shouldRender = isOpen || visible;

  useEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => setVisible(true));
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isLogin || !user) return;

    const uid = user?.uid;

    async function fetch() {
      const data = await getLettersByUser(uid);
      setLetters(data);
    }
    fetch();
  }, [isLogin, user]);

  const handleGoLetter = (id: string) => {
    onClose();
    setTimeout(() => {
      navigate(`/letter/${id}`);
    }, 200);
  };

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  return (
    <>
      {shouldRender && (
        <BackDrop isOpen={visible} onClick={handleClose}>
          <Container isOpen={visible} onClick={(e) => e.stopPropagation()}>
            <CloseWrapper>
              <Button
                style={{ width: "30px", height: "30px" }}
                onClick={handleClose}
              >
                <IoMdClose size={20} />
              </Button>
            </CloseWrapper>

            {isLogin ? (
              <SideLettersList
                letters={letters}
                onGoLetter={handleGoLetter}
                onClose={onClose}
              />
            ) : (
              // 레이아웃 고민...로그아웃 버튼을 올려 내려
              <GuestMessage>
                로그인하면 내 편지를 확인 할 수 있어요
              </GuestMessage>
            )}

            <LogInOut onClick={isLogin ? onLogout : onLogin}>
              {isLogin ? "로그아웃" : "로그인"}
            </LogInOut>
          </Container>
        </BackDrop>
      )}
    </>
  );
}

const BackDrop = styled.div<{ isOpen: boolean }>`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.1);

  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transition: opacity 0.3s ease;

  pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};

  z-index: 999;
`;

const Container = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;

  width: 60%;
  height: 100%;

  padding: 8px 12px;
  transform: translateX(${({ isOpen }) => (isOpen ? "0" : "-100%")});
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const LogInOut = styled.button`
  border: none;
  border-radius: 4px;
  margin-top: 4px;
  padding: 10px;

  background-color: rgba(0, 0, 0, 0.1);
`;

const GuestMessage = styled.div`
  margin: 40px 0;
  text-align: center;
  font-size: 14px;
`;
