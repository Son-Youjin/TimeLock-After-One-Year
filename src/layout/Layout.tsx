import { Outlet } from "react-router-dom";
import styled from "@emotion/styled";
import Header from "../components/Header/Header";
import { useState } from "react";
import ModalNotification from "../components/Header/ModalNotification";
import SideBar from "../components/Header/SideBar";

interface LayoutProps {
  isLogin: boolean;
  onLogin: () => void;
  onLogout: () => void;
}

export default function Layout({ isLogin, onLogin, onLogout }: LayoutProps) {
  const [isBellOpen, setIsBellOpen] = useState(false);
  const [isSideOpen, setIsSideOpen] = useState(false);

  return (
    <Container>
      <Header
        onClickBell={() => setIsBellOpen(true)}
        onClickSide={() => setIsSideOpen(true)}
      />

      {isSideOpen && (
        <SideBar
          isLogin={isLogin}
          onLogin={onLogin}
          onLogout={onLogout}
          onClose={() => setIsSideOpen(false)}
        />
      )}
      {isBellOpen && <ModalNotification onClose={() => setIsBellOpen(false)} />}

      <Content>
        <Outlet />
      </Content>
      {/* Footer 자리 */}
    </Container>
  );
}

const Container = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  padding-top: env(safe-area-inset-top);
  padding-right: 20px;
  padding-left: 20px;
  padding-bottom: env(safe-area-inset-bottom);
`;

const Content = styled.main`
  flex: 1;
  width: 100%;
  overflow-y: auto;

  padding: 6px 8px 0;
`;
