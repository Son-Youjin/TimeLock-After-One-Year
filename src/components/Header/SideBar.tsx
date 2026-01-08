import styled from "@emotion/styled";

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
  return (
    <BackDrop onClick={onClose}>
      <Container onClick={(e) => e.stopPropagation()}>
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
  background-color: aliceblue;
  width: 60%;
  height: 100%;
`;

const LogInOut = styled.button`
  border: none;
`;
