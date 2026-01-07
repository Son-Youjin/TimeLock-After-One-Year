import { Outlet } from "react-router-dom";
import styled from "@emotion/styled";
import Header from "../components/common/Header";
import { useState } from "react";
import ModalNotification from "../components/Notification/ModalNotification";

export default function Layout() {
  const [visible, setVisible] = useState(false);

  return (
    <Container>
      <Header onClickBell={() => setVisible(true)} />
      {visible && <ModalNotification onClose={() => setVisible(false)} />}
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
  padding-top: calc(47px + env(safe-area-inset-top));
  padding-right: 24px;
  padding-left: 24px;
  padding-bottom: calc(34px + env(safe-area-inset-bottom));
`;
