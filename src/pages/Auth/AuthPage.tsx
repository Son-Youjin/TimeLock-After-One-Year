import { useNavigate } from "react-router-dom";
import Auth from "../../components/auth/Auth";
import { useEffect } from "react";
import styled from "@emotion/styled";
import { colors } from "../../styles/theme";

export default function AuthPage({
  isLogin,
  authReady,
}: {
  isLogin: boolean;
  authReady: boolean;
}) {
  const navigate = useNavigate();

  useEffect(() => {
    if (authReady && isLogin) {
      navigate("/", { replace: true });
    }
  }, [authReady, isLogin, navigate]);

  if (authReady && isLogin) {
    return null;
  }

  return (
    <PageWrapper>
      <Auth />
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  background: linear-gradient(
    180deg,
    ${colors.Primary} 0%,
    ${colors.Background_warm} 100%
  );
`;
