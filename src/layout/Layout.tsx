import { Outlet } from "react-router-dom";
import styled from "@emotion/styled";
import Header from "../components/Header/Header";
import { useEffect, useRef, useState } from "react";
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
  const [isSideOpen, setIsSideOpen] = useState(false);
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const guideChecked = useRef(false);

  useEffect(() => {
    if (!user?.uid) return;
    if (guideChecked.current) return;

    const currentUser = user;

    guideChecked.current = true;

    async function checkGuide() {
      const userRef = doc(db, "users", currentUser.uid);
      const snap = await getDoc(userRef);

      if (!snap.data()?.hasSeenGuide) {
        setIsGuideOpen(true);
      }
    }

    checkGuide();
  }, [user]);

  return (
    <Container>
      <Header
        onClickInfo={() => setIsGuideOpen(true)}
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
      <GuideModal
        user={user}
        open={isGuideOpen}
        onClose={() => setIsGuideOpen(false)}
      />

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
