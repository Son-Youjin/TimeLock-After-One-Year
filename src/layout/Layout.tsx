import { Outlet } from "react-router-dom";
import styled from "@emotion/styled";
import Header from "../components/Header/Header";
import { useEffect, useState } from "react";
import SideBar from "../components/Header/SideBar";
import type { User } from "firebase/auth";
import GuideModal from "../components/Header/GuideModal";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../api/firebase";

interface LayoutProps {
  isLogin: boolean;
  onLogin: () => void;
  onLogout: () => void;
  user: User | null;
}

export default function Layout({
  isLogin,
  onLogin,
  onLogout,
  user,
}: LayoutProps) {
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [isSideOpen, setIsSideOpen] = useState(false);
  const [isGuideOpen, setIsGuideOpen] = useState(false);

  useEffect(() => {
    async function checkGuide() {
      if (!user) return;

      const userRef = doc(db, "users", user.uid);
      const snap = await getDoc(userRef);

      if (!snap.exists() || !snap.data()?.hasSeenGuide) {
        setIsGuideOpen(true);
        return;
      }
    }

    checkGuide();
  }, [user]);

  return (
    <Container>
      <Header
        onClickInfo={() => setIsInfoOpen(true)}
        onClickSide={() => setIsSideOpen(true)}
      />

      {isSideOpen && (
        <SideBar
          isLogin={isLogin}
          isOpen={isSideOpen}
          onLogin={onLogin}
          onLogout={onLogout}
          onClose={() => setIsSideOpen(false)}
          user={user}
        />
      )}
      {(isInfoOpen || isGuideOpen) && (
        <GuideModal
          user={user}
          onClose={() => {
            setIsInfoOpen(false);
            setIsGuideOpen(false);
          }}
        />
      )}

      <Content>
        <Outlet />
      </Content>
    </Container>
  );
}

const Container = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  padding-top: env(safe-area-inset-top);
  padding-right: 18px;
  padding-left: 18px;
  padding-bottom: env(safe-area-inset-bottom);
`;

const Content = styled.main`
  flex: 1;
  width: 100%;
  overflow-y: auto;

  padding: 6px 8px 0;
`;
