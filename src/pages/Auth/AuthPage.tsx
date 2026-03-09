import { useNavigate } from "react-router-dom";
import Auth from "../../components/auth/Auth";
import { useEffect } from "react";
import styled from "@emotion/styled";
import { colors } from "../../styles/theme";
import { isInAppBrowser } from "../../utils/isInAppBrowser";
import InAppBrowserBlock from "../../components/auth/InAppBrowserBlock";

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

  if (!isLogin && isInAppBrowser()) {
    return <InAppBrowserBlock />;
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
