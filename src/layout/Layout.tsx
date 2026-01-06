import { Outlet } from "react-router-dom";
import styled from "@emotion/styled";

export default function Layout() {
  return (
    <Container>
      {/* Header 자리 */}
      <Outlet />
      {/* Footer 자리 */}
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  /* justify-content: space-around; */

  min-height: 100vh;
  padding-top: calc(47px + env(safe-area-inset-top));
  padding-right: 24px;
  padding-left: 24px;
  padding-bottom: calc(34px + env(safe-area-inset-bottom));
`;
