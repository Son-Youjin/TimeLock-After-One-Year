import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import type { Letter } from "../../types/letter";
import SideLettersList from "./SideLettersList";
import { IoMdClose } from "react-icons/io";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";
import { getLettersByUser } from "../../api/letters";
import type { User } from "firebase/auth";
import { style } from "../../styles/theme";

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
                bgcolor={style.colors.Card_Background}
              >
                <IoMdClose size={22} />
              </Button>
            </CloseWrapper>

            {isLogin ? (
              <ContentArea>
                <SideLettersList
                  letters={letters}
                  onGoLetter={handleGoLetter}
                  onClose={onClose}
                />
              </ContentArea>
            ) : (
              <ContentArea>
                <GuestMessage>
                  잊혀질 오늘이 <br />
                  내일의 위로가 되길.
                </GuestMessage>
              </ContentArea>
            )}

            <BottomArea>
              <LogInOut onClick={isLogin ? onLogout : onLogin}>
                {isLogin ? "로그아웃" : "로그인"}
              </LogInOut>

              <BottomText>당신의 1년을 함께 기다립니다.</BottomText>
            </BottomArea>
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
  transition: opacity ${style.motion.modal};

  pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};

  z-index: 999;
`;

const Container = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  width: min(82vw, 320px);
  height: 100vh;
  padding: ${style.spacing.tightGap} ${style.spacing.contentGap};
  background-color: ${style.colors.Card_Background};

  transform: translateX(${({ isOpen }) => (isOpen ? "0" : "-100%")});
  transition: transform ${style.motion.page};
`;

const ContentArea = styled.div`
  flex: 1;
  overflow-y: auto;
  padding-bottom: ${style.spacing.contentGap};
`;

const BottomArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${style.spacing.tightGap};
  padding-top: ${style.spacing.contentGap};
  padding-bottom: calc(${style.spacing.tightGap} + env(safe-area-inset-bottom));

  background: ${style.colors.Card_Background};
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-top: ${style.spacing.tightGap};
`;

const GuestMessage = styled.div`
  margin-top: ${style.spacing.sectionGap};
  text-align: center;

  font-size: ${style.font.body};
  line-height: 1.5;
  color: ${style.colors.Text};
`;

const LogInOut = styled.button`
  width: 100%;
  height: ${style.size.buttonHeight};

  border: none;
  border-radius: ${style.radius.button};
  background-color: ${style.colors.Background_warm};

  font-size: ${style.font.body};
  font-weight: 500;
  color: ${style.colors.Text};
`;

const BottomText = styled.p`
  color: ${style.colors.Text_light};
  margin-bottom: ${style.spacing.tightGap};

  font-size: ${style.font.caption};
  text-align: center;
`;
