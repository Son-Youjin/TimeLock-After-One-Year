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
      <Outlet />
      {/* Footer 자리 */}
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-around; */

  min-height: 100vh;
  /* padding-top: calc(47px + env(safe-area-inset-top)); */
  padding-top: env(safe-area-inset-top);
  padding-right: 24px;
  padding-left: 24px;
  /* padding-bottom: calc(34px + env(safe-area-inset-bottom)); */
  padding-bottom: env(safe-area-inset-bottom);
`;
